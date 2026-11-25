import type { ReactNode } from 'react'
import NavBar from '../components/ui/navbar/navbar';
import Footer from '../components/ui/footer/footer';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
