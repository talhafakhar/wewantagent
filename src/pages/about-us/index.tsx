import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <Link href="/automationexpert">
                <button className="bg-white text-black rounded px-6 py-3 hover:bg-gray-200 transition">
                    Go to Automation Expert
                </button>
            </Link>
        </div>
    );
}
