import React from "react";

interface SecondaryBTNProps {
  text: string;
}

const SecondaryBTN: React.FC<SecondaryBTNProps> = (props) => {
  return (
    <a href="#" className="hero_btn btn">
      {props.text}
    </a>
  );
};

export default SecondaryBTN;
