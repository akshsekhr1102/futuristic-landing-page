"use client";
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import SectionBorder from "@/components/section-border";
import SectionContent from "@/components/section-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/button";
import Orbit from "@/components/orbit";
import Logo from "@/components/logo";
import Image from "next/image";
import { motion } from "framer-motion";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section id="features" className="">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-content-center place-items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 leading-tight">
                  Your AI-powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li key={feature} className=" flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="size-6 text-violet-400"
                      />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try it now</Button>
              </div>
              <div>
                <div className="size-[270px] md:size-[450px] relative">
                  <div className="absolute inset-0">
                    <Orbit className="size-full " />
                  </div>
                  <div className="absolute-center ">
                    <Orbit className="size-[180px] md:size-[300px]" />
                  </div>
                  <div className="absolute-center ">
                    <Logo className="size-24" />
                  </div>

                  {logos.map((logo) => (
                    <motion.div
                      className=" absolute inset-0 "
                      key={logo.alt}
                      // style={{ transform: `rotate(${-logo.rotate}deg)` }}
                      initial={{ rotate: logo.rotate }}
                      animate={{
                        rotate: [
                          logo.rotate,
                          logo.rotate,
                          logo.rotate + 45,
                          logo.rotate + 45,
                          logo.rotate + 90,
                          logo.rotate + 90,
                          logo.rotate + 135,
                          logo.rotate + 135,
                          logo.rotate + 180,
                          logo.rotate + 180,
                          logo.rotate + 225,
                          logo.rotate + 225,
                          logo.rotate + 270,
                          logo.rotate + 270,
                          logo.rotate + 315,
                          logo.rotate + 315,
                          logo.rotate + 360,
                          logo.rotate + 360,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 15,
                      }}
                    >
                      <motion.div
                        className=" inline-flex size-10 md:size-14 items-center justify-center border border-[var('--color-border')] rounded-lg absolute bg-neutral-800 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        // style={{
                        //   transform: `translate(-50%,-50%) rotate(-${-logo.rotate}deg)`,
                        // }}
                        initial={{
                          translate: "-50% -50%",
                          rotate: logo.rotate,
                        }}
                        animate={{
                          rotate: [
                            -logo.rotate,
                            -logo.rotate,
                            -logo.rotate - 45,
                            -logo.rotate - 45,
                            -logo.rotate - 90,
                            -logo.rotate - 90,
                            -logo.rotate - 135,
                            -logo.rotate - 135,
                            -logo.rotate - 180,
                            -logo.rotate - 180,
                            -logo.rotate - 225,
                            -logo.rotate - 225,
                            -logo.rotate - 270,
                            -logo.rotate - 270,
                            -logo.rotate - 315,
                            -logo.rotate - 315,
                            -logo.rotate - 360,
                            -logo.rotate - 360,
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 15,
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          className="size-6 md:size-9"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
