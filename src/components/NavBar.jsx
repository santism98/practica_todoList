import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const NavBar = () => {

    return (

        <nav>

            <ul className='navbar bg-green'>

                <li className="nav-link active"><NavLink
                    to='/'
                    className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}>
                    Home
                </NavLink></li>

                <li className="nav-link "><NavLink
                    to='/login'
                    className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}>
                    Login
                </NavLink></li>

                <li className="nav-link " > <NavLink
                    to='/form'
                    className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}>
                    Tareas
                </NavLink></li >

                <li className="nav-link " > <NavLink
                    to='/services'
                    className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''} `}>
                    Servicios
                </NavLink></li >

            </ul >

        </nav >

    )
}
