import React from 'react';
import PhotoInfo from "./PhotoInfo";
import styled from "styled-components";

const PostCont = styled.div`
  margin-left:2%;
  margin-right:2%;
  border-radius:10px;
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width:100%;
`;


const ImageCont = styled.div`
  display:flex;
  padding:15%;
  padding-top:1%;
  padding-bottom:1%;
  height: 100%;
  width: 100%;
`;

const Pic = styled.img`
  width: 100%;
`;

const Photo = props => {
  const { photoData } = props;

  return (
    <PostCont className='post-border'>
      <h1>{photoData.title}</h1>
      <ImageCont className='post-image-wrapper'>
        <Pic
          alt='Nasa space scene of the day'
          src={photoData.url}
        />
      </ImageCont>
      <PhotoInfo photoData={photoData} />
    </PostCont>
  );
};

export default Photo;
