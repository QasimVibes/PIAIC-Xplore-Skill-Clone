import React from "react";

interface MainBTNProps {
  text: string;
}

const MainBTN: React.FC<MainBTNProps> = (props) => {
  return (
    <a href="#" className="hero_btn">
      {props.text}
    </a>
  );
};

export default MainBTN;
