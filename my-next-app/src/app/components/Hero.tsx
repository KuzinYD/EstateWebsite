import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start text-left text-white">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="z-10 p-4 max-w-lg">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          CLARITY FOR INVESTORS
        </h1>
        <p className="text-lg sm:text-2xl">VISIBILITY FOR DEVELOPERS</p>
      </div>
    </section>
  );
}
