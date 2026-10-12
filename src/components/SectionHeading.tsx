interface SectionHeadingProps {
  title: string;
  blurb: string;
}

export function SectionHeading({ title, blurb }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 md:mb-9 md:flex-row md:items-baseline md:justify-between md:gap-6">
      <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] md:text-[34px]">
        {title}
      </h2>
      <p className="text-[17px] text-mist md:text-lg">{blurb}</p>
    </div>
  );
}
