/**
 * The ImpossibleLabs mark: a Penrose triangle built from three face strips.
 * Each polygon is one face orientation; together the three beams close on
 * paper but never in space. Points come from three families of parallel
 * lines (bottom, right, left), three lines per family, one bar width apart.
 */
const FACES = [
  {
    points:
      "-6.93,-45.74 22.29,4.87 -8.43,4.87 -15.36,16.87 43.07,16.87 6.93,-45.74",
    fill: "#9fdcff",
  },
  {
    points:
      "43.07,16.87 -15.36,16.87 0,-9.74 -6.93,-21.74 -36.14,28.87 36.14,28.87",
    fill: "#5fbaf0",
  },
  {
    points:
      "-36.14,28.87 -6.93,-21.74 8.43,4.87 22.29,4.87 -6.93,-45.74 -43.07,16.87",
    fill: "#2a7fb8",
  },
];

interface PenroseProps {
  className?: string;
  /** Play the one-time face-by-face entrance */
  animate?: boolean;
  /** Accessible name; omit for a purely decorative instance */
  title?: string;
}

export function Penrose({ className, animate = false, title }: PenroseProps) {
  const a11y = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true as const };

  return (
    <svg viewBox="-45 -48 90 79" className={className} {...a11y}>
      {FACES.map((face) => (
        <polygon
          key={face.fill}
          points={face.points}
          fill={face.fill}
          className={animate ? "penrose-face" : undefined}
        />
      ))}
    </svg>
  );
}
