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
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/sign-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Video</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                                target='_blank'
                                aria-label='Youtube'
                                rel='noopener noreferrer'
                            >
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink
                                target='_blank'
                                aria-label='Twitter'
                                href='//www.twitter.com/briandesignz'
                            >
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

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
