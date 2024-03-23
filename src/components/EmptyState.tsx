interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import { useRouter } from "next/navigation";

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {

    const router = useRouter();
  return(<div
    className="
        h-[60vh]
        flex 
        flex-col
        gap-2
        justify-center
        items-center
    "
  >Empty
    </div>
  );
};

export default EmptyState;