"use client";

export default function ProjectCoverImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
