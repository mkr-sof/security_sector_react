import React from 'react';
import './featutes.css';
import {Feature, Wrapper} from "../../components";
import {useTranslation} from "react-i18next";

// const featuresData = [
//     {
//         title: 'Security Industry Insights',
//         text: 'Our commitment to keeping you informed goes beyond routine updates. Dive into insightful content crafted to provide you with valuable knowledge about the evolving landscape of security. Whether you\'re interested in the latest advancements in surveillance technology, emerging threat landscapes, or industry-wide best practices, our Security Industry Insights are your go-to resource.'
//     },
//     {
//         title: 'Home Security Bundle',
//         text:'Protect your home with our Home Security Bundle, combining smart surveillance solutions, access control features, and a personalized security plan. Enjoy a special bundled price for a comprehensive home security setup.'
//     },
//     {
//         title: 'Business Protection Package',
//         text:'For businesses, our Business Protection Package offers a complete security solution. Receive a discounted rate on advanced security measures such as intruder detection systems, cybersecurity assessments, and emergency response planning.'
//     },
//     {
//         title: 'Limited-Time Equipment Upgrade',
//         text:'Upgrade your security equipment with our limited-time offer! Get exclusive discounts on the latest surveillance cameras, access control systems, and other cutting-edge security technologies.'
//     },
// ]

const Features = () => {
    const { t, i18n } = useTranslation();
    const featuresData = t('featuresData', { returnObjects: true })
        // console.log("featuresData: ", featuresData)
    // console.log("featuresData type: ", Array.isArray(featuresData));

    return (
        <Wrapper>
        <div className="security__features section__padding" id="services">
            <div className="security__features-heading">
                <h1 className="gradient__text">{t('features.title')}</h1>
                <p>{t('features.description')}</p>
            </div>
            <div className="security__features-container">
                {featuresData.map((item, index) => (
                    <Feature
                        title={item.title}
                        text={item.text}
                        key={index}
                    />
                ))}
            </div>
        </div>
        </Wrapper>
    );
};

export default Features;
