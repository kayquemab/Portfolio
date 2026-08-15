import { Github, Instagram, Linkedin } from "lucide-react";

export const frasesInicio = [
  '<h1 class="text-4xl font-bold">Hello World</h1>',
  'console.log("Hello World");',
  'const message: string = "Hello World";',
  'export default function App() { return <h1>Hello World</h1>; }',
  'app.get("/", (req, res) => res.send("Hello World"));',
  'print("Hello World")',
  'await prisma.message.create({ data: { text: "Hello World" } });',
  'git commit -m "Hello World"',
  "SELECT 'Hello World';",
  'db.messages.insertOne({ text: "Hello World" });',
  'const Text("Hello World")',
  'export const handler = async () => ({ body: "Hello World" });',
];

export const redesInicio = [
  { nome: "GitHub", link: "https://github.com/kayquemab", icon: Github },
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
