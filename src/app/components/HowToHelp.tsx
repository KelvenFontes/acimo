import { motion } from 'framer-motion'

const HowToHelp = () => {
  return (
    <section className="bg-white p-12 rounded-2xl shadow-lg mb-4 mt-4 w-[93%]" id='HowToHelp'>
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Como Ajudar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Doação */}
        <motion.div
          className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-purple-700 p-8 rounded-lg shadow-md w-full transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contribua com uma Doação</h3>
          <p className="text-white mb-6 text-sm">
            Contribua para transformar vidas! Sua doação ajuda a manter nossas atividades e programas de apoio aos idosos.
          </p>
          {/* <a href="/doacao" className="text-indigo-700 bg-white py-2 px-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300">Faça uma Doação</a> */}
        </motion.div>

        {/* Voluntariado */}
        <motion.div
          className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 rounded-lg shadow-md w-full transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Participe como Voluntário</h3>
          <p className="text-white mb-6 text-sm">
            Seja um voluntário e faça a diferença! Seu tempo e dedicação são essenciais para fortalecer nossos programas.
          </p>
          {/* <a href="/voluntariado" className="text-blue-600 bg-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">Seja um Voluntário</a> */}
        </motion.div>

      </div>
    </section>
  );
}

export default HowToHelp;
