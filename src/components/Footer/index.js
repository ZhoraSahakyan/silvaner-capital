import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaChevronRight
} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    PartnerContainer,
    PartnerSection,
    PartnerSectionTitle,
    PartnerSectionDesc,
    CopyRight,
    Navigation,
    NavTitle,
    NavList
} from './FooterElements';
import {IconContext} from 'react-icons/lib';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <PartnerContainer>
                <PartnerSection>
                    <PartnerSectionTitle>
                        Grit Mind Partners
                    </PartnerSectionTitle>

                    <PartnerSectionDesc>
                        Contact us to learn more about Grit Mind and discuss an <br/>
                        investment opportunity
                    </PartnerSectionDesc>

                    <CopyRight>
                        Copyright &copy; {new Date().getFullYear()} Grit Mind Partners. All Rights Reserved
                    </CopyRight>
                </PartnerSection>

                <IconContext.Provider value={{color: 'gray'}}>
                    <Navigation>
                        <NavTitle>
                            Navigation
                        </NavTitle>

                        <NavList>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">
                                    Team
                                </a>
                            </li>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">
                                    Competitive Edge
                                </a>
                            </li>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">Investment
                                    Focus
                                </a>
                            </li>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">
                                    Process
                                </a>
                            </li>
                        </NavList>
                    </Navigation>
                    <Navigation>
                        <NavTitle>
                            Links
                        </NavTitle>

                        <NavList>
                            <li>
                                <FaChevronRight size={10}/>
                                <a href="#">
                                    Brochure
                                </a>
                            </li>
                        </NavList>
                    </Navigation>
                </IconContext.Provider>
            </PartnerContainer>
        </FooterContainer>
    );
};

export default Footer;
