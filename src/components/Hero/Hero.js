import './Hero.css';
import TechCircle from './TechCircle';

export default function Hero() {


    return (
        <div id="hero" className="hero page-width">
            <div className="hero-wrapper">
                <div className="hero-left">
                    <h1>QUENTIN <br />DE ANDRADE</h1>
                    <span>FRONT-END WEB DEVELOPER</span>
                    <div className="hero-button-wrapper">
                        <a href="#about"><button className="button-primary hero-about">À PROPOS</button></a>
                        <a href="#contact"><button className="button-primary hero-hire">HIRE ME</button></a>
                    </div>
                </div>
                <div className="hero-right">
                    <TechCircle />
                </div>
            </div>
        </div>
    );
}