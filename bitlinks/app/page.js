import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 bg-amber-100 p-8 text-black">
        <div className="flex flex-col gap-4 items-center justify-center text-2xl ml-8 text-center">
          <p>The best URL shortener in the market.</p>
          <p>We are the most straight-forward URL shortener in the world.</p>
        </div>
        <div className="flex items-center justify-center">
          <Image alt="Vector" src={"/vector.png"} width={400} height={400} />
        </div>
        <div className="flex gap-4 justify-center">
          <Link href="/shorten">
          <button className="rounded-lg bg-black text-white px-3 py-1">
            Try Now
          </button>
          </Link>
          <Link href="/github">
            <button className="rounded-lg bg-black text-white px-3 py-1">
              Github
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
