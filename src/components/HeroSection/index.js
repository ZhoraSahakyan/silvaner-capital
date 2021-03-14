import React, {useState} from 'react';

import Video from '../../assets/videos/video.mp4';
import {HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg} from './HeroElements';

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Silvaner Capital</HeroH1>
                <HeroP>
                    in an Austin,TX based investment firm dedicated to the purchase and operation of one exceptional
                    business.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
