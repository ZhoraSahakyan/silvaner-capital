import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 0 30px;
`;

export const FooterWrap = styled.div`
  padding: 48px 0;
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: blue;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
    padding: 0 100px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const PartnerContainer = styled.div`
    display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      align-items: start;
      grid-gap: 50px;
    padding: 50px 100px;
    
     @media screen and (max-width: 820px) {
        padding: 20px 20px;
        grid-template-columns: 1fr;
    }
`;

export const PartnerSection = styled.div`
    display: grid;
    flex-direction: column;
`;

export const PartnerSectionTitle = styled.p`
    position: relative;
    font-weight: bold;
    font-size: 2.5rem;
    text-transform: uppercase;
    
    :after {
        content: '';
        position: absolute;
        top: 65px;
        left: 0;
        width: 145px;
        height: 5px;
        background-color: teal;
    }
    
    @media screen and (max-width: 1500px) {
        font-size: 1.5rem;
        
        :after {
            content: '';
            position: absolute;
            top: 45px;
            left: 0;
            width: 145px;
            height: 5px;
            background-color: teal;
        }
    }
`;

export const PartnerSectionDesc = styled.span`
    color: gray;
    margin-top: 50px;
`;

export const CopyRight = styled.span`
    color: gray;
    margin-top: 40px;
    font-size: 0.7rem;
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavTitle = styled.p`
   font-weight: bold;
   text-transform: uppercase;
   margin-bottom: 15px;
`;


export const NavList = styled.ul`
    list-style-type: none;
    
    li {
        padding-bottom: 10px;
        font-size: 14px;
        
         a {
            margin-left: 5px;
            color: gray !important;
            text-decoration: none;
         }
    }
`;


