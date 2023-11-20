import React from "react";
import Image from "next/image";

interface ReviewSectionProps {
  link: string;
  heading: string;
  text: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = (props) => {
  return (
    <div className="testimonials-col">
      <Image
        src={props.link}
        alt="Picture of the author"
        width={"60"}
        height={"60"}
      />
      <div>
        <p>{props.text}</p>
        <h3>{props.heading}</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
    </div>
  );
};

export default ReviewSection;
