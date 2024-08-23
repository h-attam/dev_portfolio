import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import LinkedinIcon from "../../components/icons/Linkedin";
import GithubIcon from '../../components/icons/Github';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="portfolio" description="my portfolio">
      <motion.img
        src="images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-lg font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Hatice Kartal
            </h1>

            <motion.ul
              className="mt-5 text-sm font-semibold tracking-normal text-gray-800 uppercase md:text-lg md:mt-3 dark:text-white list-disc list-inside"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { staggerChildren: 0.6, duration: 1.5 }
                }
              }}
            >
              <motion.li variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                React-Frontend Developer
              </motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                Native Developer
              </motion.li>  
              <motion.li variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                Software Developer
              </motion.li>  
            </motion.ul>         
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-6 md:mt-4">
            <a href="https://github.com/h-attam" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 hover:scale-110"> 
              <GithubIcon className="w-8 h-8 current bg-white" />
            </a>
            <a href="https://www.linkedin.com/in/hatice-kartal-3b06642a8/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 hover:scale-110"> 
              <LinkedinIcon className="w-8 h-8 current bg-white" />
            </a>
          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/143851303?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 text-white">
  <Link href="https://github.com/h-attam?tab=repositories" className="transition duration-300 text-white">
    Projects
  </Link>
</div>

                </code>
              </pre>
            </div>
          </article>

        </section>
      </main>
    </Layout>
  );
}
