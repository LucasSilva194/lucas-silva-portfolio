import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import TextThree from "@/components/ui/text-three";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="container-shell grid min-h-[calc(100dvh-5rem)] items-center gap-16 pb-24 pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:pb-32 lg:pt-28"
    >
      <Reveal className="relative z-10 min-w-0">
        <p className="mb-7 max-w-xl text-lg leading-8 text-muted-foreground">
          Full stack developer in Portugal, working across interfaces, APIs,
          data, and the workflows between them.
        </p>

        <h1 className="w-full max-w-6xl text-[clamp(3.7rem,7.2vw,7.4rem)] font-medium leading-[0.84] tracking-[-0.075em] text-foreground">
          <TextThree text="Lucas Silva." speed={72} />
          <TextThree
            text="Software that works."
            speed={58}
            startDelay={950}
            className="mt-3 text-primary"
          />
        </h1>

        <p className="mt-8 max-w-[62ch] text-base leading-7 text-muted-foreground sm:text-lg">
          {profile.shortDescription}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects">
            Explore selected work
            <ArrowDownRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="secondary">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative min-w-0 lg:translate-y-10">
        <div className="group relative ml-auto aspect-[4/5] w-full max-w-[27rem] overflow-hidden rounded-lg bg-muted shadow-[0_35px_100px_-55px_var(--foreground)]">
          <Image
            src="/images/lucas-silva.jpg"
            alt="Lucas Silva at a professional event"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 34vw"
            className="object-cover object-[52%_42%] saturate-[0.82] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c102f]/45 via-transparent to-transparent" />
        </div>
        <p className="ml-auto mt-5 max-w-[27rem] border-t border-border pt-4 font-mono text-xs leading-5 text-muted-foreground">
          Based in {profile.location}. Currently building internal platforms,
          APIs, and workflow automation.
        </p>
      </Reveal>
    </section>
  );
}
