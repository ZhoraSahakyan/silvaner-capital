import React from 'react';
import {
    Container,
    NavLogo,
    FormWrapper,
    FormContent,
    FormHeader,
    Form,
    FormFieldContainer,
    FormInput,
    FormTextarea,
    FormButton,
    ContactInfo,
    ContactInfoItem,
    ContactInfoItemIcon
} from './SigninElements';
import {IconContext} from 'react-icons/lib';
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaMapMarkerAlt,
    FaLinkedin
} from 'react-icons/fa';

import Logo from '../../assets/images/Logo.png';

const SignIn = () => {
    return (
        <>
            <Container>
                <NavLogo to='/'>
                    <img src={Logo} alt="Silvaner Capital logo"/>
                </NavLogo>

                <FormWrapper>
                    <FormContent>
                        <FormHeader>
                            Contact <span>US</span>
                        </FormHeader>

                        <Form>
                            <FormFieldContainer>
                                <label htmlFor="name">Your Name (required)</label>
                                <FormInput type="text" id="name">

                                </FormInput>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="email">Your Email (required)</label>
                                <FormInput type="email" id="email">

                                </FormInput>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="subject">Subject</label>
                                <FormInput type="text" id="subject">

                                </FormInput>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <label htmlFor="message">Message</label>
                                <FormTextarea type="text" id="message">

                                </FormTextarea>
                            </FormFieldContainer>

                            <FormFieldContainer>
                                <FormButton>
                                    Send
                                </FormButton>
                            </FormFieldContainer>
                        </Form>

                        <ContactInfo>
                            <IconContext.Provider value={{color: '#fff'}}>
                                <ContactInfoItem>
                                    <ContactInfoItemIcon>
                                        <FaPhoneAlt size={25}/>
                                    </ContactInfoItemIcon>
                                    <span>
                                        +972-79-3700600
                                    </span>
                                </ContactInfoItem>
                                <ContactInfoItem>
                                    <ContactInfoItemIcon>
                                        <FaRegEnvelope size={25}/>
                                    </ContactInfoItemIcon>
                                    <span>
                                        office@grit-mind.com
                                    </span>
                                </ContactInfoItem>
                                <ContactInfoItem>
                                    <ContactInfoItemIcon>
                                        <FaMapMarkerAlt size={25}/>
                                    </ContactInfoItemIcon>
                                    <span>
                                        30 HaArba'a  ST, Tel-Aviv
                                    </span>
                                </ContactInfoItem>
                                <ContactInfoItem>
                                    <ContactInfoItemIcon>
                                        <FaLinkedin size={25}/>
                                    </ContactInfoItemIcon>
                                    <span>
                                        Grit Mind Partners
                                    </span>
                                </ContactInfoItem>
                            </IconContext.Provider>
                        </ContactInfo>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    );
};

export default SignIn;
