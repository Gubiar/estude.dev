import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-2 justify-center items-center">
      <div className="absolute right-8 top-8 z-10">
        <ThemeToggle />
      </div>

      <div className="flex gap-10 justify-center items-center">
        <img
          src="/estude-dev.webp"
          width={100}
          height={100}
          className="rounded-full"
          alt="Logo do site estude.dev. A logo representa um livro com códigos referenciando à programação"
        />
        <h1 className="text-6xl font-black">Estude.dev</h1>
      </div>
      <p>Site em construção</p>
      <a
        className="text-lg font-bold"
        href="https://github.com/gubiar/estude.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}
