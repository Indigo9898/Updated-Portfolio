import React from "react";
import SkillBtn from "./SkillBtn";


const ExperienceInfo = (props) => {
    const skills = [];

    for (let key in props.skills) {
        skills.push(<SkillBtn key={props.skills[key]} skill={props.skills[key]}/>);
    }

    return(
        <div id="experience" className="w-full rounded-3xl p-6 card mb-4">
            <div className="flex items-center mb-4">
                <p className="mr-4 subtext whitespace-nowrap">{props.startDate}-{props.endDate}</p>
                <p className="text-lg">{props.title}</p>
            </div>
            <div>
                <p className="subtext mb-4">{props.text}</p>
            </div>
            <div className="flex flex-wrap">
                {skills}
            </div>
        </div>
    )
}

export default ExperienceInfo;