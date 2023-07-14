import react from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="md:sticky md:top-0">
      <div className="mb-6 p-6">
        <h1 className="font-bold text-4xl md:text-5xl mb-4">Austen Dyer</h1>
        <p className="subtext w-2/3">
          I help craft solid and scalable web products with a focus on providing
          a great user experiences.
        </p>
      </div>
      <div className="p-6 subtext mb-32">
        <NavLink title="About" src="#About" key="about" />
        <NavLink
          title="Experience and Education"
          src="#Experience"
          key="experience"
        />
        <NavLink title="Projects" src="#Projects" key="projects" />
      </div>
      <div className="flex p-6 items-center">
        <p className="mr-3">Also Check my GitHub at</p>
        <Link href={"https://github.com/Indigo9898/"}><Image width={32} height={32} alt="github" src={"/github-mark-white.png"}/></Link>
      </div>
    </div>
  );
};

export default Nav;
