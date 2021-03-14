import React from 'react';
import AboutUs from '../../assets/images/About-Us-1.jpg';
import AboutUs2 from '../../assets/images/About-Us-2.jpg';
import {
    AboutContainer,
    AboutTitle,
    AboutSubTitle,
    Partner,
    PartnerImages,
    PartnerInfo,
    PartnerName,
    PartnerPosition,
    PartnerBio
} from './AboutElements';

function AboutSection() {
    return (
        <AboutContainer id='about'>
            <AboutTitle>
                About
            </AboutTitle>
            <AboutSubTitle>
                Silvaner Capital combines a proven financial and operational track
                record with the work ethic of a world class athlete.
            </AboutSubTitle>

            <Partner>
                <PartnerImages>
                    <img src={AboutUs} alt="about us"/>
                    <img src={AboutUs2} alt="about us"/>
                </PartnerImages>
                <PartnerInfo>
                    <PartnerName>Johannes Hock</PartnerName>
                    <PartnerPosition>Managing Partner</PartnerPosition>

                    <PartnerBio>
                        Johannes has executed over $200mm
                        of small business transactions as
                        an investor ans broker for Peak
                        Rock Capital, J.P. Morgan and
                        Ernst & Young.
                    </PartnerBio>

                    <PartnerBio>
                        Select industries include
                        Services, Software, Logistics,
                        Healthcare, Consumer Products and
                        Industrials.
                    </PartnerBio>

                    <PartnerBio>
                       A German native, Johannes
                        originally came to Texas to join
                        the University of Texas track
                        team, where he became a national
                        champion in the decathlon and
                        earned a Master of Finance.
                    </PartnerBio>

                    <PartnerBio>
                        He currently lives in Austin, TX.
                    </PartnerBio>
                </PartnerInfo>
            </Partner>
        </AboutContainer>
    );
}

export default AboutSection;
