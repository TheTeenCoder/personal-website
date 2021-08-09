import React from "react";

const Card = (props) => {
  return (
    <a href={props.link} className={`${props.link && 'cursor-pointer'}`}>
      <div className="hover:bg-blue-700 p-4 text-white bg-blue-500 shadow-xl flex flex-col rounded-xl">
        <h1 className="md:text-2xl text-xl">{props.title}</h1>
        <div className="md:text-lg text-xs mt-5">{props.children}</div>
      </div>
    </a>
  );
};

export default Card;
