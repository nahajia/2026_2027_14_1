
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

                        <li className="nav-item">
                            <Link className="nav-link" to="/keresesNev">
                                Keresés név szerint
                            </Link>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
