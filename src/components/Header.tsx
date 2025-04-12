import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-300 text-indigo-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="Acimo" width={80} height={40} />
          </Link>
        </div>

        {/* Botão Hamburguer */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu de Navegação Horizontal (somente para telas grandes) */}
        <nav className="hidden lg:flex space-x-4">
          <Link href="/#sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/#Objective" className="hover:underline">Objetivo</Link>
          <Link href="/#footer" className="hover:underline">Contato</Link>
          <Link href="/#ScheduledActivities" className="hover:underline">Atividades</Link>
          <Link href="/#GroupSchedules" className="hover:underline">Grupos e Horários</Link>
        </nav>
      </div>

      {/* Menu de Navegação no Mobile (quando aberto) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-300 py-4`}>
        <nav className="flex flex-col items-center space-y-4">
          <Link href="/#sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/#Objective" className="hover:underline">Objetivo</Link>
          <Link href="/#footer" className="hover:underline">Contato</Link>
          <Link href="/#ScheduledActivities" className="hover:underline">Atividades</Link>
          <Link href="/#GroupSchedules" className="hover:underline">Grupos e Horários</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
