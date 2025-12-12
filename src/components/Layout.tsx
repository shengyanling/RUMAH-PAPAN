
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-bg text-gray-1000 font-noto overflow-x-hidden">
            {children}
        </div>
    );
}
