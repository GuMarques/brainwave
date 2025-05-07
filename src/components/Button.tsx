import ButtonSvg from "../assets/svg/ButtonSvg";
import { cn } from "../lib/utils";

export const Button = ({
  px,
  href,
  white,
  onClick,
  children,
  className,
  spanClassName,
}: {
  px?: string;
  href?: string;
  white?: boolean;
  className?: string;
  onClick?: () => void;
  spanClassName?: string;
  children?: React.ReactNode;
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
          px ? px : "px-7",
          white ? "text-n-8" : "text-n-1",
          className
        )}
      >
        <span className={cn("relative z-10", spanClassName)}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={cn(
          "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
          px ? px : "px-7",
          white ? "text-n-8" : "text-n-1",
          className
        )}
      >
        <span className={cn("relative z-10", spanClassName)}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );
  }
};
