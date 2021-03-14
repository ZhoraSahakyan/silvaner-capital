import React from 'react';
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-9.svg';
import Icon4 from '../../images/svg-4.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './InvestmentFocusElements';

const InvestmentFunction = () => {
  return (
    <ServicesContainer id='InvestmentFunction'>
      <ServicesH1>Investment Focus</ServicesH1>
      <ServicesH2>We are targeting businesses with the following attributes.</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Industry</ServicesH2>
          <ServicesP>
          <ul class="list-group">
  <li class="list-group-item">B2B or B2C Services</li>
  <li class="list-group-item">Healthcare</li>
  <li class="list-group-item">Software</li>
  <li class="list-group-item">Consumer Products</li>
  <li class="list-group-item">Light Manufacturing</li>
</ul>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Financials</ServicesH2>
          <ServicesP>
          <ul class="list-group">
  <li class="list-group-item">$3mm-$20mm Revenue</li>
  <li class="list-group-item">Profitability (3+ years)</li>
  <li class="list-group-item">Located in Texas</li>
  <li class="list-group-item">Recurring customers</li>
  <li class="list-group-item">Low capex </li>
</ul>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SiTuation</ServicesH2>
          <ServicesP>
          <ul class="list-group">
  <li class="list-group-item">Owner is looking to retire / transition from day-to-day operations</li>
  <li class="list-group-item">Owner is focused on preserving the legacy</li>
</ul>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default InvestmentFunction;
