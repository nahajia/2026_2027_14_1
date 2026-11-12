
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Játékadatbázis
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/jatekok">
                                Játékok
                            </Link>
                        </li>

                        {/* Keresés lenyíló menü */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Keresés
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/keresesNev">
                                        Név szerint
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/keresesAr">
                                        Ár szerint
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
