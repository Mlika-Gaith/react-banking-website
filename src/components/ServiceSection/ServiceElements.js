import { styled } from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 480px) {
    height: 700px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  width: 650px;
  height: 450px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  grid-template-areas:
    "col1 col2"
    "col1 col2";
  align-items: center;
  justify-items: center;
  border-radius: 3px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border: 2px solid #101522;

  @media screen and (max-width: 684px) {
    max-width: 300px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "col1"
      "col2";
  }
`;

export const ServiceIcon = styled.img`
  grid-area: col1;
  height: 320px;
  width: 320px;
  object-fit: cover;
  @media screen and (max-width: 684px) {
    justify-self: start;
    max-height: 180px;
    max-width: 180px;
  }
`;

export const ServiceDescriptionWrapper = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  @media screen and (max-width: 684px) {
    justify-self: start;
    width: 250px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  text-align: justify;
  word-spacing: 1px;
  hyphens: auto;
  @media screen and (max-width: 684px) {
    font-size: 1.1rem;
  }
`;

export const ServiceP = styled.p`
  font-size: 1.1rem;
  text-align: justify;
  hyphens: auto;
  @media screen and (max-width: 684px) {
    font-size: 1rem;
  }
`;
