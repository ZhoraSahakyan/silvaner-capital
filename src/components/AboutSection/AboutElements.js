import styled from 'styled-components';
import wave from '../../assets/images/Graphics/wave.svg';

export const AboutContainer = styled.div`
  min-height: 920px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: bottom;
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
  margin: 0 auto;
  padding: 15px 15px;
  display: flex;
  background: #fff;
  border-radius: 30px;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 15px 20px;
  }
`;

export const PartnerImages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 50px;
    
    img {
        width: 350px;
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
