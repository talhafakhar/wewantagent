import React from "react";
import ContactForm from "@/components/Contact/ContactUsSection";
import {NextSeo, WebPageJsonLd} from "next-seo";

export default function AboutUsPage() {
    return (
        <>
            <NextSeo
                title="Contact Us | We Want Agent"
                description="Get in touch with We Want Agent to discuss AI automation."
                canonical="https://wewantagent.com/contact"
                additionalMetaTags={[
                    { name: 'robots', content: 'index, follow' }
                ]}
                openGraph={{
                    url: "https://wewantagent.com/contact",
                    images: [
                        {
                            url: "https://wewantagent.com/images/contact-og.jpg",
                            width: 1200,
                            height: 630
                        }
                    ]
                }}
            />

            <WebPageJsonLd
                id="https://wewantagent.com/contact#webpage"
                url="https://wewantagent.com/contact"
                name="Contact | We Want Agent"
            />


            <ContactForm/>
        </>
    );
}

