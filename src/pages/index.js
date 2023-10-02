import Image from "next/image";
import { Inter, Source_Code_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Source = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${Source.className} text-[#00FF00]`}
    >
      <div className="p-4 z-10 max-w-5xl w-full items-center font-mono text-sm ">
        <h1 className="text-3xl">Full Stack Developer</h1>
        <p className="mt-3">
          Hi there, I am Ohioze Alex Omiunu, or just Alex. As a passionate and
          versatile Full-Stack Developer, I specialize in crafting innovative
          digital solutions that bring your ideas to life. With a strong
          foundation in both front-end and back-end technologies, I have the
          skills and expertise to create seamless, user-friendly web
          applications. I'm committed to delivering not just code, but solutions
          that solve real-world problems. Let's embark on a journey to turn your
          concepts into captivating digital experiences.
        </p>

        <div className="mt-3 w-[300px] flex justify-between gap-3">
          <a
            href="https://github.com/alxzndr2019"
            className="underline cursor-pointer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ohioze-omiunu-2b2968169/"
            className="underline cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/its_alxjnr"
            className="underline cursor-pointer"
          >
            X
          </a>
        </div>
      </div>
      <div className="lg:max-w-5xl w-full mt-7">
        <h1 className="p-4 text-3xl">Technologies and Tools</h1>
        <div className="p-4 mb-32 grid w-full text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Front-End </h2>
            <li>React</li>
            <li>Nextjs</li>
            <li>HTML/CSS</li>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Back-End </h2>
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>Microservices</li>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Data </h2>
            <li>MongoDB</li>
            <li>Prosgres</li>
            <li>GraphQL</li>
            <li>MySQL</li>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Deployments </h2>
            <li>AWS</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Render</li>
            <li>Heroku</li>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Languages </h2>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Python</li>
          </a>
        </div>
      </div>
    </main>
  );
}
