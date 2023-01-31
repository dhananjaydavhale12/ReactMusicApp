import { Outlet, Link } from "react-router-dom";


import './Layout.css';

const Layout = () => {
  return (
    <>
      <div className="Container HommeCont">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/playlist">Playlist</Link>
            </li>
          </ul>
        </nav>
        <div className="RightPart">
            <div className="Header">
                <div className="imgCont">
                  <img src="https://webstockreview.net/images/working-clipart-working-lady-14.png" alt="A" />
                </div>
                <div className="Content">
                  <h1>Good Morning</h1>
                </div>
            </div>
          
            <div className="ChangePart">
              <Outlet />
            </div>
           
        </div>
      </div>
      


      
    </>
  )
};

export default Layout;