import { Search, ChevronDown, Mail } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 py-6 w-full max-w-[1440px] mx-auto">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                    {/* Placeholder for Logo SVG or Image */}
                    <div className="flex items-center gap-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0L38 14V38H2V14L20 0Z" stroke="black" strokeWidth="2" fill="none" />
                            {/* Simplified house icon representation */}
                        </svg>
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold font-noto tracking-wider">班厝故事館</h1>
                            <span className="text-sm font-medium tracking-widest text-gray-500">RUMAH PAPAN</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8 font-medium text-lg">
                <button className="hover:text-primary transition-colors">
                    <Search className="w-6 h-6" />
                </button>

                <div className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    <span>關於班厝</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <div className="group relative flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    <span>走進新村</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <a href="#" className="hover:text-primary transition-colors">交通方式</a>
                <a href="#" className="hover:text-primary transition-colors">聯絡我們</a>

                <div className="flex items-center gap-2 pl-4 border-l border-gray-400 h-6">
                    <span className="font-bold cursor-pointer hover:text-primary">CH</span>
                    <span className="text-gray-400">|</span>
                    <span className="cursor-pointer text-gray-500 hover:text-primary">EN</span>
                </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-2 px-6 py-2 border-2 border-gray-1000 rounded-full hover:bg-gray-1000 hover:text-bg transition-colors font-medium">
                <Mail className="w-5 h-5" />
                <span>聯絡我們</span>
            </button>
        </nav>
    );
}
