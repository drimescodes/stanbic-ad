import { motion } from "motion/react";
import { Search } from "lucide-react";
import AnimatedCard from "../AnimatedCard";
import TypewriterText from "./Typewriter";
import { logo, lady_blue } from "./assets";

const App = () => {
  return (
    <div className="relative mx-auto flex h-svh items-center justify-center">
      {/* Background Image Container */}
      <div className="relative h-[250px] w-[300px] overflow-hidden">
        {/* Background Image with scale */}
        <div
          className="absolute inset-0 scale-105 transform bg-cover bg-right-bottom transition-transform duration-300"
          style={{
            backgroundImage: `url(${lady_blue})`,
          }}
        />

        {/* Content Container */}
        <div className="relative h-full w-full">
          {/* Stanbic Logo */}
          <motion.div
            className="absolute left-1 top-1 flex items-center gap-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="Stanbic Bank Logo" className="h-10" />

            <div className="leading-[.4]">
              <p className="text-xl font-bold text-white">Stanbic Bank</p>
              <p className="ml-[4.5rem] font-semibold text-white">Private</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-1 top-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="bg-[#e5b8c6] bg-opacity-60 text-sm">
              #No1PrivateBank
            </p>
          </motion.div>

          {/* Text Content */}
          <div className="absolute bottom-11 left-4 right-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-2 inline-block bg-[#e5b8c6] px-2 py-1 text-sm text-white"
            >
              <TypewriterText text="IT'S MORE THAN BANKING" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold text-blue-600"
            >
              {`IT'S LIVING JOYFULLY.`}
            </motion.div>
          </div>

          {/* Credit Card Component */}
          <div className="w-[16rem]">
            <AnimatedCard />
          </div>

          {/* Website URL */}
          <motion.div
            className="absolute bottom-4 left-4 flex items-center gap-1 bg-blue-600 p-[.15rem] text-sm text-white "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Search size={15} />
            <a
              href="https://stanbicbank.co.ke"
              target="_blank"
              className="cursor-pointer"
            >
              | stanbicbank.co.ke
            </a>
          </motion.div>

          <p className="absolute bottom-0 left-4 text-[0.45rem] text-white">
            Stanbic Bank Kenya Limited is liscensed and regulated by the Central
            Bank Of Kenya
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
