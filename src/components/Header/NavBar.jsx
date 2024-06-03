import React from 'react'

export const NavBar = () => {
return (
<nav className="nav">
        <ul className="nav-menu">
                <li className="nav-item"><a className="nav-link" href="http://localhost:5173/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="http://localhost:5173/tecnologia">Tecnologia</a></li>
                <li className="nav-item"><a className="nav-link" href="http://localhost:5173/perifericos">Perifericos</a></li>
                <li className="nav-item"><a className="nav-link" href="http://localhost:5173/accesorios">Accesorios</a></li>
        </ul>
</nav>
)
}

