import Link from "next/link";
import React from "react";

interface MainBTNProps {
  text: string;
}

const MainBTN: React.FC<MainBTNProps> = (props) => {
  return (
    <Link href="/contact" className="hero_btn">
      {props.text}
    </Link>
  );
};

export default MainBTN;
