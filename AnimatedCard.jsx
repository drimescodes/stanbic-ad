import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { card } from "./src/assets";
const AnimatedCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [25, -25]);
  const rotateY = useTransform(x, [-50, 50], [-25, 25]);
  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="absolute bottom-4 right-4 perspective-[1500px]">
      <motion.div
        className="relative"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        transition={{ scale: { duration: 0.2 } }}
      >
        {/* Enhanced glowing effect with multiple layers */}
        <div className="absolute inset-0 -z-10">
          {/* Primary glow */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-blue-500 blur-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary glow for extra effect */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-blue-400 blur-lg"
            animate={{
              scale: [1.05, 1.25, 1.05],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </div>

        {/* Credit Card Image */}
        <motion.img
          src={card}
          alt="Stanbic Credit Card"
          className="relative w-[6rem] transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
