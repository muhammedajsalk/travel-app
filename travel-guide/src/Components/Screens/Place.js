import React,{useEffect,useState} from 'react'
import Header from './Includes/Header'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import styled from "styled-components"
import {BASE_URL} from "../../AxiosConfiq";
import { useParams } from 'react-router-dom';


function Place() {
  const {id}=useParams()
  const [place,setPlace]=useState({
    name:"",
    gallery:[],
  });

 
  useEffect(()=>{
    axios.get(`${BASE_URL}places/view/${id}`)
    .then(function (response) {
     // handle success
     setPlace(response.data.data);
      console.log(response.data.data);
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
  },[])
  return (
    <>
    <Helmet>
      <title>{place.name} | Travel Guide</title>
    </Helmet>
      <Header/>
      <MainContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <CotegoryName>{place.category_name}</CotegoryName>
          <LogationContainer>
            <LocationIcon
              src={
                require("../../assets/images/place.svg").default
              }
              alt="images"
            />
            <LocationName>{place.location}</LocationName>
          </LogationContainer>
        </InfoContainer>
        <GalleryContainer>
          <GalleryImageItem>
            <GalleryImage src={place.image} alt="image"/>
          </GalleryImageItem>

          {
            place.gallery.map((image)=>(
              <GalleryImageItem>
              <GalleryImage src={image.image} alt=""/>
            </GalleryImageItem>
            ))
          }
        </GalleryContainer>
        <SubHeading>Place Details</SubHeading>
        <Description>{place.description}</Description>
      </MainContainer>
    </>
    
  )
}

const MainContainer = styled.div`
  width: 70%;
  margin: 70px auto 0;
  height: 90vh;
`;
const Title=styled.h1`
  font-size: 48px;
  margin-bottom: 15px;

`;
const InfoContainer=styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const CotegoryName=styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  border: 1px solid #9c9c9c;
  color: #9c9c9c;
  margin-right:15px;
`;
const LogationContainer=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LocationIcon=styled.img`
  margin-right: 5px;
`;
const LocationName=styled.span`
  color: #9c9c9c;
  font-weight: bold;
  font-size: 14px;
`;
const GalleryContainer=styled.ul`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 35px;
`;
const GalleryImageItem=styled.li`
  &:first-child{
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
`;
const GalleryImage=styled.img`
  width: 100%;
  display: block;
`;
const SubHeading=styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Description=styled.p`
  font-size: 16px;
  line-height:1.6em ;
`;

export default Place