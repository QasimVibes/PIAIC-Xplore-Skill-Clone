import React from "react";

interface PageBlockProps {
    heading: React.ReactNode; // Using React.ReactNode for flexibility
  text: string;
}

const PageBlock: React.FC<PageBlockProps> = ({ heading, text }) => {
  return (
    <>
    <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>{heading}</h1>
      <p>{text}</p>
        </>
  );
};

export default PageBlock;
