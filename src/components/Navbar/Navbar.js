import PropTypes from "prop-types";
import ColorPalette from "../ColorPalette/ColorPalette";
import { Link } from "react-router-dom";

const Navbar = function (props) {

  const changeThemeColor = (color) => {
    props.changeThemeColor(color);
  }

  const toggleNavBar = () => {
    if(document.getElementById('navbarSupportedContent').classList.contains('collapse')) {
      document.getElementById('navbarSupportedContent').classList.remove('collapse')
    } else {
      document.getElementById('navbarSupportedContent').classList.add('collapse')
    }
  }

  return <>
    <nav 
      className={`navbar navbar-expand-lg navbar-${props.themeMode}`} 
      style={{
        backgroundColor: props.themeMode==='dark'?props.themeColor:'rgb(240,240,240)'
      }}
    >
      <Link className="navbar-brand" to="/TextUtils">{props.title}</Link>
      <button onClick={toggleNavBar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/TextUtils">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

        </ul>
        
        <div className="" style={{display: 'inline-flex'}}>
          <span>
            { props.themeMode==='dark' && <ColorPalette showAlert={props.showAlert} changeThemeColor={changeThemeColor}/> }
          </span>
          
          <button className={`btn btn-${props.themeMode==='light'?'dark':'light'}`} onClick={props.toggleMode}>
            Enable {props.themeMode==='light'?'Darkmode ':'LightMode'}
          </button>
        </div>  
      </div>
    </nav>
  </>
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;