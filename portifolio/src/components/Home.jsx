"use client";

import { FileText } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const phrases = [
        // Front-End

        // HTML5: linguagem de marcação utilizada para estruturar páginas web.
        '<h1>Hello World</h1>',

        // CSS3: linguagem de estilização utilizada para definir a aparência visual.
        'body::after { content: "Hello World"; }',

        // JavaScript: linguagem de programação utilizada para adicionar interatividade à web.
        'console.log("Hello World");',

        // TypeScript: linguagem baseada em JavaScript com suporte à tipagem estática.
        'const message: string = "Hello World"; console.log(message);',

        // React: biblioteca JavaScript utilizada para criar interfaces de usuário.
        'export default function App() { return <h1>Hello World</h1>; }',

        // Vue: framework JavaScript utilizado para criar interfaces de usuário.
        '<template><h1>Hello World</h1></template>',

        // Angular: framework front-end completo desenvolvido pelo Google.
        '@Component({ template: "<h1>Hello World</h1>" }) export class AppComponent {}',

        // Next.js: framework baseado em React para criar aplicações web.
        'export default function Page() { return <h1>Hello World</h1>; }',

        // Vite: ferramenta utilizada para criar e executar projetos front-end.
        'document.querySelector("#app").innerHTML = "<h1>Hello World</h1>";',

        // Tailwind CSS: framework CSS baseado em classes utilitárias.
        '<h1 class="text-2xl font-bold">Hello World</h1>',

        // Bootstrap: framework CSS com componentes e estilos prontos.
        '<h1 class="text-primary">Hello World</h1>',

        // MUI: biblioteca de componentes React baseada no Material Design.
        'import { Typography } from "@mui/material"; export default function App() { return <Typography>Hello World</Typography>; }',

        // Svelte: framework front-end utilizado para criar interfaces reativas.
        '<h1>Hello World</h1>',

        // Remix: framework web baseado em React.
        'export default function Index() { return <h1>Hello World</h1>; }',

        // Nuxt: framework baseado em Vue para criar aplicações web.
        '<template><h1>Hello World</h1></template>',

        // Back-End

        // Node.js: ambiente utilizado para executar JavaScript no servidor.
        'console.log("Hello World");',

        // PHP: linguagem de programação muito utilizada no desenvolvimento web.
        '<?php echo "Hello World"; ?>',

        // Laravel: framework PHP utilizado para desenvolver aplicações back-end.
        "Route::get('/', function () { return 'Hello World'; });",

        // Express: framework minimalista utilizado para criar APIs com Node.js.
        'app.get("/", (req, res) => res.send("Hello World"));',

        // Python: linguagem de programação versátil utilizada em diferentes áreas.
        'print("Hello World")',

        // Django: framework Python utilizado para desenvolver aplicações web.
        'from django.http import HttpResponse\ndef hello(request): return HttpResponse("Hello World")',

        // Ruby: linguagem de programação utilizada no desenvolvimento de aplicações.
        'puts "Hello World"',

        // Supabase: plataforma de back-end baseada em PostgreSQL.
        'await supabase.from("messages").insert({ text: "Hello World" });',

        // Prisma: ORM utilizado para trabalhar com bancos de dados em JavaScript e TypeScript.
        'await prisma.message.create({ data: { text: "Hello World" } });',

        // Go: linguagem de programação focada em simplicidade e desempenho.
        'package main\nimport "fmt"\nfunc main() { fmt.Println("Hello World") }',

        // Firebase: plataforma de back-end com banco de dados, autenticação e hospedagem.
        'await addDoc(collection(db, "messages"), { text: "Hello World" });',

        // DevOps / Tools / Cloud

        // Docker: ferramenta utilizada para executar aplicações em containers.
        'CMD ["echo", "Hello World"]',

        // Vercel: plataforma utilizada para publicar e hospedar aplicações web.
        'export default function handler(req, res) { res.status(200).send("Hello World"); }',

        // Git: sistema de controle de versão utilizado para gerenciar alterações no código.
        'git commit -m "Hello World"',

        // Postman: ferramenta utilizada para desenvolver e testar APIs.
        'GET http://localhost:3000/hello-world',

        // n8n: ferramenta de automação baseada em fluxos de trabalho.
        'return [{ json: { message: "Hello World" } }];',

        // Azure DevOps: plataforma utilizada para pipelines, projetos e processos de DevOps.
        '- script: echo "Hello World"',

        // Google Cloud: plataforma de serviços em nuvem desenvolvida pelo Google.
        'exports.helloWorld = (req, res) => res.send("Hello World");',

        // AWS: plataforma de serviços em nuvem desenvolvida pela Amazon.
        'export const handler = async () => ({ statusCode: 200, body: "Hello World" });',

        // Databases

        // MySQL: sistema de gerenciamento de banco de dados relacional.
        "SELECT 'Hello World';",

        // PostgreSQL: sistema de gerenciamento de banco de dados relacional.
        "SELECT 'Hello World';",

        // MongoDB: banco de dados NoSQL baseado em documentos.
        'db.messages.insertOne({ text: "Hello World" });',

        // Oracle: sistema de gerenciamento de banco de dados relacional corporativo.
        "SELECT 'Hello World' FROM dual;",

        // SQL Server: sistema de gerenciamento de banco de dados relacional da Microsoft.
        "SELECT 'Hello World';",

        // Mobile

        // React Native: framework utilizado para criar aplicativos mobile com React.
        'import { Text } from "react-native"; export default function App() { return <Text>Hello World</Text>; }',

        // Flutter: framework utilizado para criar aplicativos multiplataforma.
        'const Text("Hello World")',

        // Swift: linguagem de programação utilizada principalmente para aplicativos Apple.
        'Text("Hello World")',

        // Electron: framework utilizado para criar aplicativos desktop com tecnologias web.
        'const win = new BrowserWindow(); win.loadURL("data:text/html,<h1>Hello World</h1>");',
    ];

    // Texto exibido durante o efeito de digitação.
    const [displayedText, setDisplayedText] = useState("");

    // Índice da frase atualmente selecionada.
    const [phraseIndex, setPhraseIndex] = useState(0);

    // Posição atual do caractere exibido na frase.
    const [charIndex, setCharIndex] = useState(0);

    // Controla o efeito de digitação dos "Hello World's".
    useEffect(() => {
        const interval = setInterval(() => {                                    // Executa o efeito de digitação a cada 100 milissegundos.
            const currentPhrase = phrases[phraseIndex];                          // Obtém a frase atualmente selecionada.

            setDisplayedText(currentPhrase.slice(0, charIndex + 1));             // Exibe a frase até o caractere atual.
            setCharIndex((prev) => prev + 1);                                    // Avança para o próximo caractere.

            if (charIndex + 1 > currentPhrase.length) {                          // Verifica se a frase terminou de ser digitada.
                setTimeout(() => {                                               // Aguarda 1 segundo antes de trocar de frase.
                    setCharIndex(0);                                             // Reinicia a posição do caractere.

                    let nextIndex;                                               // Armazena o índice da próxima frase.

                    do {
                        nextIndex = Math.floor(Math.random() * phrases.length);  // Seleciona aleatoriamente uma nova frase.
                    } while (nextIndex === phraseIndex);                         // Evita repetir a frase atual.

                    setPhraseIndex(nextIndex);                                   // Define a próxima frase que será exibida.
                }, 1000);                                                        // Tempo de espera antes da troca da frase.
            }
        }, 100);                                                                 // Velocidade do efeito de digitação.

        return () => clearInterval(interval);                                    // Encerra o intervalo ao atualizar ou desmontar o componente.
    }, [charIndex, phraseIndex]);                                                 // Executa novamente quando o caractere ou a frase mudar.

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
                    Desenvolvedor{" "}
                    <span className="whitespace-nowrap">Full-Stack</span>
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
                            hover:text-white hover:scale-110
                            hover:shadow-lg hover:-translate-y-1
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
                            hover:text-white hover:scale-110
                            hover:shadow-lg hover:-translate-y-1
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
                            hover:text-white hover:scale-110
                            hover:shadow-lg hover:-translate-y-1
                        "
                    >
                        <FileText />
                    </a>
                </div>
            </div>
        </motion.section>
    );
}