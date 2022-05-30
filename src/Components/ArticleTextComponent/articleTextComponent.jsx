import React from "react";
import "./articleText.css";

function ArticleTextComponent({ articlePros }) {
  const { articleParagraphs, articleTitle } = articlePros;

  const renderParagraphs = () => {
    return articleParagraphs.map((paragraph) => {
      return <p className="body_text">{paragraph}</p>;
    });
  };

  return (
    <span>
      <h1 className="title_text">{articleTitle}</h1>
      <hr className="horizontal_line"></hr>
      {renderParagraphs()}
    </span>
  );
}

export default ArticleTextComponent;
