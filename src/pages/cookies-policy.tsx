import { NextSeo } from "next-seo";

export default function CookiesPolicy() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#07080c] text-white px-4 py-16 sm:px-6 lg:px-8">
            <NextSeo
                title="Cookies Policy | We Want Agent"
                description="Learn how We Want Agent uses cookies and similar tracking technologies to improve your browsing experience."
                canonical="https://wewantagent.com/cookies-policy"
                openGraph={{
                    type: "website",
                    url: "https://wewantagent.com/cookies-policy",
                    images: [
                        {
                            url: "https://wewantagent.com/assets/og/home.jpg",
                            width: 1200,
                            height: 630,
                        },
                    ],
                }}
                twitter={{
                    handle: "@wewantagent",
                    site: "@wewantagent",
                    cardType: "summary_large_image",
                }}
            />
            <div
                className="pointer-events-none absolute -left-[6%] top-[12%] h-[540px] w-[540px] rounded-full blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(94, 168, 255, 0.28), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute -right-[14%] top-[18%] h-[500px] w-[500px] rounded-full blur-[90px]"
                style={{
                    background: "radial-gradient(circle, rgba(79, 209, 165, 0.18), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 15%, rgba(94, 168, 255, 0.12), transparent 22%), radial-gradient(circle at 70% 85%, rgba(76, 102, 255, 0.1), transparent 20%)",
                }}
            />
            <div className="relative mx-auto max-w-3xl">
                <h1 className="text-4xl font-semibold mb-6">Cookies Policy</h1>
                <p className="text-gray-300 leading-relaxed mb-4">
                    This Cookies Policy explains how We Want Agent uses cookies and similar tracking technologies on our website.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">What Are Cookies?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Cookies are small text files stored on your device that help our site remember your preferences and improve your browsing experience.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Types of Cookies We Use</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We use session cookies to keep the site functioning during your visit and persistent cookies to remember preferences across visits. We also use analytics cookies to understand how visitors interact with our website.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We may use third-party services such as analytics providers. These providers may place cookies on your device to help us improve site performance and measure traffic.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Your Cookie Choices</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    You can control cookie settings through your browser. Disabling cookies may limit some features of the website but will not prevent you from accessing basic information.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                    If you have questions about our use of cookies, please contact us through our contact page.
                </p>
            </div>
        </div>
    );
}
