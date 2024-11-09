"use client";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import robotImg from "@/assets/images/robot.jpg";
import underlineImg from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import { Button } from "@/components/button";
import Image from "next/image";
import Orbit from "@/components/orbit";
import Planet from "@/components/planet";
import SectionBorder from "@/components/section-border";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);

  return { xProgress, yProgress };
};

export const Hero = () => {
  const sectionRef = useRef(null);
  const { xProgress, yProgress } = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const translateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const translateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const translateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);
  return (
    <section ref={sectionRef} className="">
      <div className="container">
        <SectionBorder>
          <div className="container py-24 md:py-36 lg:py-48 relative isolate overflow-hidden ">
            <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10"></div>
            <div className="absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Explore the Possibilities of AI Chatting with{" "}
              <span className="relative">
                <span>Spherial</span>
                <span
                  className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-fuchsia-400),var(--color-violet-400))]"
                  style={{
                    maskImage: `url(${underlineImg.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Unleash the power of AI within Spherial. Upgrade your productivity
              with Spherial, the open AI chat app.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className=" -translate-x-[316px] -translate-y-[76px] rotate-135 hidden lg:block"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateLargeX,
                    y: translateLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className=" -translate-y-[188px] translate-x-[334px] -rotate-135 hidden lg:block "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateSmallX,
                    y: translateSmallY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className=" -translate-y-[371px] -translate-x-[508px] rotate-135 hidden lg:block "
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateMediumX,
                    y: translateMediumY,
                  }}
                >
                  <Planet
                    size="md"
                    color="teal"
                    className="-translate-y-[342px] translate-x-[488px] -rotate-135 hidden lg:block"
                  />
                </motion.div>
              </div>
              {/* chat bubble */}
              <div className="absolute top-[30%] left-0 z-20 -translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformedY,
                  }}
                >
                  <div>
                    Can you generate a incredible end dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1 min ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute top-[50%] right-0 z-20 translate-x-10 hidden lg:block">
                <motion.div
                  className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                  style={{
                    y: transformedY,
                  }}
                >
                  <div>
                    <strong>Brainwave:</strong> Just created one inspired from{" "}
                    <strong>@dammitaksh</strong>
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1 min ago
                  </div>
                </motion.div>
              </div>
              <div className="mt-20 rounded-2xl border-2  overflow-hidden border-gradient relative z-10 w-full">
                <Image src={robotImg} alt="" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-full px-4">
                  <div className="bg-gray-950/80 flex items-center  gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />

                    <div className="font-semibold text-xl text-gray-100  ">
                      <p>
                        AI is generating{" "}
                        <span className="animate-cursor-blink">|</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
