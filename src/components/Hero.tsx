import { Penrose } from "@/components/Penrose";
import { Pill } from "@/components/Pill";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 md:px-10">
      <div className="grid items-center gap-10 py-12 md:grid-cols-[1.3fr_1fr] md:gap-16 md:py-24">
        <div className="hero-copy flex flex-col gap-7">
          <h1 className="font-display text-[36px] font-bold leading-[1.04] tracking-[-0.03em] md:text-[58px]">
            Building absurd products for fun.
          </h1>
          <p className="max-w-[46ch] text-lg leading-relaxed text-mist md:text-[21px]">
            A hardware and software studio by OxMarco. Unreasonable ideas,
            built for real and shared as open source.
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            <Pill href="#products" primary size="lg">
              See the products
            </Pill>
            <Pill href="#lab" size="lg">
              Browse the lab
            </Pill>
          </div>
          <figure className="mt-5 max-w-[52ch] border-t border-line pt-5">
            <blockquote className="text-[17px] leading-relaxed text-mist">
              “Only those who attempt the absurd will achieve the impossible.”
            </blockquote>
            <figcaption className="mt-1.5 text-[15px] font-medium text-paper">
              M.C. Escher
            </figcaption>
          </figure>
        </div>

        <Penrose
          animate
          title="A Penrose triangle, the ImpossibleLabs mark"
          className="w-56 md:w-full md:max-w-[440px] md:justify-self-end"
        />
      </div>
    </section>
  );
}
