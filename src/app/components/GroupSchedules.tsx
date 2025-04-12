import { motion } from 'framer-motion'
import { FaPeopleCarry, FaLaptop, FaBus, FaHeart, FaHiking, FaRegCalendarCheck } from 'react-icons/fa';

const GroupSchedules = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white p-12 rounded-lg shadow-lg mb-4 mt-4 w-[93%]" id='GroupSchedules'>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Grupos e Horários</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Grupo Espírito Santo */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaPeopleCarry className="text-blue-600 text-4xl hover:text-blue-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo Espírito Santo</h3>
              <p className="text-gray-700 text-sm">Avenida Horácio Lafer, 564 - Terça-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Grupo Amigos para Sempre */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaHeart className="text-purple-600 text-4xl hover:text-purple-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo Amigos para Sempre</h3>
              <p className="text-gray-700 text-sm">Rua Imaculada da Conceição, 114 - Terça-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Grupo Beija-Flor */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaHiking className="text-green-600 text-4xl hover:text-green-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo Beija-Flor</h3>
              <p className="text-gray-700 text-sm">Rua Ali Saad, 37, Jardim Vila Yolanda - Quarta-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Grupo de Informática */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaLaptop className="text-yellow-600 text-4xl hover:text-yellow-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo de Informática</h3>
              <p className="text-gray-700 text-sm">Rua Ali Saad, 37, Jardim Vila Yolanda - Sexta-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Grupo Andorinhas */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaBus className="text-orange-600 text-4xl hover:text-orange-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo Andorinhas</h3>
              <p className="text-gray-700 text-sm">Avenida Santiago Rodilha, 1024, Jardim Veloso - Quinta-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Grupo Anos Dourados */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaRegCalendarCheck className="text-teal-600 text-4xl hover:text-teal-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Grupo Anos Dourados</h3>
              <p className="text-gray-700 text-sm">Rua Imperatriz, 113, Jardim Santo Antônio - Quinta-feira das 14:00 às 16:00.</p>
            </div>
          </div>
        </motion.div>

        {/* Aulas de Pilates (em breve) */}
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaPeopleCarry className="text-red-600 text-4xl hover:text-red-700 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Aulas de Pilates (em breve)</h3>
              <p className="text-gray-700 text-sm">Terça-feira das 10:00 às 12:00.</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default GroupSchedules;
