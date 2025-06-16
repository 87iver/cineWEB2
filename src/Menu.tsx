
import './index.css'
import './Menu.css'

function Menu() {
    return(
        <header>
        <nav>
            <div className="logo">
                <img className="gafas" src="../public/pngwing.com.png" alt=""/></div>
            <div className="inicio">
                <img src="../public/inib.png" alt="" className="log" /><h1 className="tit">INICIO</h1></div>
            <div className="estreno"><img src="../public/estre.png" alt="" className="log" /><h1 className="tit">ESTRENOS</h1></div>
        </nav>
    </header>
    )

}

export default Menu