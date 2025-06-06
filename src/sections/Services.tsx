import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Generating } from "../components/Generating";
import { check, service1, service2, service3 } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../components/design/Services";
import { cn } from "../lib/utils";
import { useState } from "react";

export const Services = () => {
  const [selectedIcon, setSelectedIcon] = useState(2);
  return (
    <Section id="how-to-use" shouldChangeUrl>
      <div className="container relative pt-6">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div
          className="relative z-1 flex items-center h-[39rem] mb-5 border border-n-1/10 rounded-3xl
            overflow-hidden lg:p-20 xl:h-[46rem]"
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              width={800}
              height={730}
              src={service1}
              alt="Smartest AI"
              className="w-full h-full object-cover md:object-right"
            />
          </div>
          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="h4 mb-4">Smartest AI</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6/80"
                >
                  <img src={check} width={24} height={24} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <Generating
            className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:bottom-8
              lg:-translate-x-1/2"
          />
        </div>
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                alt="Robot"
                width={630}
                height={750}
                src={service2}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0
                to-n-8/90 lg:p-15"
            >
              <h4 className="h4 mb-4">Photo editing</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Enhance your photos effortlessly with Brainwave and bring your
                creative vision to life. Try it now!
              </p>
            </div>
            <PhotoChatMessage />
          </div>
          <div className="relative p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Video generation</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                The world's most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <ul className="flex items-center justify-between h-[3rem] md:h-[4.5rem]">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedIcon(index)}
                    className={cn(
                      `flex items-center justify-center p-0.25 rounded-2xl transition-all
                      cursor-pointer hover:bg-n-6/80`,
                      index === selectedIcon
                        ? "size-11 bg-conic-gradient rounded-2xl md:size-[4.5rem]"
                        : "size-9 bg-n-6 md:size-15",
                    )}
                  >
                    <div
                      className={cn(
                        index === selectedIcon &&
                          "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]",
                      )}
                    >
                      <img
                        src={item}
                        width={24}
                        height={24}
                        alt={item}
                        className="size-5 md:size-6"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                width={520}
                height={400}
                src={service3}
                alt="Video generation"
                className="size-full object-cover"
              />
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};
