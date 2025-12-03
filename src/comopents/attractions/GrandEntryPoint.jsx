import { motion } from "framer-motion";
import mainGateImg from "../../assets/infosection/main-gate.c9d6c751.webp";
import Button from "../layout/Button";
import GradientText from "../layout/GradientText";

const GrandEntryPoint = () => {
  const features = [
    {
      id: 1,
      title: "Visitor Information Center",
      description: "Complete details about park attractions",
    },
    {
      id: 2,
      title: "Ticket Counters",
      description: "Seamless entry process for all guests",
    },
    {
      id: 3,
      title: "Parking Facilities",
      description: "Ample eco-friendly parking options",
    },
  ];

  return (
    <div className="min-h-full bg-linear-to-br relative overflow-hidden py-6 px-4">
      {/* Floating Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#53C061] blur-[150px] rounded-full"
      ></motion.div>

      {/* Floating Leaf Icons */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        {["🌿", "🍃", "🌿", "🍃", "🌿", "🍃"].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl"
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, delay: index * 1.2 }}
            style={
              [
                { top: "80px", left: "60px" },
                { top: "160px", right: "100px" },
                { bottom: "130px", left: "120px" },
                { top: "240px", right: "160px" },
                { bottom: "70px", right: "80px" },
                { top: "33%", left: "25%" },
              ][index]
            }
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <Button variant="secondary">
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            Welcome Gateway
          </Button>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GradientText variant="primary">Grand Entry Point</GradientText>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src={mainGateImg}
                alt="Grand Entry Gate"
                className="w-full h-[350px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            }}
            className="space-y-8"
          >
            {/* Text */}
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-4">
                Welcome Gateway
              </h2>
              <p className="text-[#DCEEDD] text-base leading-relaxed">
                The Grand Entry Point serves as the magnificent welcome gateway
                to Nagar Van Satna. Featuring stunning architectural design
                blended with natural elements, it sets the perfect tone for your
                nature retreat.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="shrink-0 w-6 h-6 bg-[#53C061]/20 border border-[#53C061]/40 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-[#53C061]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#B7CDBA] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GrandEntryPoint;
