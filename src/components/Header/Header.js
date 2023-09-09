import Line from "../../ressources/icons/Line";
import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
      
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const isScrollingUp = currentScrollPos < prevScrollPos;
      
          setIsHeaderVisible(isScrollingUp || currentScrollPos < 100); // Modifier la valeur 100 selon vos besoins
          prevScrollPos = currentScrollPos;
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className={isHeaderVisible ? '' : 'hidden'}>
            <div className="header-wrapper page-width">
                <div className="svg-container header-svg dark-mode"><Line /></div>
                <a href="#hero"><h2 className="header-title">qda.</h2></a>
                <div className="header-button">
                    <a href="#contact"><button>Me contacter</button></a>
                </div>
            </div>
        </header>
    );
}