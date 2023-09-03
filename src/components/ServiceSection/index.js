import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServiceCard,
  ServicesH1,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServiceElements";
import { serviceCardData } from "./data";

const Services = () => {
  return (
    <ServicesContainer id={"services"}>
      <ServicesH1>Our Services</ServicesH1>

      <ServicesWrapper>
        {serviceCardData.map((item, index) => {
          return (
            <ServiceCard key={index.toString()}>
              <ServiceIcon src={item.image} />
              <ServiceH2>{item.title}</ServiceH2>
              <ServiceP>{item.description}</ServiceP>
            </ServiceCard>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
