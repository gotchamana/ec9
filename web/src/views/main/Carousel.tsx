import React from "react";
import { styled } from "@mui/system";
import { Carousel as CarouselContainer } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CatImg1 from "../../static/carousel/cat1.jpg";

const Img = styled("img")`
  width: auto;
  height: 50vh;
  object-fit: cover;
`;

export default function Carousel() {
  return (
    <CarouselContainer showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={5000}>
      <div>
        <Img src={CatImg1} alt="" />
      </div>
      <div>
        <Img src={CatImg1} alt="" />
      </div>
      <div>
        <Img src={CatImg1} alt="" />
      </div>
    </CarouselContainer>
  );
}
