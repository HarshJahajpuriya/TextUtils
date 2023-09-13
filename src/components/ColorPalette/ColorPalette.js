import React from "react";
import "./ColorPalette.css"

const ColorPalette = (props) => {

  const [selectedTheme, setSelectedTheme] = React.useState('#606060')

  const selectTheme = (ev) => {
    let themeColor = ev.target.attributes['themeColor']?.value;
    console.log(themeColor);
    setSelectedTheme(themeColor)
    props.changeThemeColor(themeColor);
    console.log(props);
    props.showAlert('Darkmode theme-color changed!', 'light')
  }

  return (
    <>
      <div className="container mt-2">
        <div 
          onClick={selectTheme} 
          themeColor="#606060" 
          style={{ display: 'inline-flex' }} 
          className={`ml-2 ${selectedTheme === '#606060' ? 'selectedColor' : 'color'} gray`}
        ></div>
        <div 
          onClick={selectTheme} 
          themeColor="#0f460f" 
          style={{ display: 'inline-flex' }} 
          className={`ml-2 ${selectedTheme === '#0f460f' ? 'selectedColor' : 'color'} green`}
        ></div>
        <div 
          onClick={selectTheme} 
          themeColor="#151564" 
          style={{ display: 'inline-flex' }} 
          className={`ml-2 ${selectedTheme === '#151564' ? 'selectedColor' : 'color'} blue`}
        ></div>
        <div 
          onClick={selectTheme} 
          themeColor="#61240d" 
          style={{ display: 'inline-flex' }} 
          className={`ml-2 ${selectedTheme === '#61240d' ? 'selectedColor' : 'color'} red `}
        ></div>
      </div>
    </>
  );

}

export default ColorPalette;
