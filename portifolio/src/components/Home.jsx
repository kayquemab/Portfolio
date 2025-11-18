"use client";

import { FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

    const phrases = [

        // 🔹 JavaScript
        'console.log("Hello World")',

        // // 🔹 TypeScript
        // 'console.log("Hello World")',

        // 🔹 Python
        'print("Hello World")',

        // // 🔹 PHP
        // '<?php echo "Hello World"; ?>',

        // // 🔹 SQL
        // "SELECT 'Hello World';",

        // 🔹 HTML
        '<h1>Hello World</h1>',

        // 🔹 CSS
        'body::after { content: "Hello World"; }',

        // 🔹 React
        'export default function App() { return <h1>Hello World</h1>; }',

        // // 🔹 Vue.js
        // '<template><h1>{{ message }}</h1></template>\n<script>export default { data() { return { message: "Hello World" }; } }</script>',

        // // 🔹 Angular
        // '<h1>{{ title }}</h1> // title = "Hello World";',

        // 🔹 Next.js
        'export default function Page() { return <h1>Hello World</h1>; }',

        // // 🔹 Vite (React base)
        // 'export default function App() { return <h1>Hello World</h1>; }',

        // 🔹 Tailwind CSS
        '<h1 class="text-2xl font-bold">Hello World</h1>',

        // // 🔹 Bootstrap
        // '<h1 class="text-primary">Hello World</h1>',

        // 🔹 Material UI
        'import { Typography } from "@mui/material";\n<Typography variant="h1">Hello World</Typography>',

        // // 🔹 Node.js
        // 'console.log("Hello World")',

        // // 🔹 Express
        // 'app.get("/", (req, res) => res.send("Hello World"));',

        // // 🔹 Laravel
        // "Route::get('/', function () { return 'Hello World'; });",

        // // 🔹 Django
        // 'def hello(request):\n    return HttpResponse("Hello World")',

        // // 🔹 Docker
        // 'CMD echo "Hello World"',

        // // 🔹 Google Cloud / AWS / Azure (Função serverless exemplo)
        // 'exports.helloWorld = (req, res) => { res.send("Hello World"); };',

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
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [charIndex, phraseIndex, phrases]);

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
                <p className="text-white font-mono text-lg">{displayedText}|</p>

                {/* Nome e função */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Kayque Miqueias<br />
                    Desenvolvedor Full-Stack
                </h1>

                {/* Descrição */}
                <p className="text-gray-300 text-center">
                    Apaixonado por desenvolvimento, construo minha trajetória como full-stack, unindo prática em projetos reais e evolução profissional.
                </p>

                {/* Botões */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">

                    {/* Github */}
                    <Link
                        href="https://github.com/kayquemab"
                        target="_blank"
                        className="bg-transparent text-white px-6 py-3 rounded-lg 
             transition-all duration-300 
             hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                    >
                        <Github />
                    </Link>

                    {/* Linkedin */}
                    <Link
                        href="https://www.linkedin.com/in/kayque-miqueias/"
                        target="_blank"
                        className="bg-transparent text-white px-6 py-3 rounded-lg 
             transition-all duration-300 
             hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                    >
                        <Linkedin />
                    </Link>

                    {/* Currículo */}
                    <a
                        href="/Curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent text-white px-6 py-3 rounded-lg 
  transition-all duration-300 
  hover:text-white hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                    >
                        <FileText />
                    </a>

                </div>
                
            </div>

        </motion.section>

    );

}