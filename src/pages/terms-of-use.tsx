import { NextSeo } from "next-seo";

export default function TermsOfUse() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#07080c] text-white px-4 py-16 sm:px-6 lg:px-8">
            <NextSeo
                title="Terms of Use | We Want Agent"
                description="Read the Terms of Use governing your access to and use of the We Want Agent website."
                canonical="https://wewantagent.com/terms-of-use"
            />
            <div
                className="pointer-events-none absolute -left-[10%] top-[5%] h-[520px] w-[520px] rounded-full blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(94, 168, 255, 0.28), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute -right-[8%] bottom-[10%] h-[560px] w-[560px] rounded-full blur-[90px]"
                style={{
                    background: "radial-gradient(circle, rgba(79, 209, 165, 0.18), transparent 65%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 25% 8%, rgba(94, 168, 255, 0.12), transparent 20%), radial-gradient(circle at 75% 82%, rgba(76, 102, 255, 0.1), transparent 18%)",
                }}
            />
            <div className="relative mx-auto max-w-3xl">
                <h1 className="text-4xl font-semibold mb-6">Terms of Use</h1>
                <p className="text-gray-300 leading-relaxed mb-4">
                    These Terms of Use govern your access to and use of the We Want Agent website. By using our site, you agree to comply with these terms.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Use of the Site</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    You may use our website for lawful purposes only. You agree not to misuse the site, submit harmful content, or interfere with its operation.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    You are responsible for maintaining the confidentiality of any account details and for all activity that occurs under your account. You agree not to share login credentials or use another person’s account without permission.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    All content on this website is owned by We Want Agent or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not copy or reuse our content without permission.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We Want Agent is not liable for any indirect, incidental, or consequential damages resulting from the use of the website. The site is provided &quot;as is&quot; without warranties of any kind.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to These Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    We may update these Terms of Use from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                    For questions about these Terms of Use, please contact us through our contact page.
                </p>
            </div>
        </div>
    );
}
