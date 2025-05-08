import { cn } from "../lib/utils";

export const Heading = ({
  text,
  title,
  className,
}: {
  text?: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};
