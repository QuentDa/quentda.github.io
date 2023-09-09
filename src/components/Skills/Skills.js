import './Skills.css'
export default function Skills() {
    return (
        <div className="skills">
            <div className="skills-wrapper page-width">
                <div className="skills-content">
                    <h2>COMPÉTENCES</h2>
                    <p>Tout ce que j'ai pu apprendre, aussi bien en autodidacte, que dans mes formations ou en agence web.</p>
                </div>
                <div className="skills-button">
                    <div className='column1'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Jest</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                    <div className='column2'>
                        <ul>
                            <li>Node</li>
                            <li>MongoDB</li>
                            <li>API/JSON</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>Liquid</li>
                            <li>Shopify</li>
                            <li>Axios</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}