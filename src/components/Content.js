import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin-bottom: 2%;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 55%;
  padding: 10% 0;
`;

export default function Content(props) {
  const { explanation, img } = props;
  return (
    <div>
      <StyledP>{explanation.explanation}</StyledP>
      <StyledImg src={img.url}></StyledImg>
    </div>
    // <div>
    //   <article className="content-article">
    //     <p className="content-paragraph">{explanation.explanation}</p>
    //     <img src={img.url} className="content-img" alt="" />
    //   </article>
    // </div>
  );
}
