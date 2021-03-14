import React from 'react';
import {
    ProcessContainer,
    ProcessTitle,
    ProcessSubTitle,
    ProcessWrapper,
    ProcessCard,
    ProcessCardTitle,
    ProcessCardSubTitle
} from './PrcessElements';

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
                        <ProcessCardTitle>
                            Introduction
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Initial meeting and discussion of objectives
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardTitle>
                            Pre-LOI
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Exchange of high level business and financial information
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardTitle>
                            LOI
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Letter of intent outlining major deal terms like purchase price and deal structure
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
                        <ProcessCardTitle>
                            Diligence
                        </ProcessCardTitle>
                        <ProcessCardSubTitle>
                            Confirmatory diligence to verify historical financials and key business items
                        </ProcessCardSubTitle>
                    </ProcessCard>
                    <ProcessCard>
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
