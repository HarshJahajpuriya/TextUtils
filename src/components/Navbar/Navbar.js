import PropTypes from "prop-types";
import ColorPalette from "../ColorPalette/ColorPalette";

const Navbar = function (props) {

  const changeThemeColor = (color) => {
    props.changeThemeColor(color);
  }

  return <>
    <nav 
      className={`navbar navbar-expand-lg navbar-${props.themeMode}`} 
      style={{
        backgroundColor: props.themeMode==='dark'?props.themeColor:'rgb(240,240,240)'
      }}
    >
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>

        </ul>
        
        <div className="form-check form-switch" style={{display: 'inline-flex'}}>
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