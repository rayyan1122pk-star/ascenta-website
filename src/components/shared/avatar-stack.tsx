import Image from "next/image";
import { testimonials } from "@/config/testimonials";

export function AvatarStack({
  count = 5,
  label,
}: {
  count?: number;
  label: string;
}) {
  const avatars = testimonials.slice(0, count);

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((t) => (
          <div
            key={t.name}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-background"
          >
            <Image src={t.avatar} alt={t.name} fill sizes="36px" className="object-cover" />
          </div>
        ))}
      </div>
      <p className="text-left text-xs text-muted-foreground">
        <span className="block font-semibold text-white">{label}</span>
        Trusted by growing businesses
      </p>
    </div>
  );
}
