import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const GameOfSquids = localFont({
  src: 'fonts/Game-Of-Squids.otf',
});


export default function Home() {

  const games = [
    {
      symbol: "0",
      link: "/hanging-around",
    },
    {
      symbol: "{",
      link: "/dont-cross-me",
    },
    {
      symbol: "}",
      link: "/whats-the-word",
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#FF3FD5] bg-[url('/images/tex-1.jpg')] bg-blend-screen">


      <div id="title" className="mb-24 flex flex-col sm:w-96 md:w-1/2">
        <div>
          <Image src="/images/saadia.png" width={500} height={500} alt={""} /></div>
        <div className="flex justify-end "> <Image src="/images/games.png" width={400} height={400} alt={""} /></div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {games.map((game, index) => (
          <Link
            key={index}
            className={`flex items-center justify-center w-64 h-40 text-8xl bg-[url("/images/cardboard-tex-1.jpg")] bg-center bg-cover custfont-GameOfSquids ${GameOfSquids.className}`}
            href={game.link}
          >
            {game.symbol}
          </Link>
        ))}
      </div>


    </main>
  );
}
