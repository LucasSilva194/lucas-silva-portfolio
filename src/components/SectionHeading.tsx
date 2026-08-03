type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16 border-t border-border pt-7 lg:mb-24 lg:grid lg:grid-cols-[0.34fr_1fr] lg:gap-12">
      <span aria-hidden="true" className="hidden h-2 w-2 rounded-full bg-primary lg:mt-4 lg:block" />
      <div>
        <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
