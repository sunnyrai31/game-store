import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const [selectedValue, setSelectedValue] = useState('/useState');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    navigate(event.target.value);
  };
  return (
    <div className=''>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Store
          </Link>

          <form className="d-flex w-75" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <div className="setting-bar text-white">
            <i className="bi bi-heart me-3"></i> {/* Add margin-right to create space */}
            <i className="bi bi-brightness-high me-3"></i> {/* Add margin-right to create space */}
            <i className="bi bi-person-fill-gear me-3"></i> {/* Add margin-right to create space */}
            <i className="bi bi-battery"></i>
          </div>

          {/* Routing is working with select here .  */}
          <select className="form-select form-select-sm" value={selectedValue} onChange={handleSelectChange}>
            <option value="/useState">
              <Link to="/useState">useState</Link>
            </option>
            <option value="/useEffect">
              <Link to="/useEffect">useEffect</Link>
            </option>
            <option value="/useReducer">
              <Link to="/useReducer">useReducer</Link>
            </option>
            <option value="/useContextApi">
              <Link to="/useContextApi">useContextApi</Link>
            </option>
            <option value="/">
              <Link to="/">Home</Link>
            </option>
          </select>

          {/* example with dropdown  */}
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          { /* to be class name - className="collapse navbar-collapse" */}
          {/* <div className="navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Routes
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/useState">Action</Link></li>
                  <li><Link className="dropdown-item" to="/useEffect">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/useState">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div> */}


        </div>
      </nav>
    </div >
  );
}
export default Header;

