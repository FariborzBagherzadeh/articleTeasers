import React from "react";

//check props type
interface props {
  image: string;
}
export const ArticleTeaser: React.FC<props> = ({ image }) => {
  return (
    <li className="article-teaser">
      <img className="article-teaser" src={image} alt="images" />
    </li>
  );
};
