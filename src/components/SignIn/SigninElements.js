import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import wave from '../../assets/images/Graphics/wave-4.svg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: .7fr 2.5fr .5fr;
  align-items: start;
  padding: 10px 24px;
  grid-gap: 10px;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: bottom;
  
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const NavLogo = styled(LinkR)`
  color: blue;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  
  img {
    width: 200px
  }
`;

export const FormWrapper = styled.div`
  padding: 20px 25px;
  background-image: url('https://www.business.com/images/content/5fa/477b57b437400308b4569/1500-0-');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const FormHeader = styled.h1`
    position: relative;
    color: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    text-transform: uppercase;
    
    span {
        color: teal;
    }
    
    :after {
        content: '';
        position: absolute;
        top: 60px;
        left: 70px;
        height: 3px;
        width: 145px;
        background-color: #fff;
     }
`;

export const Form = styled.form`
  margin: 80px auto;
  width: 70%;
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  margin: 8px 0;
  height: 30px;
  background: transparent;
  border: 1px solid #fff;
  outline: none;
  padding: 0 10px;
  color: #fff;
`;

export const FormTextarea = styled.textarea`
  margin: 8px 0;
  min-height: 150px;
  background: transparent;
  border: 1px solid #fff;
  outline: none;
  padding: 5px 10px;
  color: #fff;
  resize: vertical;
`;

export const FormButton = styled.button`
  margin: 8px 0;
  width: 120px;
  cursor: pointer;
  text-transform: uppercase;
  background: #fff;
  border: 1px solid #fff;
  outline: none;
  padding: 5px 10px;
  color: #000;
  resize: vertical;
`;

export const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 12px;
    color: #fff;
  }
`;

export const ContactInfoItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .2);
  margin-bottom: 10px;
`;
