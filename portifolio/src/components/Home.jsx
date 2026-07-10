"use client";

import { FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const phrases = [
        // Front-End
        '<h1>Hello World</h1>',                                                                        // HTML5: linguagem de marcação usada para estruturar páginas web.
        'body::after { content: "Hello World"; }',                                                     // CSS3: linguagem de estilização usada para definir aparência visual.
        'console.log("Hello World");',                                                                 // JavaScript: linguagem de programação principal da web.
        'const message = "Hello World"; console.log(message);',                                        // TypeScript: versão do JavaScript com tipagem.
        'export default function App() { return <h1>Hello World</h1>; }',                              // React: biblioteca JavaScript para criar interfaces.
        '<template><h1>Hello World</h1></template>',                                                   // Vue: framework JavaScript para criar interfaces.
        'export class AppComponent { title = "Hello World"; }',                                        // Angular: framework front-end completo criado pelo Google.
        'export default function Page() { return <h1>Hello World</h1>; }',                             // Next.js: framework React para aplicações web modernas.
        'console.log("Hello World");',                                                                 // Vite: ferramenta rápida para criar e rodar projetos front-end.
        '<h1 class="text-2xl font-bold">Hello World</h1>',                                             // Tailwind CSS: framework CSS baseado em classes utilitárias.
        '<h1 class="text-primary">Hello World</h1>',                                                   // Bootstrap: framework CSS com componentes prontos.
        'import { Typography } from "@mui/material"; export default function App() { return <Typography>Hello World</Typography>; }', // MUI: biblioteca de componentes React baseada no Material Design.
        '<h1>Hello World</h1>',                                                                        // Svelte: framework front-end focado em performance e simplicidade.
        'export default function Index() { return <h1>Hello World</h1>; }',                            // Remix: framework web baseado em React.
        '<template><h1>Hello World</h1></template>',                                                   // Nuxt: framework baseado em Vue.

        // Back-End
        'console.log("Hello World");',                                                                 // Node.js: ambiente para executar JavaScript no servidor.
        '<?php echo "Hello World"; ?>',                                                                // PHP: linguagem muito usada no desenvolvimento web.
        "Route::get('/', function () { return 'Hello World'; });",                                     // Laravel: framework PHP para back-end.
        'app.get("/", (req, res) => res.send("Hello World"));',                                        // Express: framework minimalista para Node.js.
        'print("Hello World")',                                                                        // Python: linguagem de programação versátil, usada no back-end e dados.
        'from django.http import HttpResponse\ndef hello(request): return HttpResponse("Hello World")', // Django: framework Python completo para aplicações web.
        'puts "Hello World"',                                                                          // Ruby: linguagem de programação usada no desenvolvimento web.
        'const { data } = await supabase.from("messages").select("*");',                               // Supabase: plataforma back-end baseada em PostgreSQL.
        'const messages = await prisma.message.findMany();',                                           // Prisma: ferramenta para trabalhar com bancos de dados em JavaScript e TypeScript.
        'package main\nimport "fmt"\nfunc main() { fmt.Println("Hello World") }',                      // Go: linguagem de programação focada em performance e simplicidade.
        'console.log("Hello World from Firebase");',                                                   // Firebase: plataforma back-end com autenticação, banco de dados e hospedagem.

        // DevOps / Tools / Cloud
        'CMD echo "Hello World"',                                                                      // Docker: ferramenta para criar e rodar aplicações em containers.
        'export default function handler(req, res) { res.status(200).send("Hello World"); }',          // Vercel: plataforma de deploy e hospedagem para aplicações web.
        'git commit -m "Hello World"',                                                                 // Git: sistema de versionamento de código.
        'GET /hello-world',                                                                            // Postman: ferramenta para desenvolver e testar APIs.
        'script: echo "Hello World"',                                                                  // Azure DevOps: plataforma para DevOps, pipelines e gestão de projetos.
        'exports.helloWorld = (req, res) => res.send("Hello World");',                                 // Google Cloud: plataforma de serviços em nuvem do Google.
        'export const handler = async () => ({ statusCode: 200, body: "Hello World" });',              // AWS: plataforma de serviços em nuvem da Amazon.

        // Databases
        "SELECT 'Hello World';",                                                                       // MySQL: banco de dados relacional.
        "SELECT 'Hello World';",                                                                       // PostgreSQL: banco de dados relacional avançado.
        'db.messages.insertOne({ message: "Hello World" });',                                          // MongoDB: banco de dados NoSQL baseado em documentos.
        "SELECT 'Hello World' FROM dual;",                                                             // Oracle: banco de dados relacional corporativo.
        "SELECT 'Hello World';",                                                                       // SQL Server: banco de dados relacional da Microsoft.

        // Mobile
        'export default function App() { return <Text>Hello World</Text>; }',                          // React Native: framework para criar aplicativos mobile com React.
        'Text("Hello World")',                                                                         // Flutter: framework para criar aplicativos multiplataforma.
        'print("Hello World")',                                                                        // Swift: linguagem usada principalmente para aplicativos iOS.
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Função para o efeito dos "Hello World's"
    useEffect(() => {
        const interval = setInterval(() => {
            const currentPhrase = phrases[phraseIndex];

            setDisplayedText(currentPhrase.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);

            if (charIndex + 1 > currentPhrase.length) {
                setTimeout(() => {
                    setCharIndex(0);

                    let nextIndex;

                    do {
                        nextIndex = Math.floor(Math.random() * phrases.length);
                    } while (nextIndex === phraseIndex);

                    setPhraseIndex(nextIndex);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [charIndex, phraseIndex]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
        min-h-screen 
        flex flex-col justify-center items-center 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
        text-center 
        pb-16 sm:pb-20 md:pb-24 lg:pb-32
        pt-16 sm:pt-20 md:pt-24 lg:pt-32
      "
        >
            <div className="max-w-3xl flex flex-col items-center gap-6">
                {/* Texto */}
                <p className="text-white font-mono text-lg whitespace-pre-wrap">
                    {displayedText}|
                </p>

                {/* Nome e função */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Kayque Miqueias
                    <br />
                    Desenvolvedor <span className="whitespace-nowrap">Full-Stack</span>
                </h1>

                {/* Descrição */}
                <p className="text-gray-300 text-center">
                    Apaixonado por desenvolvimento, construo minha trajetória como
                    full-stack, unindo prática em projetos reais e evolução profissional.
                </p>

                {/* Botões */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {/* Github */}
                    <Link
                        href="https://github.com/kayquemab"
                        target="_blank"
                        className="
              bg-transparent text-white px-6 py-3 rounded-lg 
              transition-all duration-300 cursor-pointer
              hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1
            "
                    >
                        <Github />
                    </Link>

                    {/* Linkedin */}
                    <Link
                        href="https://www.linkedin.com/in/kayque-miqueias/"
                        target="_blank"
                        className="
              bg-transparent text-white px-6 py-3 rounded-lg 
              transition-all duration-300 cursor-pointer
              hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1
            "
                    >
                        <Linkedin />
                    </Link>

                    {/* Currículo */}
                    <a
                        href="/Curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              bg-transparent text-white px-6 py-3 rounded-lg 
              transition-all duration-300 cursor-pointer
              hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1
            "
                    >
                        <FileText />
                    </a>
                </div>
            </div>
        </motion.section>
    );
}