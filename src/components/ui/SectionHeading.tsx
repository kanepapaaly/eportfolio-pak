import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  lede?: string;
  /** Mono index shown before the kicker, e.g. "02". */
  index?: string;
};

export function SectionHeading({ kicker, title, lede, index }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs text-mint-strong">{index}</span>
          )}
          <span className="mono-label">{kicker}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
