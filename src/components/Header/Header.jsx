import './header.scss';

export default function Header() {
    return (
        <header className="header d-flex">
            <h3>
                <a className="header__title" href="https://github.com/kvrdv">planetdb</a>
            </h3>

            <ul className="header__nav d-flex">
                <li className="header__nav-item">
                    <span>People</span>
                </li>
                <li className="header__nav-item">
                    <span>Planets</span>
                </li>
                <li className="header__nav-item">
                    <span>Starships</span>
                </li>
            </ul>
        </header>
    );
}
