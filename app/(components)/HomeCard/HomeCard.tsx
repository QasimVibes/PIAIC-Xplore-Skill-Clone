import React from "react";
import Image from "next/image";

interface HomeCardProps {
  link: string;
  heading: string;
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
  return (
    <div className="campus-col">
      <Image
        src={props.link}
        alt="Picture of the author"
        width={"332"}
        height={"221"}
      />
      <div className="layer">
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
};

export default HomeCard;
