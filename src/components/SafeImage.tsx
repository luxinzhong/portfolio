"use client";

export default function SafeImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      onError={(e) => {
        e.currentTarget.parentElement?.style.setProperty("display", "none");
      }}
    />
  );
}
