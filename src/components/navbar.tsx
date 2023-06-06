const Nav = () => {
    return (
        <div>
            <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                     <a href="/" className="nav-logo">
                        EnsiMeal
                    </a>
                    <button className="nav-btn btn">
                        <i className="fas fa-align-justify"></i>
                    </button>
                 </div>
                 <div className="nav-links">
                    <div className="nav-link contact-link">
                        <a href="/add" className="btn"> add recipe </a>
                     </div>
                </div>
            </div>
         </nav>
        </div>
    );
}
 
export default Nav;