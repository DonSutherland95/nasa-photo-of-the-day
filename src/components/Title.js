import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 350%;
  margin-bottom: 2%;
`;

const StyledP1 = styled.p`
  font-style: italic;
  margin-bottom: 2%;
`;

const StyledP2 = styled.p`
  font-style: italic;
  margin-bottom: 2%;
`;

export default function Title(props) {
  const { title, date, author } = props;
  return (
    <div>
      <StyledH1>{title.title}</StyledH1>
      <StyledP1>{` By: ${author.copyright}`}</StyledP1>
      <StyledP2>{date.date}</StyledP2>
    </div>

    // <div>
    //   <article>
    //     <h1 className="title-heading">{title.title}</h1>
    //     <p className="title-author">{` By: ${author.copyright}`}</p>
    //     <p className="title-date">{date.date}</p>
    //   </article>
    // </div>
  );
}
