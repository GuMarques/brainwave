import { brainwaveSymbol, check } from "../assets";
import { Button } from "../components/Button";
import { RightCurve } from "../components/design/Collaboration";
import { Section } from "../components/Section";
import { collabApps, collabContent, collabText } from "../constants";
import { cn } from "../lib/utils";

export const Collaboration = () => {
  return (
    <Section crosses id="collaboration">
      <div className="container lg:flex pb-4 md:pb-8 lg:pb-12">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt={item.title} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-2 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div
            className="relative left-1/2 flex w-[19rem] md:w-[22rem] aspect-square border border-n-6
              rounded-full -translate-x-1/2 scale:75 md:scale-100"
          >
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    width={48}
                    height={48}
                    alt="Brainwave"
                    src={brainwaveSymbol}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={cn(
                    "absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom",
                    `rotate-${index * 45}`,
                  )}
                >
                  <div
                    className={cn(
                      `relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15
                      rounded-xl`,
                      `-rotate-${index * 45}`,
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};
