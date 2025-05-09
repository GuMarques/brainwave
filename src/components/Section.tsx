import { cn } from "../lib/utils";
import SectionSvg from "../assets/svg/SectionSvg";
import { useLocation, useNavigate } from "react-router-dom";

export const Section = ({
  id,
  crosses,
  children,
  className,
  crossesOffset,
  customPaddings,
  shouldChangeUrl = false,
}: {
  id: string;
  crosses?: boolean;
  className?: string;
  crossesOffset?: string;
  customPaddings?: string;
  children: React.ReactNode;
  shouldChangeUrl?: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      id={id}
      onMouseEnter={() => {
        if (shouldChangeUrl)
          navigate(`${location.pathname}#${id}`, {
            replace: true,
          });
      }}
      className={cn(
        "relative",
        customPaddings ? customPaddings : "py-10 lg:py-16 xl:py-20",
        crosses ? "lg:py-32 xl:py-40" : "",
        className,
      )}
    >
      {children}
      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none
          md:block lg:left-7.5 xl:left-10"
      />
      <div
        className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none
          md:block lg:right-7.5 xl:right-10"
      />
      {crosses && (
        <>
          <div
            className={cn(
              `hidden absolute, top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none
              lg:block xl:left-10 xl:right-10`,
              crossesOffset ? crossesOffset : "",
            )}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};
