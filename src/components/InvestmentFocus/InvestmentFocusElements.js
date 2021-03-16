import styled from 'styled-components';
import wave from '../../assets/images/Graphics/wave-1.svg';

export const ServicesContainer = styled.div`
  min-height: 890px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: blue;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
  max-width: 768px;
  
`;

export const ServicesSubTitle = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
  max-width: 690px;
  
`;

export const ServicesList = styled.div`
  font-size: 1rem;
  text-align: left;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;