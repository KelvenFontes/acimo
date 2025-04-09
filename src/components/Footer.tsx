import { FaInstagram, FaFacebook, FaPhoneAlt, FaLocationArrow, FaEnvelope } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
// import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
// import { FaMoneyBill1Wave } from "react-icons/fa6";

// import { FaPix } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-indigo-800 text-white">
            <div className="container mx-auto px-4 py-8">
                {/* Grid layout para organizar as seções */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Redes Sociais */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">Siga-nos</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://www.instagram.com/acimo.idosos/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                            </a>
                            {/* <a href="https://api.whatsapp.com/send?phone=5511945420139&text=Ola%2C+Somos+a+Bm+Monobloco.%0AAssim+que+poss%C3%ADvel+retornaremos+a+sua+mensagem" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                            </a> */}
                            <a href="https://www.facebook.com/acimo.osasco.1/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                            </a>
                        </div>
                        {/* sobre ACIMO */}
                        {/* <div className="flex flex-col space-y-2">
                            <a href="/sobre" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nós</a>
                            <a href="/politica-de-privacidade" className="text-gray-300 hover:text-white transition-colors duration-300">Política de Privacidade</a>
                            <a href="/termos-de-servico" className="text-gray-300 hover:text-white transition-colors duration-300">Termos de Serviço</a>
                        </div> */}
                    </div>
                    {/* Horário de Funcionamento */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2"><IoMdTime className="inline mr-2" />Horário de Funcionamento</h3>
                        <p className='text-gray-300'>Terça a Sexta: 08:00 - 18:00</p>
                        {/* <p className='text-gray-300'>Sábado: 08:00 - 12:00</p> */}
                    </div>
                    {/* Endereço e Mapa */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2"><FaLocationArrow className="inline mr-2" />Nosso Endereço</h3>
                        <p className='text-gray-300'>
                            <a
                                href="https://maps.app.goo.gl/zmpKhL86S3q3QpsT8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Rua Ali Saad. N°37, Vila Yolanda, Osasco, SP
                            </a>
                        </p>
                    </div>
                    {/* Telefone e Email */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-2"><FaPhoneAlt className="inline mr-2" />Telefone</h3>
                        <p className='text-gray-300'>
                            <a
                                href="tel:+551136097643"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                (11) 3609-7643
                            </a>
                        </p>
                        {/* <p className='text-gray-300'>
                            <a href="https://api.whatsapp.com/send?phone=5511945420139&text=Ola%2C+Somos+a+Bm+Monobloco.%0AAssim+que+poss%C3%ADvel+retornaremos+a+sua+mensagem" target="_blank" rel="noopener noreferrer">
                                <div className='flex gap-2 pt-1'>
                                    (11) 3609 7643
                                    <FaWhatsapp size="1.5em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300 pb-1" />
                                </div>
                            </a>
                        </p> */}
                        <h3 className="text-xl font-semibold mt-4 mb-2"><FaEnvelope className="inline mr-2" />Email</h3>
                        <p className='text-gray-300'>
                            <a
                                href="mailto:contato@bmmonobloco.com.br"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                contato@acimo.com.br
                            </a>
                        </p>
                    </div>
                </div>
                {/* Formulário de Assinatura de Newsletter */}
                {/* <div className="bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Assine Nossa Newsletter</h3>
          <form className="flex flex-col md:flex-row">
            <input type="email" placeholder="Seu email" className="p-2 mb-2 md:mb-0 md:mr-2 rounded-lg text-gray-900" />
            <button type="submit" className="bg-gray-600 p-2 rounded-lg hover:bg-gray-500 transition-colors duration-300">Inscreva-se</button>
          </form>
        </div> */}
                {/* Métodos de Pagamento */}
                {/* <div className="flex space-x-4 mb-8">
                    <FaCcVisa size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                    <FaCcMastercard size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                    <FaPix size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                    <FaMoneyBill1Wave size="2em" className="text-gray-300 hover:text-gray-300 transition-colors duration-300" />
                </div> */}
            </div>
            {/* Seção de Copyright */}
            <div className="bg-gray-900 py-4 text-gray-500 text-sm text-center">
                &copy; {currentYear} ACIMO. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer
