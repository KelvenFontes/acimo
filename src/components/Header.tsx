import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-gray-300 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image src="/logo.png" alt="Acimo" width={80} height={10} />
                    </Link>
                </div>
                <nav className="space-x-4">
                    <Link href="/sobre" className="hover:underline">
                        Sobre
                    </Link>
                    <Link href="/#services" className="hover:underline">Serviços</Link>
                    <Link href="/contato" className="hover:underline">Contato</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
