'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WelcomeSection from "./components/WelcomeSection";
import { motion } from "framer-motion";
import Gallery from "./components/Gallery";
import { FaGoogle, FaWaze } from "react-icons/fa";
import Objective from "./components/Objective";
import ScheduledActivities from "./components/ScheduledActivities";
import GroupSchedules from "./components/GroupSchedules";
import HowToHelp from "./components/HowToHelp";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      <WelcomeSection />

      <main>
        {/* Seção de Boas-Vindas */}
        <section className="py-12" id="sobre">
          <div className="container mx-auto px-4">
            {/* Adicione sua imagem da oficina e o texto aqui */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.img
                  src="/workshop.jpg"
                  alt="Acimo"
                  className="rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-5xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Acimo
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl text-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  A ACIMO é uma entidade sem fins lucrativos, fundada em 1987, dedicada a atender idosos acima de 60 anos, sem distinção de raça, cor, condição financeira, orientação política ou religião. Nosso compromisso é promover a inclusão social, fortalecer vínculos familiares e comunitários, e valorizar cada idoso como parte essencial da sociedade.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <div className='flex items-center justify-center'>
          <ScheduledActivities />
        </div>

        <div className='flex items-center justify-center'>
          <GroupSchedules />
        </div>


        <div className='flex items-center justify-center'>
          <Objective />
        </div>

        <Gallery />


        {/* Seção: Formulário de Contato */}
        {/* <SendEmail /> */}


        <div className='flex items-center justify-center'>
          <HowToHelp />
        </div>

        {/* Seção: Mapa de Localização */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nosso Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informações do Local */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
                  {/* <HiOutlineLocationMarker className="text-gray-900 mr-2" /> */}
                  Visite-nos
                </h3>
                <p className="text-gray-700 mb-4">
                  R. Ali Saad, 37
                  <br />
                  Vila Yolanda, Osasco - SP, 06124-100, Brazil
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.google.com/maps/place/R.+Ali+Saad,+37+-+Jardim+Capelaro,+Osasco+-+SP,+06124-100/@-23.5483633,-46.7982602,17z/data=!4m6!3m5!1s0x94ceff97cc64ee8b:0xb6fc736ed1941197!8m2!3d-23.548353!4d-46.7984442!16s%2Fg%2F11cpc9gzdh?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
                  >
                    <FaGoogle className="mr-2" /> Ver no Google Maps
                  </a>
                  <a
                    href="https://ul.waze.com/ul?place=ChIJi-5kzJf_zpQRlxGU0W5z_LY&ll=-23.54835300%2C-46.79844420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaWaze size={20} className="mr-2" /> Ver no Waze
                  </a>
                </div>
              </div>
              {/* Mapa do Local */}
              <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5592987766663!2d-46.80101912539043!3d-23.548348061112872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff97cc64ee8b%3A0xb6fc736ed1941197!2sR.%20Ali%20Saad%2C%2037%20-%20Jardim%20Capelaro%2C%20Osasco%20-%20SP%2C%2006124-100!5e0!3m2!1spt-BR!2sbr!4v1744164864550!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105"
                    title="Mapa de Localização"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
