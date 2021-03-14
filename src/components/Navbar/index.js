import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../assets/images/Logo.png';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo onClick={toggleHome} to='/'>
                            <img src={Logo} alt="Silvaner Capital logo"/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars color='blue'/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem scrollNav={scrollNav}>
                                <NavLinks
                                    to='services'
                                    smooth="true"
                                    duration={500}
                                    spy="true"
                                    exact='true'
                                    offset={-80}
                                >

                                    Our Offer
                                </NavLinks>
                            </NavItem>
                            <NavItem scrollNav={scrollNav}>
                                <NavLinks
                                    to='about'
                                    smooth="true"
                                    duration={500}
                                    spy="true"
                                    exact='true'
                                    offset={-80}
                                >
                                    About
                                </NavLinks>
                            </NavItem>

                            <NavItem scrollNav={scrollNav}>
                                <NavLinks
                                    to='investmentFocus'
                                    smooth="true"
                                    duration={500}
                                    spy="true"
                                    exact='true'
                                    offset={-80}
                                >
                                    Investment Focus
                                </NavLinks>
                            </NavItem>
                            <NavItem scrollNav={scrollNav}>
                                <NavLinks
                                    to='process'
                                    smooth="true"
                                    duration={500}
                                    spy="true"
                                    exact='true'
                                    offset={-80}
                                >
                                    Process
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='contact-us'
                                        smooth="true"
                                        duration={500}
                                        spy="true"
                                        exact='true'
                                        offset={-80}>
                                Contact Us
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
