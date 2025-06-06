import { cn } from "../lib/utils";
import { TagLine } from "./TagLine";

export const Heading = ({
  tag,
  text,
  title,
  className,
}: {
  tag?: string;
  text?: string;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center",
        className,
      )}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};
