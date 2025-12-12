import { Info } from 'lucide-react';

export default function FloatingInfoBtn() {
    return (
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50">
            <Info className="w-8 h-8 text-black" />
        </button>
    );
}
