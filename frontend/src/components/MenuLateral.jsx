import { useState } from 'react'
import { Link } from 'wouter'

const Menu = () => {
    const [page, setPage] = useState('home')

    const homePage = () => setPage('home')
    const providerPage = () => setPage('provider')
    const clientPage = () => setPage('client')

    return (
        <nav className="menu-lateral" style={{background: "#222d32"}}>

            <Link href="/" onClick={homePage}>
                <a className={page === 'home' ? 'active' : ""}>
                    <i className="fas fa-home"></i>
                    Página Principal
                </a>
            </Link>


            <Link href="/pedidos" onClick={providerPage}>
                <a className={page === 'provider' ? 'active' : ""}>
                    <i class="fas fa-box-open"></i>
                Pedidos
                </a>
            </Link>

            <Link href="/giftcard" onClick={clientPage}>
                <a className={page === 'client' ? 'active' : ""}>
                <i class="fas fa-credit-card"></i>
                    Gift Card
                </a>
            </Link>

            <hr />

            <Link href="/">
                <i class="fas fa-hand-holding-usd"></i>
                Pagos
            </Link>

            <Link href="/">
                <i class="fas fa-coins"></i>
                Deudas
            </Link>

            <Link href="/">
                <i class="fas fa-users"></i>
                Banco
            </Link>

            <hr />

            <Link href="/">
                <i className="fas fa-folder"></i>
                Javascript
            </Link>

            <Link href="/">
                <i className="fas fa-folder"></i>
                React
            </Link>

            <Link href="/">
                <i className="fas fa-folder"></i>
                Archivos
            </Link>
        </nav>

    )
}

export default Menu
