
// Common Bubble Component
const Bubble = ({ text, className }: { text: string; className?: string }) => (
    <div className={`absolute px-6 py-4 rounded-full border-2 border-gray-1000 bg-[#EAE8E4] shadow-md whitespace-nowrap z-10 ${className}`}>
        <span className="text-lg font-bold text-gray-800 tracking-wide">{text}</span>
        {/* Decorative triangle at bottom */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-1000 rotate-45 z-0"></div>
        <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EAE8E4] rotate-45 z-10"></div>
    </div>
);

export default function BubbleMap() {
    return (
        <div className="relative w-[800px] h-[500px] shrink-0">
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Example connections based on visual estimation */}
                <path d="M150 80 L 150 160" stroke="#242424" strokeWidth="2" />
                <path d="M400 80 L 400 160" stroke="#242424" strokeWidth="2" />

                {/* Cross connections */}
                <path d="M150 160 L 250 250" stroke="#242424" strokeWidth="2" />
                <path d="M400 160 L 550 250" stroke="#242424" strokeWidth="2" />

                {/* More vertical flow */}
                <path d="M250 250 L 250 350" stroke="#242424" strokeWidth="2" />
                <path d="M550 250 L 550 350" stroke="#242424" strokeWidth="2" />

                {/* Bottom connection */}
                <path d="M250 350 L 400 420" stroke="#242424" strokeWidth="2" />

            </svg>

            {/* Level 1 */}
            <Bubble text="關於班厝" className="top-10 left-[80px]" />
            <Bubble text="來一碗班厝肉骨茶" className="top-10 left-[350px]" />

            {/* Level 2 */}
            <Bubble text="想不想用走的認識新村？" className="top-[140px] left-[20px]" />
            <Bubble text="永續生活" className="top-[140px] left-[450px]" />

            {/* Level 3 */}
            <Bubble text="下個來交換故事的人會是你嗎？" className="top-[260px] left-[-40px]" />
            <Bubble text="一起過節好嗎？" className="top-[260px] left-[480px]" />

            {/* Level 4 */}
            <Bubble text="技能換宿" className="top-[380px] left-[280px]" />

        </div>
    );
}
