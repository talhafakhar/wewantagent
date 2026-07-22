import { NextSeo } from "next-seo";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#07080c] text-white px-4 py-16 sm:px-6 lg:px-8">
            <NextSeo
                title="Privacy Policy | We Want Agent"
                description="Read the We Want Agent Privacy Policy to learn how we collect, use, and protect your personal information."
                canonical="https://wewantagent.com/privacy-policy"
            />
            <div
                className="pointer-events-none absolute -left-[8%] -top-[8%] h-[540px] w-[540px] rounded-full blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(94, 168, 255, 0.28), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute -right-[12%] top-[20%] h-[520px] w-[520px] rounded-full blur-[90px]"
                style={{
                    background: "radial-gradient(circle, rgba(79, 209, 165, 0.18), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(94, 168, 255, 0.12), transparent 25%), radial-gradient(circle at 80% 90%, rgba(76, 102, 255, 0.1), transparent 22%)",
                }}
            />
            <div className="relative mx-auto max-w-3xl">
                <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We Want Agent is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We may collect information you provide directly, such as your name, email address, company name, and messages submitted through our contact forms. We also gather technical information like browser type, device details, and IP address to help us optimize the website.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to respond to inquiries, deliver requested services, manage support requests, and improve our website experience. We may also use it for analytics, security monitoring, and to personalize communications.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information to third parties. We share data only with trusted vendors who help us provide our services, and only when necessary to fulfill your request or comply with legal requirements.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Security and Retention</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We take reasonable measures to protect your data from unauthorized access, disclosure, or destruction. We retain personal information only for as long as needed to provide our services or to satisfy legal obligations.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Your Choices</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    You can choose not to provide certain personal information, although this may limit your ability to use some features of the site. You can also request access to your data or ask us to delete it by contacting us.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us through our contact page. We will respond as quickly as possible.
                </p>
            </div>
        </div>
    );
}
