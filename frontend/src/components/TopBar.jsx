import logo from '../images/logo.svg'
import { useEffect } from "react"

import {Link} from 'wouter'

const TopBar = () => {
    useEffect(() => {
        const contenedor = document.querySelector('#contenedor');

        document.querySelector('#boton-menu').addEventListener('click', () => {
            contenedor.classList.toggle('active');
        })

        const comprobarAncho = () => {
            if (window.innerWidth <= 768) {
                contenedor.classList.remove('active');
            } else {
                contenedor.classList.remove('active');
            }
        }

        comprobarAncho();

        window.addEventListener('resize', () => {
            comprobarAncho();
        })
    }, [])

    return (
        <header className="header">
            <div className="contenedor-logo">
                <button id="boton-menu" className="boton-menu">
                    <i className="fas fa-bars"></i>
                </button>

                <Link to="/">
                <div className="d-flex justify-content-center align-items-center">
                   <img width={"180px"} src={logo} alt=""/> 
                </div>
                </Link>

            </div>

            

            <div className="botones-header p-4 d-flex" style={{alignItems: "baseline"}}>

                <button>
                    <i className="fas fa-bell"></i>
                </button>

                <a className="avatar">
                    <div>
                        JC
                    </div>
                </a>
            </div>
        </header>
    )
}

export default TopBar
