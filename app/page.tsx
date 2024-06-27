import Hello from "./components/Hello";
import Sidebar from "./components/Sidebar";
import Abiliities from "./components/Abilities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default async function Home() {
  return (
    <div className="container w-full ">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-none w-96">
          <Sidebar />
        </div>
        <div className="flex-auto">
          <Hello />
          <Abiliities />
          <Projects />
          <Contact />
        </div>
      </div>

    </div>
  )
}
