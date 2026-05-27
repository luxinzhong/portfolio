import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photography — Lucy Zhong",
  description: "Photography by Lucy Zhong.",
};

export default function PhotographyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Photography
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Selected Works
        </h1>
      </div>
      <PhotoGallery />
    </div>
  );
}
