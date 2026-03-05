"use client";

import { FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

    const phrases = [
        // HTML5
        '<h1>Hello World</h1>',

        // CSS3
        'body::after { content: "Hello World"; }',

        // JavaScript
        'console.log("Hello World");',

        // TypeScript
        'console.log("Hello World");',

        // React
        'export default function App() { return <h1>Hello World</h1>; }',

        // Angular
        'export class AppComponent { title = "Hello World"; } // <h1>{{ title }}</h1>',

        // Vue.js
        '<template><h1>{{ message }}</h1></template>\n<script>export default { data() { return { message: "Hello World" }; } }</script>',

        // Next.js
        'export default function Page() { return <h1>Hello World</h1>; }',

        // Vite (React)
        'export default function App() { return <h1>Hello World</h1>; }',

        // Tailwind CSS
        '<h1 class="text-2xl font-bold">Hello World</h1>',

        // Bootstrap
        '<h1 class="text-primary">Hello World</h1>',

        // Material UI (MUI)
        'import { Typography } from "@mui/material";\nexport default function App(){ return <Typography variant="h4">Hello World</Typography>; }',

        // Svelte
        '<script>\n  let message = "Hello World";\n</script>\n\n<h1>{message}</h1>',

        // Node.js
        'console.log("Hello World");',

        // PHP
        '<?php echo "Hello World"; ?>',

        // Laravel
        "Route::get('/', function () { return 'Hello World'; });",

        // Python
        'print("Hello World")',

        // Express
        'app.get("/", (req, res) => res.send("Hello World"));',

        // Django
        'from django.http import HttpResponse\n\ndef hello(request):\n    return HttpResponse("Hello World")',

        // FastAPI
        'from fastapi import FastAPI\napp = FastAPI()\n\n@app.get("/")\ndef hello():\n    return {"message": "Hello World"}',

        // Pandas
        'import pandas as pd\nprint(pd.DataFrame({"message": ["Hello World"]}))',

        // NumPy
        'import numpy as np\nprint(np.array(["Hello World"]))',

        // SQLAlchemy
        'from sqlalchemy import text\nresult = session.execute(text("SELECT \'Hello World\'")).scalar_one()\nprint(result)',

        // Pytest
        'def test_hello_world():\n    assert "Hello World" == "Hello World"',

        // Scikit-learn
        'from sklearn.feature_extraction.text import CountVectorizer\nprint(CountVectorizer().fit_transform(["Hello World"]).toarray())',

        // Ruby
        'puts "Hello World"',

        // Docker
        'CMD echo "Hello World"',

        // Git
        'git commit -m "Hello World"',

        // AWS (Lambda - Node.js)
        'export const handler = async () => ({ statusCode: 200, body: "Hello World" });',

        // Vercel (Edge/Serverless - Next.js API Route)
        'export default function handler(req, res) { res.status(200).send("Hello World"); }',

        // Postman
        // tecnologia não disponível

        // Google Cloud (Cloud Function - Node.js)
        'exports.helloWorld = (req, res) => res.status(200).send("Hello World");',

        // Azure DevOps
        // tecnologia não disponível 

        // MySQL
        "SELECT 'Hello World';",

        // PostgreSQL
        "SELECT 'Hello World';",

        // SQL Server
        'SELECT \'Hello World\';',

        // MongoDB
        'db.hello.insertOne({ message: "Hello World" });',

        // Oracle
        "SELECT 'Hello World' FROM dual;",

        // Electron
        'console.log("Hello World"); // (renderer/main process)'
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
                <p className="text-white font-mono text-lg">{displayedText}|</p>

                {/* Nome e função */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Kayque Miqueias<br />
                    Desenvolvedor <span className="whitespace-nowrap">Full-Stack</span>
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