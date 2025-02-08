import { motion } from "framer-motion";
import MacCharacter from "../../assets/images/character1.png";
import Button from "../buttons/Button";
import RESUME from "../../assets/Muhammad Yusuf Rahman_resume.pdf";

export default function HeroSection() {
  return (
    <div className="relative overflow-clip text-white bg-gradient-to-b from-neutral-950  to-[#525CEB] mb-44">
      <div
        className="absolute bg-neutral-950 w-[1400px] xl:w-[120svw] h-[40rem] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] border-1 border-/30"
        style={{
          background: "radial-gradient(closest-side, #0a0a0a 85%, #525CEB)",
        }}
      ></div>
      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-9 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-transparent rounded-full blur-3xl"></div>
            <div className="w-[230px] h-fit">
              <img
                src={MacCharacter}
                alt="Muhammad Yusuf Rahman"
                className=" relative z-10"
                loading="eager"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Muhammad{" "}
              <span className="text-blue-400">Yusuf</span> Rahman
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              A passionate Web Developer who loves crafting beautiful,
              user-friendly, and high-performance web applications. Let’s build
              something amazing together!
            </p>
            <div className="flex gap-4 justify-center">
              <a href={RESUME} download>
                <Button className={"text-base md:text-lg"}>Resume</Button>
              </a>
              <a href="mailto:yusufrhmann@gmail.com">
                <Button className={"text-base md:text-lg"} reverse>
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
