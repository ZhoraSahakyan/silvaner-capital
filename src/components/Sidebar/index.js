import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='services'
                        onClick={toggle}
                        smooth="true"
                        duration={500}
                        spy="true"
                        exact='true'
                        offset={-80}
                    >
                        Our Offer
                    </SidebarLink><SidebarLink
                    to='about'
                    onClick={toggle}
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact='true'
                    offset={-80}
                >
                    About
                </SidebarLink>
                    <SidebarLink
                        to='investmentFocus'
                        onClick={toggle}
                        smooth="true"
                        duration={500}
                        spy="true"
                        exact='true'
                        offset={-80}
                    >
                        Investment Focus
                    </SidebarLink>

                    <SidebarLink
                        to='process'
                        onClick={toggle}
                        smooth="true"
                        duration={500}
                        spy="true"
                        exact='true'
                        offset={-80}
                    >
                        Process
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="mailto:Johannes.hock@utexas.edu">
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
