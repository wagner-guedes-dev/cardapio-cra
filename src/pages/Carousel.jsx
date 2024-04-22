import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './carousel.css';


const Carousel = ({maisVendidosId} ) => {
  const [isSticky, setIsSticky] = useState(false);
  const x = useMotionValue(0);
  const xRange = [-500, 0];
  const opacityRange = [0.5, 1];
  const opacity = useTransform(x, xRange, opacityRange);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Altere este valor conforme necessário para determinar quando a lista deve se tornar fixa
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`carousel-container ${isSticky ? 'sticky' : ''}`}>
      <motion.ul
        className="carousel-wrapper ul"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1700, right: 0 }}
        whileTap={{ cursor: '' }}
      >
        <motion.li className='li'>
          
          <Link to="mais-vendidos"  smooth={true} duration={500}>Mais vendidos</Link>
        </motion.li>
        <motion.li>
          <Link to="jogos" smooth={true} duration={500}>Jogos</Link>
        </motion.li>
        <motion.li>
          <Link to="hamburgueres" smooth={true} duration={500}>Hamburgueres</Link>
        </motion.li>
        <motion.li>
          <Link to="combos" smooth={true} duration={500}>Combos</Link>
        </motion.li>
        <motion.li>
          <Link to="porcoes" smooth={true} duration={500}>Porções</Link>
        </motion.li>
        <motion.li>
          <Link to="acai-taca" smooth={true} duration={500}>Açai na taça</Link>
        </motion.li>
        <motion.li>
          <Link to="acai-copo" smooth={true} duration={500}>Açai no copo</Link>
        </motion.li>
        <motion.li>
          <Link to="monte-acai" smooth={true} duration={500}>Monte seu açai</Link>
        </motion.li>
        <motion.li>
          <Link to="drinks" smooth={true} duration={500}>Drinks</Link>
        </motion.li>
        <motion.li>
          <Link to="cafe-gelado" smooth={true} duration={500}>Café gelado</Link>
        </motion.li>
        <motion.li>
          <Link to="chocolate-quente" smooth={true} duration={500}>Chocolate quente</Link>
        </motion.li>
        <motion.li>
          <Link to="bebidas" smooth={true} duration={500}>Bebidas</Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Carousel;
