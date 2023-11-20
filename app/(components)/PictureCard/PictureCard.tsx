import React from "react";
import Image from "next/image";

interface PictureCardProps {
  link: string;
  heading: string;
  text:string;
}

const PictureCard: React.FC<PictureCardProps> = (props) => {
  return (
    <div className="facilities-col">
    <Image
      src={props.link}
      alt="Picture of the author"
      width={"321"}
      height={"214"}
    />
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
  </div>
  );
};

export default PictureCard;
