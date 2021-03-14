import React from 'react';
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-9.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesSubTitle,
    ServicesList,
    ServicesWrapper
} from './InvestmentFocusElements';

const InvestmentFunction = () => {
    return (
        <ServicesContainer id='investmentFocus'>
            <ServicesH1>Investment Focus</ServicesH1>
            <ServicesSubTitle>We are targeting businesses with the following attributes.</ServicesSubTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Industry</ServicesH2>
                    <ServicesList>
                        <ul className="list-group">
                            <li className="list-group-item">B2B or B2C Services</li>
                            <li className="list-group-item">Healthcare</li>
                            <li className="list-group-item">Software</li>
                            <li className="list-group-item">Consumer Products</li>
                            <li className="list-group-item">Light Manufacturing</li>
                        </ul>
                    </ServicesList>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Financials</ServicesH2>
                    <ServicesList>
                        <ul className="list-group">
                            <li className="list-group-item">$3mm-$20mm Revenue</li>
                            <li className="list-group-item">Profitability (3+ years)</li>
                            <li className="list-group-item">Located in Texas</li>
                            <li className="list-group-item">Recurring customers</li>
                            <li className="list-group-item">Low capex</li>
                        </ul>
                    </ServicesList>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Situation</ServicesH2>
                    <ServicesList>
                        <ul className="list-group">
                            <li className="list-group-item">Owner is looking to retire / transition from day-to-day
                                operations
                            </li>
                            <li className="list-group-item">Owner is focused on preserving the legacy</li>
                        </ul>
                    </ServicesList>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default InvestmentFunction;
