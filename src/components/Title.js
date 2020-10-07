import React from "react";

export default function Title(props) {
  const { title, date, author } = props;

  return (
    <div>
      <article>
        <h1 className="title-heading">{title.title}title</h1>
        <p className="title-author">{author.copyright}author</p>
        <p className="title-date">{date.date}date</p>
      </article>
    </div>
  );
}
