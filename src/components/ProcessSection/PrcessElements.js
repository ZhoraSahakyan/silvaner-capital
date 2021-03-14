import styled from 'styled-components';

export const ProcessContainer = styled.div`
  min-height: 680px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const ProcessTitle = styled.h1`
  font-size: 2.5rem;
  color: blue;
  margin-bottom: 10px;
`;

export const ProcessSubTitle = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
  text-align: center;
  max-width: 700px; 
`;

export const ProcessWrapper = styled.div`
  max-width: 800px; 
  display: grid;
  padding: 15px 0;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: start;
  grid-gap: 15px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px 20px;
  }
`;

export const ProcessCard  = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const ProcessCardTitle  = styled.p`
    margin: 0 auto;
    padding: 0;
    font-weight: bold;
`;

export const ProcessCardSubTitle  = styled.span`
    display: block;
    margin: 0 auto;
    padding: 5px 0;
`;