import React from 'react'
import {Link} from "react-router-dom";

const Header = ()=> {

    return (
        <div className="container py-4">
            <Link to={'/'} className="link-dark text-decoration-none">
                <h2>Heladeria Jean Pierre's</h2>
            </Link>
            <div className="d-flex flex-row-reverse">
                <Link to={'/signup'} className="text-decoration-none">
                    Crear Cuenta 
                </Link>
                &nbsp; | &nbsp;
                <Link to={'/login'} className="text-decoration-none">
                    Iniciar Sesion   
                </Link>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/order">Comprar</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cuenta
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/account">Ordenes</a></li>
                                <li><a class="dropdown-item" href="/editarMenu">Agregar Plato</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;