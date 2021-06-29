import React, { Component } from 'react'
import  './App.css'
import cat from "./image/cat.jpeg";
import frog from "./image/frog.jpeg";
import lady from "./image/lady.jpeg";
import pirate from "./image/pirate.jpeg"

export class App extends Component {
  state = {
    colorList: ["orange", "pink", "purple"],
    backgroundColorInput: "",
  };

  handleOnBackgroundChange=(color) => {
    // console.log(color)
    this.setState ({
      backgroundColorInput: color,
    })
  }

  render() {
    return (
      <div className={"all"}>
        <div className={"header"}>Joshua Haines</div>
        <div className="container">
          
        </div>
        <div className={"center"}>
          <div className="sidebar"style={{ backgroundColor: this.state.backgroundColorInput }}
          >
            <h3> SideBar</h3>
            <ul className={"color"}>
              {this.state.colorList.map((item, index) => {
                // map creates a new array based on what we are looking for.
                return (
                  <li
                    key={index}
                    onClick={() => this.handleOnBackgroundChange(item)}
                  >
                    {item}
                  </li> // the new array will give each color a onClick function that will take in handle the function handleOnBackgroundChange.
                );
              })}
            </ul>
          </div>
          <div className={"body"}>
            <img
              className={"img"}
              src={frog}
              alt="frog"
            />
            <p>Morbi sit amet ante ut nisl auctor auctor. Mauris sit amet libero in urna facilisis interdum sed elementum ligula. Mauris nec auctor orci, non pulvinar enim. Etiam posuere, erat quis gravida facilisis, nunc tortor mollis velit, quis tincidunt felis mauris a velit. In velit sapien, dictum et massa a, facilisis vulputate elit. Nulla nibh felis, rhoncus a risus et, elementum auctor sapien. In suscipit lectus ac odio euismod sodales. Aenean sed venenatis erat, eu pulvinar lectus. Integer tristique ornare ultricies. Maecenas quis tempus metus. Sed enim metus, luctus at convallis eget, auctor nec diam. Maecenas ac mauris ante. Quisque lectus ante, posuere sit amet sapien eget, ultricies aliquam lectus. Aliquam nibh turpis, pellentesque bibendum venenatis ac, aliquet nec purus. Sed vitae risus ac tellus mattis fermentum eget in lacus. Nam eget nisi id sapien sollicitudin sagittis vel in orci.</p>
            <div className={"squares"}>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={cat}
                  alt="cat"
                />
                
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={lady}
                  alt="lady"
                />
                
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src={pirate}
                  alt="pirate"
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className={"footer"}>
          <p>&copy; Joshua Haines</p>
        </div>
      </div>
    );
  }
}

export default App
