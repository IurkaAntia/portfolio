import { useState, useEffect, useMemo } from "react";
import ContentCard from "./components/ContentCard";
import { motion } from "framer-motion";
import images from "./constants/images";
import ExperienceCard from "./components/ExperienceCard";

function Home() {
  const [activeButton, setActiveButton] = useState("");

  const sections = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "recommendations", label: "Recommendations" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveButton(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative z-0">
      <div className="flex flex-row h-screen bg-gradient-to-r from-[#0e0c20] to-[#423c7d] text-white">
        <div className="flex flex-col items-center justify-center space-y-6 p-4">
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`p-2 transition-all duration-300 ${
                  activeButton === `#${section.id}`
                    ? "translate-x-4 border-b-2 text-purple-600 border-white"
                    : "opacity-70"
                }`}
              >
                <span className="text-white font-bold">{section.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto scrollbar-none w-full">
          <motion.div
            id="main"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl my-40 mx-auto relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="space-y-2 flex flex-col px-16 py-16">
              <motion.div
                className="flex flex-col text-5xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
              >
                <motion.span>
                  Hi, My Name is{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Iuri
                  </span>
                  ,
                </motion.span>
                <motion.span>
                  I am a{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Web & Mobile Developer.
                  </span>
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="flex justify-center my-20"
          >
            <div className="border-4 px-2 py-6 rounded-3xl flex justify-center ">
              <motion.span
                className="bg-white rounded-2xl p-2"
                animate={{ y: [0, -17, 17, 0] }} // Movement: up, down, and back
                transition={{
                  duration: 2, // Total animation duration
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              ></motion.span>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            id="about"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="h-screen">
              <div className="space-y-2 flex flex-col justify-center px-16 py-16">
                <h1 className="text-5xl font-extrabold">Overview.</h1>
                <p className="text-lg opacity-60 hover:opacity-100 transition-all duration-300">
                  I am a passionate Full-Stack Laravel Developer and a skilled
                  Web & Mobile Developer, specializing in React and React
                  Native. With a strong foundation in backend development and
                  modern frontend technologies, I have a proven track record of
                  delivering high-quality solutions for diverse projects. From
                  creating seamless APIs to building interactive user
                  interfaces, I thrive on crafting efficient, scalable, and
                  user-centric applications.
                </p>
              </div>
              <div className="flex flex-row space-x-5 justify-center">
                <ContentCard customStyle="py-20" title="About" />
                <ContentCard title="About" />
                <ContentCard title="About" />
                <ContentCard title="About" />
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            id="experience"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <div className="grid grid-cols-1 gap-5 my-36">
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <ExperienceCard title="Experience 1" />
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ExperienceCard title="Experience 2" />
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <ExperienceCard title="Experience 3" />
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <ExperienceCard title="Experience 4" />
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            id="projects"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3, // Stagger animations for child elements
                },
              },
            }}
          >
            <div className="grid grid-cols-2 gap-5 ">
              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ContentCard
                  imageUrl={images.scantbilisi}
                  customStyle="p-32 "
                  title="ScanTbilisi"
                />
              </motion.div>
              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <ContentCard
                  imageUrl={images.zugdidi}
                  customStyle="p-32 "
                  title="Zugdidi"
                />
              </motion.div>

              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <ContentCard
                  imageUrl={images.ssyouth}
                  customStyle="p-32 "
                  title="SSyouth Website"
                />
              </motion.div>

              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <ContentCard
                  imageUrl={images.ssyouthapp}
                  customStyle="p-32 "
                  title="SSyouth Application"
                />
              </motion.div>

              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <ContentCard customStyle="p-32 " title="projects 5" />
              </motion.div>

              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <ContentCard customStyle="p-32" title="projects 6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Recommendations Section */}

          <motion.div
            id="recommendations"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto my-36 relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="flex flex-row space-x-5 h-screen justify-center">
              <ContentCard title="Recommendations" />
              <ContentCard title="Recommendations" />
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="contact"
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto my-36 relative z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="flex flex-row space-x-5 h-screen justify-center">
              <ContentCard title="Contact" />
              <ContentCard title="Contact" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
