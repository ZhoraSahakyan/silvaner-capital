import React from 'react';
import {
    ContactInfo,
    ContactInfoItem,
    ContactInfoItemIcon,
    Container,
    Form,
    FormButton,
    FormContent,
    FormFieldContainer,
    FormHeader,
    FormInput,
    FormTextarea,
    FormWrapper
} from './ContactElements';
import {IconContext} from 'react-icons/lib';
import {FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope} from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <Container id="contact-us">
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

export default Contact;
