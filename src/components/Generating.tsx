import { loading } from "../assets";
import { cn } from "../lib/utils";

export const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base",
        className,
      )}
    >
      <img
        className="size-5 mr-4 animate-spin group-hover:bg-red-400"
        src={loading}
        alt="Loading"
      />
      AI is generating!
    </div>
  );
};
