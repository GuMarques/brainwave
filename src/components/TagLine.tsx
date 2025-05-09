import brackets from "../assets/svg/Brackets";
import { cn } from "../lib/utils";

export const TagLine = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("tagline flex items-center", className)}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
