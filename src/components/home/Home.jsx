import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      y: "-100%"
    },
    whileInView: {
      x: 0,
      y: 0
    },
    transition: {
      duration: "0.75"
    }
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>B.Tech Burger Wala</motion.h1>
          <motion.p
            {...options}
            transition={{
              duration: 0.75,
            }}
          >
            Give yourself a tasty burger.
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{
            x: "-100%",
            y: "-100%",
            opacity: 0

          }}
          whileInView={{
            y: 0,
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.75,
          }}
        >
          Explore Menu
        </motion.a>
      </section>

      <Founder />

      <Menu />
    </>
  );
};

export default Home;