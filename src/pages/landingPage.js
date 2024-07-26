export default function LandingPage() {
    return (
    <nav className="bg-white shadow-md w-full py-2 px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
            <a href="/">
                <img src="/logo.svg" alt="Logo" className="h-8" />
            </a>
            </div>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="/" className="text-gray-500 hover:text-black">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-gray-500 hover:text-black">About</a>
                </li>
                <li>
                    <a href="/guide" className="text-gray-500 hover:text-black">Guide</a>
                </li>
            </ul>
            <div className="flex items-center">
                <a href="/SignIn" className="text-gray-500 hover:text-black">Log In</a>
                <a href="/SignUp" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</a>
        </div>
    </nav>
    )
}