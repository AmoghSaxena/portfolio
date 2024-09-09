import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import dyp from "../../assets/images/dyp.png";
import highschool from "../../assets/images/highschool.jpeg";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import strathclyde from "../../assets/images/strathclyde.jpeg";
import medicaps from "../../assets/images/medicaps.jpeg";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            I'm detail-oriented Software Developer dedicated to building high-quality products. 
            As a Full Stack Engineer, I specialize in taking products from concept 
            to launch. Currently advancing my knowledge with an MSc, I'm driven by 
            a passion for problem-solving and innovation in tech.
            {/* <br />
            I was born and raised in Nagpur, India. I love to play guitar
            and ukulele and in my free time I like to read books, watch movies
            and play video games. */}
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "MSc in Advanced Computer Science with Artificial Intelligence (2023-2024)",
                p: "University Of Strathclyde, Glasgow (UK)",
                image: strathclyde,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Bachelors in Computer Science with Artificial Intelligence (2017-2021)",
                p: "Medi-Caps University, Indore (India)",
                image: medicaps,
              }}
            />
            {/* <AboutItem
              color={yellow}
              data={{
                title: "School of Scholars, Nagpur",
                p: "Secondary Education (2007-2017)",
                image: sos,
              }}
            /> */}
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
