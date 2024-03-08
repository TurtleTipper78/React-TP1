import { motion } from 'framer-motion'
import './Accueil.css';
import accueil from './Accueil.json'

function Accueil() {

  const contenueAccueil = accueil.map((paragraphe, index) => {
    return <p key={index}>{paragraphe}</p>
  })

  const transition = { duration: 0.5, ease: 'easeInOut' };
  
  const variant = {
    hiddeen: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition },
    exit: { opacity: 1, y: 25, transition }
  }
  return ( 
    <motion.main
      key='accueil'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variant}
      className='accueil'
    >
      <div className='wrapper'>
        {accueil}
      </div>

    </motion.main>
      
  );
}

export default Accueil;


