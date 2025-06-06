import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "../components/design/Pricing";
import { Heading } from "../components/Heading";
import { PricingList } from "../components/PricingList";
import { Section } from "../components/Section";

export const Pricing = () => {
  return (
    <>
      <Section id="stars" className="overflow-hidden">
        <div className="container relative z-2">
          <div className="hidden relative justify-center lg:flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div
              className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2
                pointer-events-none"
            >
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="overflow-hidden" id="pricing" shouldChangeUrl>
        <div
          className="container relative z-2 pt-6"
          onMouseEnter={() => window.history.pushState(null, "", "#pricing")}
        >
          <Heading
            tag="Get started with Brainwave"
            title="Pay once, use forever"
          />

          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>

          <div className="flex justify-center mt-10">
            <a
              className="text-xs font-code font-bold tracking-wider uppercase border-b"
              href="#pricing"
            >
              See the full details
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};
