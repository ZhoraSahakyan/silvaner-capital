import React from 'react';
import Icon1 from '../../assets/images/icons/svg-1.svg';
import Icon2 from '../../assets/images/icons/svg-2.svg';
import Icon3 from '../../assets/images/icons/svg-3.svg';
import Icon4 from '../../assets/images/icons/svg-4.svg';
import Icon5 from '../../assets/images/icons/svg-5.svg';
import Icon6 from '../../assets/images/icons/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesSubTitle,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Offer</ServicesH1>
            <ServicesSubTitle>We understand the effort and hardship that went into building your business and offer a unique
                opportunity to monetize your business while preserving your legacy.</ServicesSubTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Confidentiality</ServicesH2>
                    <ServicesP>
                        We ensure maximimum confindentiality and minimum disruption to the business.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Flexibility</ServicesH2>
                    <ServicesP>
                        We provide flexible terms focused on your priorities (estate planning, tax concerns, etc).
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Long Term Focus</ServicesH2>
                    <ServicesP>
                        Our goal is to continue your legacy and with a focus on long term growth and success.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Hands-On Approach</ServicesH2>
                    <ServicesP>
                        We will focus 100% of our time, energy and resources to help the business succeed.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Exit Opportunity</ServicesH2>
                    <ServicesP>
                        We provide owners an opportunity to monetize their business while ensuring continuity.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Experienced advsiors</ServicesH2>
                    <ServicesP>
                        Our advisors have decades of operational and financial experience in our target industries.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
