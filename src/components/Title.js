import React, { useState } from "react";

export default function Title(props) {
  const { titles, date, author } = props;

  return (
    <div>
      <article>
        <h1>h1</h1>
        <p>{author.copyright}</p>
        <p>{date.date}</p>
      </article>
    </div>
  );
}
