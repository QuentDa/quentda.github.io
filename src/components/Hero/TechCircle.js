import ReactSVG from '../../ressources/icons/ReactSVG';
import ReduxSVG from '../../ressources/icons/ReduxSVG';
import JavascriptSVG from '../../ressources/icons/JavascriptSVG';
import TypescriptSVG from '../../ressources/icons/TypescriptSVG';
import NodeSVG from '../../ressources/icons/NodeSVG';
import MongoSVG from '../../ressources/icons/MongoSVG';
import PhpSVG from '../../ressources/icons/PhpSVG';
import MysqlSVG from '../../ressources/icons/MysqlSVG';
import TailwindSVG from '../../ressources/icons/TailwindSVG';

export default function TechCircle() {
    return (
        <div className="tech-circle">
            <div className="row">
                <ReactSVG />
            </div>
            <div className="row">
                <JavascriptSVG />
                <TypescriptSVG />
            </div>
            <div className="row">
                <TailwindSVG />
                <NodeSVG />
                <MongoSVG />
            </div>
            <div className="row">
                <PhpSVG />
                <MysqlSVG />
            </div>
            <div className="row">
                <ReduxSVG />
            </div>
        </div>
    );
}