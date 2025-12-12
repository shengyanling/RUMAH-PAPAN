import BubbleMap from './BubbleMap';
import ScrollDownBtn from './ScrollDownBtn';

export default function HeroSection() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-12 py-16 w-full max-w-[1440px] mx-auto min-h-[calc(100vh-100px)]">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-8 max-w-[600px] z-10">
                <h1 className="text-[64px] font-bold leading-tight text-gray-1000 tracking-wider">
                    一間為新村<br />存放記憶的厝
                </h1>
                <p className="text-xl text-gray-800 leading-relaxed font-medium tracking-wide">
                    班厝是一間收集故事的厝，牆上是老照片，桌上是新朋友，讓一條新村的記憶持續被看見。
                </p>

                <div className="mt-12">
                    <ScrollDownBtn />
                </div>
            </div>

            {/* Right Content - Bubble Map */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <div className="scale-75 lg:scale-100 origin-top-right">
                    <BubbleMap />
                </div>
            </div>
        </section>
    );
}
