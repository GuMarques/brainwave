import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { useLocation } from "react-router-dom";
import brainwave from "../assets/brainwave.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburguerMenu } from "../components/design/Header";
import { Button } from "../components/Button";

export const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [openNavigation]);

  return (
    <div
      className={cn(
        `fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90
        lg:backdrop-blur-sm`,
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm",
      )}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl-mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={cn(
            `fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto
            lg:bg-transparent`,
            openNavigation ? "flex" : "hidden",
          )}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => setOpenNavigation(false)}
                className={cn(
                  `block relative font-code text-2xl uppercase text-n-1 transition-colors
                  hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xl lg:font-semibold
                  lg:leading-5 lg:hover:text-n-1 xl:px-12`,
                  item.onlyMobile ? "lg:hidden" : "",
                  item.url === location.hash
                    ? "z-2 text-n-1"
                    : "lg:text-n-1/50",
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburguerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button
          px="px-3"
          className="ml-auto lg:hidden"
          onClick={() => setOpenNavigation((prev) => !prev)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
