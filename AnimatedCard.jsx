import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { card } from "./src/assets";
const AnimatedCard = () => {
  // Mouse move rotation logic with increased rotation range
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Increased rotation range from [-15, 15] to [-25, 25] degrees
  // Decreased mouse movement range from [-100, 100] to [-50, 50] for more sensitivity
  const rotateX = useTransform(y, [-50, 50], [25, -25]);
  const rotateY = useTransform(x, [-50, 50], [-25, 25]);

  // Slightly adjusted spring config for the increased range
  const springConfig = { damping: 20, stiffness: 200 }; // Reduced damping for more dramatic movement
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
      {" "}
      {/* Increased perspective */}
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
        {/* Glowing gradient effect */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 rounded-lg bg-blue-500/50 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Credit Card Image */}
        <motion.img
          src={card}
          alt="Stanbic Credit Card"
          className="relative w-[6rem]  transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
