export type Photo = {
  src: string;       // filename inside /public/images/photography/
  alt: string;
  location?: string;
  year?: number;
};

export const photos: Photo[] = [
  // Add your photos here, e.g.:
  // { src: "01.jpg", alt: "Description", location: "Tokyo", year: 2024 },
];
