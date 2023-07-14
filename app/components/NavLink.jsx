import React, { useState } from "react";
import { useEffect, myRef } from "react";
import Link from "next/link";

const NavLink = (props) => {

  const [widthStyle, setWidthStyle] = useState({width: "5%"})

  const config = {
    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    rootMargin: '0px',
    threshold: 0.5
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting === true){
        setWidthStyle({width: "15%"})
      }else{
        setWidthStyle({width: "5%"})
      }
    }, config);

    observer.observe(document.querySelector(props.src));
  }, []);


  return (
    <a href={props.src}>
      <div className={"flex items-center mb-4 link"}>
        <hr style={widthStyle} className="mr-3" />
        <p>{props.title}</p>
      </div>
    </a>
  );
};

export default NavLink;
