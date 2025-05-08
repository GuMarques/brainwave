import { cn } from "../lib/utils";

export const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};
