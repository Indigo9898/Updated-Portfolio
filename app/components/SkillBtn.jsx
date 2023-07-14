import React from "react";



const SkillBtn = (props) => {
    return(
        <div className="h-8 w-fit p-2 pr-6 pl-6 rounded-3xl bg-btn-color flex-wrap mr-4 flex items-center justify-center mb-4">
            <p className="text-xs">{props.skill}</p>
        </div>
    )
}

export default SkillBtn