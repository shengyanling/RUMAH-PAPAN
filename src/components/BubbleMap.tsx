// Common Bubble Component
const Bubble = ({ text, className }: { text: string; className?: string }) => (
    <div className={`absolute px-8 py-4 rounded-full border-2 border-gray-1000 bg-[#EAE8E4] whitespace-nowrap z-10 flex flex-col items-center ${className}`}>
        <span className="text-xl font-medium text-gray-1000 tracking-wide">{text}</span>
        {/* Solid Black Triangle Indicator */}
        <div className="absolute -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-gray-1000"></div>
    </div>
);

export default function BubbleMap() {
    return (
        <div className="relative w-[800px] h-[500px] shrink-0">
            {/* Level 1 */}
            <Bubble text="關於班厝" className="top-20 left-[100px]" />
            <Bubble text="來一碗班厝肉骨茶" className="top-20 left-[400px]" />

            {/* Level 2 */}
            <Bubble text="想不想用走的認識新村？" className="top-[160px] left-[50px]" />
            <Bubble text="永續生活" className="top-[160px] left-[550px]" />

            {/* Level 3 */}
            <Bubble text="下個來交換故事的人會是你嗎？" className="top-[300px] left-[-20px]" />
            <Bubble text="一起過節好嗎？" className="top-[300px] left-[550px]" />

            {/* Level 4 */}
            <Bubble text="技能換宿" className="top-[420px] left-[320px]" />

        </div>
    );
}
