import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Victory extends Component {
  render() {
    return (
      <div>
        <h1 className="title">VICTORY</h1>

        <div className="dash">
          <div className="btn1">
            <Link to="/games">
              <button />
            </Link>
          </div>

          <div className="btn-key-screen">
            <div className="key-box">
              <div className="key-holder">
                <div className="btn1-key key" />
                <p>SURRENDER</p>
              </div>
              <div className="key-holder">
                <div className="btn2-key key" />
                <p>NEXT</p>
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
              <button onClick={() => this.props.next()} />
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
