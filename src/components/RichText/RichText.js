import './RichText.css'
export default function RichText() {
    return (
        <div className="rich-text">
            <div className="rich-text-wrapper page-width">
                <div className="rich-text-content">
                    <p>Développeur curieux et passionné par la découverte de <strong>nouvelles perspectives de réflexion</strong>, de création et d'innovation. Une carte à jouer pour vos projets afin d'apporter des <strong>solutions pertinentes</strong>.</p>
                </div>
                <div className="rich-text-button">
                    <a href="./QUENTINDEANDRADE.pdf" target="_blank" rel="noreferrer"><button className="button-primary white">télécharger mon cv</button></a>
                </div>
            </div>
        </div>
    )
}