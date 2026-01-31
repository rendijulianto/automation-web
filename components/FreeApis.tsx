import React, { useState } from 'react';
import { DATA_FREE_APIS } from '../constants';
import { Copy, Check, Server, ChevronRight, Play, Terminal, Code2, Layers, Gauge, LifeBuoy, Loader2 } from 'lucide-react';
import { ApiEndpoint, Language } from '../types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface FreeApisProps {
    lang: Language;
}

// --- Code Generator Library ---
type Lang = 'cURL' | 'JavaScript' | 'Python' | 'PHP' | 'Go';

const generateCode = (api: ApiEndpoint, lang: Lang): string => {
  const baseUrl = api.url;
  const method = api.method;
  
  // Create dummy params object
  const paramsObj: Record<string, string> = {};
  api.params.forEach(p => {
    paramsObj[p.name] = p.name === 'apikey' ? 'free' : 'example_value';
  });

  // Query String helper
  const queryString = Object.entries(paramsObj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  const fullUrl = `${baseUrl}?${queryString}`;

  switch (lang) {
    case 'cURL':
      return `curl -X ${method} "${fullUrl}" \\
  -H "Accept: application/json"`;

    case 'JavaScript':
      return `const url = "${baseUrl}";
const params = new URLSearchParams({
${Object.entries(paramsObj).map(([k, v]) => `  ${k}: "${v}"`).join(',\n')}
});

fetch(\`\${url}?\${params}\`, {
  method: "${method}",
  headers: {
    "Accept": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`;

    case 'Python':
      return `import requests

url = "${baseUrl}"
params = {
${Object.entries(paramsObj).map(([k, v]) => `    "${k}": "${v}"`).join(',\n')}
}

response = requests.${method.toLowerCase()}(url, params=params)
print(response.json())`;

    case 'PHP':
      return `<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${fullUrl}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "${method}",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`;

    case 'Go':
      return `package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	url := "${fullUrl}"
	req, _ := http.NewRequest("${method}", url, nil)
	req.Header.Add("Accept", "application/json")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}`;

    default:
      return '';
  }
};

const LANGUAGES: Lang[] = ['cURL', 'JavaScript', 'Python', 'PHP', 'Go'];

const FreeApis: React.FC<FreeApisProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const apis = DATA_FREE_APIS[lang];
  const [activeApi, setActiveApi] = useState<ApiEndpoint>(apis[0]);
  
  // Loading state for code generation
  const [isCodeLoading, setIsCodeLoading] = useState(false);

  // Sync active API if language changes, try to find same ID, else default to 0
  React.useEffect(() => {
    const found = apis.find(a => a.id === activeApi.id);
    if (found) setActiveApi(found);
    else setActiveApi(apis[0]);
  }, [lang]);

  const [activeLang, setActiveLang] = useState<Lang>('JavaScript');

  const handleLangChange = (newLang: Lang) => {
    if (newLang === activeLang) return;
    setIsCodeLoading(true);
    setActiveLang(newLang);
    // Simulate generation delay
    setTimeout(() => {
        setIsCodeLoading(false);
    }, 600);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const codeSnippet = generateCode(activeApi, activeLang);

  // Mapping simple Lang string to SyntaxHighlighter language prop
  const getSyntaxLang = (l: Lang) => {
      if (l === 'cURL') return 'bash';
      return l.toLowerCase();
  }

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 mb-4">
            <Server className="w-4 h-4 text-neon-blue mr-2" />
            <span className="text-neon-blue text-sm font-mono font-bold">PUBLIC API PLAYGROUND</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {lang === 'id' ? 'Gratis untuk' : 'Free for'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">Developer</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
             {lang === 'id' 
               ? 'Kumpulan API gratis yang saya bangun untuk kebutuhan testing dan belajar. Gunakan dengan bijak. No hidden fees.' 
               : 'Collection of free APIs I built for testing and learning purposes. Use wisely. No hidden fees.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar List */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                {lang === 'id' ? 'Daftar Endpoint' : 'Endpoints List'}
            </h3>
            <div className="space-y-2">
              {apis.map((api) => (
                <button
                  key={api.id}
                  onClick={() => setActiveApi(api)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    activeApi.id === api.id
                      ? 'bg-white dark:bg-card-bg border-neon-blue/50 shadow-lg shadow-neon-blue/10'
                      : 'bg-white/50 dark:bg-white/5 border-transparent hover:bg-white dark:hover:bg-white/10'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                        api.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {api.method}
                      </span>
                    </div>
                    <h4 className={`font-bold text-sm truncate ${activeApi.id === api.id ? 'text-neon-blue' : 'text-slate-700 dark:text-gray-300'}`}>
                      {api.name}
                    </h4>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${activeApi.id === api.id ? 'text-neon-blue translate-x-1' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
            
            <div className="p-5 bg-slate-900 rounded-xl text-white mt-8 border border-slate-700 hidden lg:block">
              <h4 className="font-bold text-neon-green mb-2 text-sm">{lang === 'id' ? 'Butuh Custom API?' : 'Need Custom API?'}</h4>
              <p className="text-xs text-gray-400 mb-3">
                {lang === 'id' ? 'Saya bisa membangun API khusus high-performance.' : 'I can build high-performance custom APIs.'}
              </p>
              <a href="#contact" className="text-xs font-bold border-b border-neon-green hover:text-neon-green transition-colors">
                 {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
              </a>
            </div>
          </div>

          {/* Documentation Detail */}
          <div className="lg:col-span-9">
            <div className="bg-white dark:bg-card-bg border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl min-h-[600px]">
              
              {/* Header Info */}
              <div className="border-b border-gray-200 dark:border-white/10 pb-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                    {activeApi.name}
                  </h2>
                  <span className="self-start px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-full text-xs font-mono text-gray-600 dark:text-gray-300">
                    ID: {activeApi.id}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activeApi.description}
                </p>
              </div>

              {/* Endpoint URL */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                    <Layers className="w-4 h-4 mr-2" /> Endpoint
                </h3>
                <div className="flex items-center bg-slate-100 dark:bg-black/30 rounded-lg p-1 border border-gray-200 dark:border-white/5">
                  <div className="px-3 py-2 bg-white dark:bg-white/10 rounded-md shadow-sm text-xs font-bold text-slate-700 dark:text-white mr-2">
                    {activeApi.method}
                  </div>
                  <code className="flex-1 font-mono text-sm text-slate-600 dark:text-neon-blue overflow-x-auto px-2 py-2">
                    {activeApi.url}
                  </code>
                  <button 
                    onClick={() => handleCopy(activeApi.url, 'url')}
                    className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-md transition-colors text-gray-500"
                    title="Copy URL"
                  >
                    {copiedId === 'url' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Rate Limits & Support Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20">
                      <h3 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2 flex items-center">
                        <Gauge className="w-4 h-4 mr-2" /> {lang === 'id' ? 'Rate Limit' : 'Rate Limit'}
                      </h3>
                      <div className="text-sm font-mono font-semibold text-slate-700 dark:text-orange-100">
                        {activeApi.rateLimit}
                      </div>
                      <p className="text-[10px] text-orange-600/70 dark:text-orange-400/70 mt-1">
                        {lang === 'id' ? 'Overload = Ban Sementara' : 'Overload = Temporary Ban'}
                      </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
                      <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center">
                        <LifeBuoy className="w-4 h-4 mr-2" /> {lang === 'id' ? 'Dukungan' : 'Support'}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-blue-100 mb-2">
                         {lang === 'id' ? 'Mengalami kendala integrasi?' : 'Having integration issues?'}
                      </p>
                      <a href="#contact" className="text-xs font-bold text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 flex items-center transition-colors">
                         {lang === 'id' ? 'Hubungi Developer' : 'Contact Developer'} <ChevronRight className="w-3 h-3 ml-1" />
                      </a>
                  </div>
              </div>

              {/* Two Column Layout: Params & Code */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                
                {/* Left: Parameters */}
                <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                    <Code2 className="w-4 h-4 mr-2" /> Parameters
                   </h3>
                   <div className="bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-white/5">
                        <tr>
                            <th className="px-4 py-3 font-medium">Name</th>
                            <th className="px-4 py-3 font-medium">Type</th>
                            <th className="px-4 py-3 font-medium">Req</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                        {activeApi.params.map((param) => (
                            <tr key={param.name}>
                            <td className="px-4 py-3 font-mono text-neon-blue font-medium">
                                {param.name}
                                <div className="text-[10px] text-gray-500 mt-0.5 font-sans leading-tight">{param.description}</div>
                            </td>
                            <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 font-mono">{param.type}</td>
                            <td className="px-4 py-3">
                                {param.required ? (
                                <span className="text-red-500 text-[10px] font-bold bg-red-100 dark:bg-red-900/20 px-1.5 py-0.5 rounded">YES</span>
                                ) : (
                                <span className="text-gray-400 text-[10px]">NO</span>
                                )}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                   </div>
                </div>

                {/* Right: Code Generator (The "Library") */}
                <div className="flex flex-col">
                   <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center">
                            <Terminal className="w-4 h-4 mr-2" /> Request Sample
                        </h3>
                        {/* Language Tabs */}
                        <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-lg border dark:border-slate-700">
                            {LANGUAGES.map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => handleLangChange(lang)}
                                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                                        activeLang === lang 
                                        ? 'bg-white dark:bg-neon-blue text-slate-900 dark:text-slate-900 shadow-sm' 
                                        : 'text-gray-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-white'
                                    }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                   </div>

                   <div className="relative flex-1 group">
                     <div className="absolute top-0 right-0 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                            onClick={() => handleCopy(codeSnippet, 'code')}
                            className="p-1.5 bg-white/10 hover:bg-white/20 text-gray-300 rounded transition-colors backdrop-blur-sm border border-white/10"
                            title="Copy Code"
                        >
                            {copiedId === 'code' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                     </div>
                     <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-inner h-full min-h-[250px] relative">
                        {isCodeLoading && (
                            <div className="absolute inset-0 z-20 bg-slate-900/50 backdrop-blur-[1px] flex items-center justify-center">
                                <Loader2 className="w-8 h-8 text-neon-blue animate-spin" />
                            </div>
                        )}
                        <SyntaxHighlighter 
                            language={getSyntaxLang(activeLang)} 
                            style={vscDarkPlus}
                            customStyle={{
                                background: 'transparent', 
                                padding: '1rem',
                                fontSize: '0.75rem',
                                margin: 0,
                                height: '100%'
                            }}
                        >
                            {codeSnippet}
                        </SyntaxHighlighter>
                     </div>
                   </div>
                </div>

              </div>

              {/* Response Example Section */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center">
                        <Play className="w-4 h-4 mr-2" /> Example Response (200 OK)
                    </h3>
                    {/* Copy Button for Response */}
                    <button 
                        onClick={() => handleCopy(activeApi.exampleResponse, 'response')}
                        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-neon-blue border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 dark:hover:text-white"
                    >
                         {copiedId === 'response' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                         <span>{copiedId === 'response' ? 'Copied' : 'Copy JSON'}</span>
                    </button>
                 </div>
                 
                 <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative group">
                     <div className="absolute top-3 right-3 z-10">
                         <div className="flex space-x-1">
                             <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                         </div>
                     </div>
                     <SyntaxHighlighter 
                        language="json" 
                        style={vscDarkPlus}
                        customStyle={{
                            background: '#020617', // slate-950
                            padding: '1.25rem',
                            fontSize: '0.75rem',
                            margin: 0
                        }}
                    >
                        {activeApi.exampleResponse}
                    </SyntaxHighlighter>
                 </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeApis;