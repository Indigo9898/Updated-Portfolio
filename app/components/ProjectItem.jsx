import React from "react";
import Image from "next/image";
import SkillBtn from "./SkillBtn";
import Link from "next/link";

const ProjectItem = (props) => {
  const skills = [];

  for (let key in props.skills) {
    skills.push(<SkillBtn skill={props.skills[key]} />);
  }

  return (
    <div className="p-6 mb-8 card rounded-3xl">
      <Link className="absolute w-full h-full" href={props.linkhref}></Link>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-cols-2 mb-4">
        <div className="mr-4">
          <Image
            className="mr-4 rounded-xl border-slate-200/10 border-2 mb-4"
            src={props.imgSrc}
            alt="oops"
            width={1000}
            height={250}
          />
          {props.srcCode === true && (
            <a target="_blank" className="bottom-0" href={props.gitSrc}>
              View the Source Code
            </a>
          )}
        </div>
        <div>
          <p className="text-lg mb-4">{props.title}</p>
          <p className="subtext text-xs">{props.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap">{skills}</div>
    </div>
  );
};

export default ProjectItem;
