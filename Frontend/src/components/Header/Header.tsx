import "./Header.css";

function Header() {

    return (

        <header className="header">

            <div className="header-brand">

                <div className="header-logo">
                    🦉
                </div>

                <div className="header-text">

                    <h1>
                        AFU
                    </h1>

                    <p>
                        Asistente Inteligente de Fauna Urbana
                    </p>

                </div>

            </div>

            <div className="header-tag">
                Identificación + IA
            </div>

        </header>

    );

}

export default Header;