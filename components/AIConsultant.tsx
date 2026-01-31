import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

interface AIConsultantProps {
    lang: Language;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set welcome message based on language
  useEffect(() => {
    setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: lang === 'id' 
            ? 'Halo! Saya RenAssist 🤖. Ada yang bisa saya bantu terkait pembuatan bot atau automasi hari ini?'
            : 'Hello! I am RenAssist 🤖. How can I help you regarding bot creation or automation today?'
        }
    ]);
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToGemini(userMessage.text);
      
      const botMessageId = (Date.now() + 1).toString();
      // Initialize empty bot message
      setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '' }]);

      let fullText = '';
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        
        setMessages(prev => 
            prev.map(msg => 
                msg.id === botMessageId ? { ...msg, text: fullText } : msg
            )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: lang === 'id' 
            ? 'Maaf, terjadi kesalahan koneksi. Silakan coba lagi nanti atau hubungi kontak WhatsApp.'
            : 'Sorry, connection error occurred. Please try again later or contact via WhatsApp.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-neon-green text-dark-bg rounded-full shadow-lg hover:bg-emerald-400 transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Konsultasi AI"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="ml-2 font-bold hidden md:block">{lang === 'id' ? 'Tanya AI' : 'Ask AI'}</span>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full md:w-96 bg-white dark:bg-card-bg border border-gray-200 dark:border-neon-green/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up max-h-[600px] transition-colors duration-300">
          {/* Header */}
          <div className="p-4 bg-gray-50 dark:bg-dark-bg/90 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
            <div className="flex items-center">
              <div className="p-2 bg-neon-green/20 rounded-lg mr-3">
                <Sparkles className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">AutoAssist AI</h3>
                <p className="text-xs text-neon-green animate-pulse">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80 bg-gray-50 dark:bg-dark-bg/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-neon-green text-dark-bg rounded-br-none font-medium'
                      : 'bg-white dark:bg-white/10 text-slate-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-white/5 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   <div className="bg-white dark:bg-white/10 p-3 rounded-2xl rounded-bl-none flex items-center space-x-2 border border-gray-200 dark:border-white/5 shadow-sm">
                       <Loader2 className="w-4 h-4 text-neon-green animate-spin" />
                       <span className="text-xs text-gray-500 dark:text-gray-400">{lang === 'id' ? 'Sedang mengetik...' : 'Typing...'}</span>
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={lang === 'id' ? "Misal: Saya butuh bot scrap..." : "e.g., I need a scraping bot..."}
                className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-neon-green/50 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-neon-green text-dark-bg rounded-xl hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-600 mt-2 text-center">
              AI disclaimer: content generated by AI.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;