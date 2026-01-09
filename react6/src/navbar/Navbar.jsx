let Navbar=()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#" className="navbar-brand">Bootstrap Example</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li><a href="/index" className="nav-link">Home</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                        <li><a href="/services" className="nav-link">Services</a></li>
                        <li><a href="/product" className="nav-link">Product</a></li>
                        <li><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
}

export default Navbar;