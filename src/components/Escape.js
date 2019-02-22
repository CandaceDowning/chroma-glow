import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Escape extends Component {
  render() {
    return (
      <div className="gamelanding">
        <h1 className="defeat">ENEMY SECTOR</h1>
        
        
        
        <div className="dash">
          <div className="btn1">
            <Link to="/">
              <button />
            </Link>
          </div>
          <div className="btn-key-screen">
            <div className="key-box">
              <div className="key-holder">
                <div className="btn1-key key" />
                <p>ESCAPE</p>
              </div>
              <div className="key-holder">
                <div className="btn2-key key" />
                <p />
              </div>
              <div className="key-holder">
                <div className="btn3-key key" />
                <p />
              </div>
              <div className="key-holder">
                <div className="btn4-key key" />
                <p />
              </div>
            </div>
          </div>
          <div className="rigthbtn">
            <div className="btn2">
              <button />
            </div>
            <div className="bottombtn">
              <button className="btn3" />
              <button className="btn4" />
            </div>
          </div>
        </div>


        
      </div>
    );
  }
}
