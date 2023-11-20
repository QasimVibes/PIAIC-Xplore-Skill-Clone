import React from "react";

interface TextCardProps {
  heading: string;
  text: string;
}

const TextCard: React.FC<TextCardProps> = (props) => {
  return (
    <div className="course-col">
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default TextCard;
