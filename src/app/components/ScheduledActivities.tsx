import { motion } from 'framer-motion'
import { FaPaintBrush, FaTheaterMasks, FaComments, FaBirthdayCake, FaBus, FaUserGraduate, FaLaptop, FaDumbbell } from 'react-icons/fa';

const ScheduledActivities = () => {
  return (
    <section className="bg-gray-50 p-12 rounded-lg shadow-lg mb-4 mt-4 w-[93%]" id='ScheduledActivities'>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Atividades e Programas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Oficina de Artesanato */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaPaintBrush className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Oficinas de Artesanato</h3>
          <p className="text-gray-700 text-center text-sm">
            Estimular a criatividade e o trabalho manual com diversos materiais.
          </p>
        </motion.div>

        {/* Aulas de Teatro */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaTheaterMasks className="text-purple-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Aulas de Teatro</h3>
          <p className="text-gray-700 text-center text-sm">
            Desenvolver habilidades de expressão e comunicação através do teatro.
          </p>
        </motion.div>

        {/* Rodas de Conversa */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaComments className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Rodas de Conversa</h3>
          <p className="text-gray-700 text-center text-sm">
            Promover o diálogo e a troca de experiências de forma acolhedora.
          </p>
        </motion.div>

        {/* Festas Comemorativas */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaBirthdayCake className="text-pink-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Festas Comemorativas</h3>
          <p className="text-gray-700 text-center text-sm">
            Organizar celebrações e eventos festivos para fortalecer laços sociais.
          </p>
        </motion.div>

        {/* Passeios e Viagens Culturais */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaBus className="text-orange-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Passeios Culturais</h3>
          <p className="text-gray-700 text-center text-sm">
            Organizar passeios e viagens para promover a cultura e o lazer.
          </p>
        </motion.div>

        {/* Palestras Profissionais */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaUserGraduate className="text-teal-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Palestras Profissionais</h3>
          <p className="text-gray-700 text-center text-sm">
            Convidar especialistas para palestras e sessões de aprendizado.
          </p>
        </motion.div>

        {/* Aulas de Informática */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaLaptop className="text-yellow-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Aulas de Informática</h3>
          <p className="text-gray-700 text-center text-sm">
            Ensinar habilidades básicas de informática e inclusão digital.
          </p>
        </motion.div>

        {/* Exercícios de Pilates */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaDumbbell className="text-red-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exercícios de Pilates</h3>
          <p className="text-gray-700 text-center text-sm">
            Realizar atividades físicas e pilates para o bem-estar.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}

export default ScheduledActivities;
