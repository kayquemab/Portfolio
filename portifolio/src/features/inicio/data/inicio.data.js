import { Github, Instagram, Linkedin } from "lucide-react";

export const frasesInicio = [
  // Front-end

  // JavaScript
  'console.log("Hello World");',

  // TypeScript
  'const message: string = "Hello World";',

  // React
  'export default function App() { return <h1>Hello World</h1>; }',

  // Next.js
  'export default function Page() { return <h1>Hello World</h1>; }',

  // Tailwind CSS
  '<h1 class="text-4xl font-bold">Hello World</h1>',

  // Back-end

  // Node.js
  'console.log("Hello World");',

  // Python
  'print("Hello World")',

  // MySQL
  "SELECT 'Hello World';",

  // Supabase
  "const { data } = await supabase.from('messages').select('Hello World');",

  // DevOps e ferramentas

  // Docker
  'CMD ["echo", "Hello World"]',

  // Vercel
  'export default function handler(req, res) { res.send("Hello World"); }',

  // AWS
  'export const handler = async () => ({ body: "Hello World" });',

  // Git
  'git commit -m "Hello World"',

  // Google Cloud
  'exports.helloWorld = (req, res) => res.send("Hello World");',
];

export const redesInicio = [
  {
    nome: "GitHub",
    link: "https://github.com/kayquemab",
    icon: Github
  },
  {
    nome: "LinkedIn",
    link: "https://www.linkedin.com/in/kayque-miqueias/",
    icon: Linkedin,
  },
  {
    nome: "Instagram",
    link: "https://www.instagram.com/kayque.mab/",
    icon: Instagram,
  },
];
