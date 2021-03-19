import React from 'react';
import styled from "styled-components";

const Tbox = styled.div`
  display:flex;
  max-width:100%;
  flex-direction:column;
  align-items:center;
  border-radius: 10px;
  background-color: moccasin;
  border:black solid 2px;
  font-size: 1.2em;
  padding:7%;
  margin:5%;
`;


const PhotoInfo = props => {
  const { photoData } = props;

  return (
    <Tbox>
      <p>{photoData.explanation}</p>
      <p>{photoData.copyright}</p>
      <p>{photoData.date}</p>
    </Tbox>   
  );
};

export default PhotoInfo;
