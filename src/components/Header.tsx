import logo from "../assets/logo.png";

export function Header() {
    return (
        <header className="flex items-center justify-center pt-8 pb-8">
            <img src={logo} alt=""/>
        </header>
    )
}