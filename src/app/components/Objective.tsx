import { motion } from 'framer-motion'
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaLaptop } from 'react-icons/fa';

const Objective = () => {
  return (
    <section className="bg-gray-50 p-12 rounded-lg shadow-lg mb-4 mt-4 w-[93%]" id='Objective'>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nosso Objetivo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Serviço 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaHeartbeat className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Saúde</h3>
          <p className="text-gray-700 text-center">
            Promover o envelhecimento saudável e a autonomia.
          </p>
        </motion.div>
        {/* Serviço 2 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaUsers className="text-green-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Família</h3>
          <p className="text-gray-700 text-center">
            Fortalecer os vínculos familiares e o convívio comunitário.
          </p>
        </motion.div>
        {/* Serviço 3 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaHandHoldingHeart className="text-red-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Estimulo de Atividade</h3>
          <p className="text-gray-700 text-center">
            Prevenir riscos sociais e estimular a participação ativa.
          </p>
        </motion.div>
        {/* Serviço 4 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaLaptop className="text-yellow-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Inclusão Digital</h3>
          <p className="text-gray-700 text-center">
            Fomentar a inclusão digital e o aprendizado contínuo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Objective
