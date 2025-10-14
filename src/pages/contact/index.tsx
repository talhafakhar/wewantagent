import React from "react";
import ContactForm from "@/components/Contact/ContactUsSection";
import {NextSeo, OrganizationJsonLd, WebPageJsonLd} from "next-seo";

export default function AboutUsPage() {
    return (
        <>
            <NextSeo
                title="Contact Us | We Want Agent — Let's Build Your Custom AI Solution"
                description="Get in touch with We Want Agent to discuss your custom AI automation needs. Our expert team helps businesses in real estate, healthcare, and accounting harness the power of AI that actually works."
                canonical="https://wewantagent.com/contact"
                facebook={{
                    appId: '1234567890',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content:
                            'contact We Want Agent, AI automation contact, get in touch AI agency, contact AI experts, AI for real estate, AI for healthcare, AI for accounting, AI consultation, custom AI automation',
                    },
                    { property: 'dc:creator', content: 'We Want Agent' },
                    { name: 'author', content: 'We Want Agent' },
                    { name: 'robots', content: 'index, follow' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://wewantagent.com/contact',
                    title: 'Contact Us | We Want Agent — Let’s Build Your Custom AI Solution',
                    description:
                        'Get in touch with We Want Agent to discuss your AI automation project. Our team builds intelligent, industry-specific automation for real estate, healthcare, and accounting.',
                    images: [
                        {
                            url: 'https://wewantagent.com/images/contact-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Contact We Want Agent',
                        },
                    ],
                    site_name: 'We Want Agent',
                }}
                twitter={{
                    handle: '@wewantagent',
                    site: '@wewantagent',
                    cardType: 'summary_large_image',
                }}
            />

            <OrganizationJsonLd
                type="Organization"
                id="https://wewantagent.com/contact#organization"
                name="We Want Agent"
                url="https://wewantagent.com/"
                logo="https://wewantagent.com/assets/logo.png"
                sameAs={[
                    'https://www.facebook.com/wewantagent',
                    'https://twitter.com/wewantagent',
                    'https://www.linkedin.com/company/wewantagent/',
                ]}
                contactPoints={[
                    {
                        telephone: '+1-234-567-890',
                        contactType: 'Customer Service',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
                address={{
                    streetAddress: '456 Strategy Avenue',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    postalCode: '10001',
                    addressCountry: 'US',
                }}
            />

            <WebPageJsonLd
                id="https://wewantagent.com/contact#webpage"
                url="https://wewantagent.com/contact"
                name="Contact Us | We Want Agent — Let’s Build Your Custom AI Solution"
                description="Reach out to We Want Agent to start your custom AI automation project. We specialize in AI solutions for real estate, healthcare, and accounting businesses."
                potentialAction={{
                    target: 'https://wewantagent.com/contact?q={search_term_string}',
                    queryInput: 'required name=search_term_string',
                }}
            />

            <ContactForm/>
        </>
    );
}

