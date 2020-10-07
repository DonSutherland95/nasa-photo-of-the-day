import React from "react";

export default function Content(props) {
  const { explanation, img } = props;
  return (
    <div>
      <article className="content-article">
        <p className="content-paragraph">{explanation.explanation}</p>
        <img src={img.url} className="content-img" alt="" />
      </article>
    </div>
  );
}
