import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServiceCard,
  ServicesH1,
  ServiceIcon,
  ServiceDescriptionWrapper,
  ServiceH2,
  ServiceP,
} from "./ServiceElements";
import { serviceCardData } from "./data";
import ScrollCarousel from "scroll-carousel-react";
const Services = () => {
  return (
    <ServicesContainer id={"services"}>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ScrollCarousel
          autoplay
          autoplaySpeed={0.2}
          speed={10}
          onReady={() => console.log("I am ready")}
        >
          {serviceCardData.map((item, index) => {
            return (
              <ServiceCard key={index.toString()}>
                <ServiceIcon src={item.image} />
                <ServiceDescriptionWrapper>
                  <ServiceH2>{item.title}</ServiceH2>
                  <ServiceP>{item.description}</ServiceP>
                </ServiceDescriptionWrapper>
              </ServiceCard>
            );
          })}
        </ScrollCarousel>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
