"use client";
import { Button } from "@/components/button";
import SectionBorder from "@/components/section-border";
import SectionContent from "@/components/section-content";
import UnderlineImg from "@/assets/images/underline.svg?url";
import Orbit from "@/components/orbit";
import Planet from "@/components/planet";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

export const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const translateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const translateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const translateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);
  return (
    <section className="">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10" />
            <div className="absolute inset-0">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
              <Orbit className="size-[950px] absolute-center" />
            </div>
            <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="lg"
                color="violet"
                className=" translate-y-[200px]  -translate-x-[200px]  rotate-45"
              />
            </motion.div>

            <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="lg"
                color="violet"
                className=" -translate-y-[200px]  translate-x-[200px]  -rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateMediumX,
                y: translateMediumY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="md"
                color="teal"
                className=" translate-y-[0px]  -translate-x-[500px]  rotate-90"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateMediumX,
                y: translateMediumY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="md"
                color="teal"
                className=" -translate-y-[100px]  translate-x-[500px]  -rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateSmallX,
                y: translateSmallY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="sm"
                color="fuchsia"
                className=" -translate-y-[250px]  -translate-x-[400px]  rotate-135"
              />
            </motion.div>
            <motion.div
              style={{
                x: translateSmallX,
                y: translateSmallY,
              }}
              className=" hidden md:block absolute-center -z-10"
            >
              <Planet
                size="sm"
                color="fuchsia"
                className=" translate-y-[100px]  translate-x-[400px] -rotate-45"
              />
            </motion.div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl text-center leading-tight mx-auto max-w-2xl">
              Join the AI revolution with{" "}
              <span className="relative isolate">
                <span>Spherial</span>
                <span
                  className="absolute -translate-y-1/2 top-full left-0 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))] "
                  style={{
                    maskImage: `url(${UnderlineImg.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h2>
            <p className=" text-center text-xl mt-8 max-w-2xl mx-auto">
              Experience the transformative power of AI with{" "}
              <span>Spherial</span>. Boost your productivity and streamline your
              workflow with our innovative AI chat platform
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
