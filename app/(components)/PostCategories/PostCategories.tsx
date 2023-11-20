import React from "react";

interface PostCategoriesProps {
  heading: string;
  num: string;
}

const PostCategories: React.FC<PostCategoriesProps> = (props) => {
  return (
    <div>
      <span>{props.heading}</span>
      <span>{props.num}</span>
    </div>
  );
};
export default PostCategories;
