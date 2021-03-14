import React from 'react';
import {
    ProcessContainer,
    ProcessTitle,
    ProcessSubTitle,
    ProcessWrapper,
    ProcessCard,
    ProcessCardIcon,
    ProcessCardTitle,
    ProcessCardSubTitle
} from './PrcessElements';
import intro from '../../assets/images/Graphics/Introduction.svg';
import preLoi from '../../assets/images/Graphics/Pre-LOI.svg';
import Loi from '../../assets/images/Graphics/LOI.svg';
import Diligence from '../../assets/images/Graphics/Diligence.svg';
import Close from '../../assets/images/Graphics/Close.svg';
import arrow from '../../assets/images/Graphics/Arrow.svg';
import arrow2 from '../../assets/images/Graphics/Arrow-2.svg';
import arrow3 from '../../assets/images/Graphics/Arrow-3.svg';
import arrow4 from '../../assets/images/Graphics/Arrow-4.svg';
import arrow5 from '../../assets/images/Graphics/Arrow-5.svg';

const ProcessSection = () => {
    return (
        <>
            <ProcessContainer id='process'>
                <ProcessTitle>Process</ProcessTitle>
                <ProcessSubTitle>
                    Selling your business can be stressful. We provide a
                    clear and transparent process from static to finish.
                    The process typically takes 3-6 months.
                </ProcessSubTitle>
                <ProcessWrapper>
                    <ProcessCard>
                        <ProcessCardIcon bgUrl={arrow}>
                            <img src={intro} alt="Introduction"/>
                        </ProcessCardIcon>
                        <ProcessCardTitle>
                            Introduction
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Initial meeting and discussion of objectives
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardIcon bgUrl={arrow2}>
                            <img src={preLoi} alt="Pre-LOI"/>
                        </ProcessCardIcon>
                        <ProcessCardTitle>
                            Pre-LOI
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Exchange of high level business and financial information
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardIcon bgUrl={arrow3}>
                            <img src={Loi} alt="LOI"/>
                        </ProcessCardIcon>
                        <ProcessCardTitle>
                            LOI
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Letter of intent outlining major deal terms like purchase price and deal structure
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardIcon bgUrl={arrow4}>
                            <img src={Diligence} alt="Diligence"/>
                        </ProcessCardIcon>
                        <ProcessCardTitle>
                            Diligence
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Confirmatory diligence to verify historical financials and key business items
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardIcon bgUrl={arrow5}>
                            <img src={Close} alt="Close"/>
                        </ProcessCardIcon>
                        <ProcessCardTitle>
                            Close
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                           Singing of the purchase agreement and close of the transaction
                        </ProcessCardSubTitle>
                    </ProcessCard>
                </ProcessWrapper>
            </ProcessContainer>
        </>
    );
};

export default ProcessSection;
