'use client'


import { useRouter } from "next/navigation";


interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col
        gap-2
        justify-center
        items-center
    "
    >

      center
      title = {title}
      subtitle = {subtitle}
    </div>
  );
};

export default EmptyState;
