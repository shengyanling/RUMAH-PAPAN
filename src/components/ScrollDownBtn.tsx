import { ArrowDown } from 'lucide-react';

export default function ScrollDownBtn() {
    return (
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-1000 flex items-center justify-center transition-transform group-hover:translate-y-1">
                <ArrowDown className="w-6 h-6 text-gray-1000" />
            </div>
            <span className="text-sm font-medium tracking-wide">往下看更多</span>
        </div>
    );
}
