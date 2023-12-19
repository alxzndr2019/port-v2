import Image from "next/image";
import { Inter, Source_Code_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Source = Source_Code_Pro({ subsets: ["latin"] });
const projects = [
  {
    title: "Key stash",
    description:
      "Key stash is a secure, user-friendly application for managing your various keys and passwords. It uses state-of-the-art encryption to ensure your data is always safe.",
    link: "link-to-project-1",
  },
  {
    title: "Lets go",
    description:
      "Lets go is a social event planning application that helps you organize and discover events. It not only provides information about various events, but also allows you to create and share your own events. With its social features, you can connect with other attendees, share your experiences, and make your events more engaging and memorable.",
    link: "link-to-project-2",
  },
  {
    title: "Bionic Parser",
    description:
      "Bionic Parser is a powerful tool for parsing complex data structures. It uses advanced algorithms to accurately parse and extract information from various data formats.",
    link: "link-to-project-3",
  },
  {
    title: "Doormort",
    description:
      "Doormort is a comprehensive real estate application that simplifies the process of buying, selling, and renting properties. It provides a platform for property listings, virtual tours, price comparisons, and direct communication with real estate agents. With its intuitive interface and powerful features, Doormort makes real estate transactions easy and accessible for everyone.",
    link: "link-to-project-4",
  },
];
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 ${Source.className} text-[#00FF00]`}
    >
      <div className="p-4 z-10 max-w-5xl w-full items-center font-mono text-sm ">
        <h1 className="text-3xl">Innovative Software Engineer</h1>
        <p className="mt-3">
          Hello! I'm Ohioze Alex Omiunu, but you can call me Alex. I'm a
          Software Engineer with a passion for turning ideas into reality. I
          don't just write code; I create solutions that make a difference. With
          a robust skill set in both front-end and back-end technologies, I
          craft seamless, user-friendly web applications that users love and
          clients admire. My commitment goes beyond delivering code; I provide
          solutions that solve real-world problems. Let's transform your
          concepts into impressive digital experiences together.
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
      <div className="lg:max-w-5xl w-full mt-7">
        <h1 className="p-4 text-3xl">Projects</h1>
        <div className="p-4 mb-32 grid w-full text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="underline cursor-pointer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:max-w-5xl w-full mt-7">
        <h1 className="p-4 text-3xl">Contact Me</h1>
        <div className="p-4 mb-32 grid w-full text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <p>
              If you have any questions or would like to discuss a project, feel
              free to reach out to me at{" "}
              <a
                href="mailto:your-email@example.com"
                className="underline cursor-pointer"
              >
                ohiozeomiunu@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
