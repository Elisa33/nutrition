// components/DietCard.js
import Image from "next/image";

export default function DietCard({ title, description, imageSrc }) {
  return (
    <div className="flex flex-col gap-8 items-center bg-gray-500 p-4">
      <h3 className="text-center text-lg font-semibold">{title}</h3>
      <div className="relative w-20 h-20 rounded-full overflow-hidden">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
}
