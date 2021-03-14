import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 780px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: blue;
  margin-bottom: 10px;
`;

export const AboutSubTitle = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
  text-align: center;
  max-width: 900px; 
`;

export const Partner = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 15px 0;
  display: grid;
  // background: #000;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  grid-gap: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px 20px;
  }
`;

export const PartnerImages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    img {
        width: 340px;
    }
    
    img:nth-child(1) {
        margin-bottom: 15px;
    }
`;

export const PartnerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const PartnerName = styled.p`
    font-weight: bold;
`;

export const PartnerPosition = styled.span`
    color: blue
`;

export const PartnerBio = styled.span`
    max-width: 350px;   
    margin-top: 20px;
`;
