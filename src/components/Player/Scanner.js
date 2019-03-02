import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRank, getStats } from "../../ducks/reducer";
class Scanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scanCount:0,
        data: {
            datasets: [
              {label: [this.props.rank[0].playername.toUpperCase()],
                backgroundColor:"rgba(251, 254, 6,1)" ,
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[0].hi_score,
                  y: this.props.stats[0].luck,
                  r: this.props.stats[0].cal_level
                }]
              }, 
              {label: [this.props.rank[1].playername.toUpperCase()],
                backgroundColor: "rgba(249, 240, 17,1)",
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[1].hi_score,
                  y: this.props.stats[1].luck,
                  r: this.props.stats[1].cal_level
                }]
              },
              {label: [this.props.rank[2].playername.toUpperCase()],
                backgroundColor: "rgba( 248, 227, 29,1)",
                borderColor: "#5c6bfe",
                data: [{
                  x: this.props.stats[2].hi_score,
                  y: this.props.stats[2].luck,
                  r: this.props.stats[2].cal_level
                }]
              }, 
              {label: [this.props.rank[3].playername.toUpperCase()],
                backgroundColor: "rgba( 246, 214, 41,1)",
                borderColor: "#e006e7" ,
                data: [{
                  x: this.props.stats[3].hi_score,
                  y: this.props.stats[3].luck,
                  r: this.props.stats[3].cal_level
                }]
              }, 
              {label: [this.props.rank[4].playername.toUpperCase()],
                backgroundColor: "rgba(245, 201, 53,1)",
                borderColor: "#e006e7",
                data: [{
                  x: this.props.stats[4].hi_score,
                  y: this.props.stats[4].luck,
                  r: this.props.stats[4].cal_level
                }]
              }, 
              {label: [this.props.rank[5].playername.toUpperCase()],
                backgroundColor: "rgba(243, 188, 65,1)",
                borderColor: "#fbfe06",
                data: [{
                  x: this.props.stats[5].hi_score,
                  y: this.props.stats[5].luck,
                  r: this.props.stats[5].cal_level
                }]
              }, 
              {label: [this.props.rank[6].playername.toUpperCase()],
                backgroundColor: "rgba(242, 175, 77,1)",
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[6].hi_score,
                  y: this.props.stats[6].luck,
                  r: this.props.stats[6].cal_level
                }]
              }, 
              {label: [this.props.rank[7].playername.toUpperCase()],
                backgroundColor: "rgba(241, 162, 88,1)",
                borderColor: "#5c6bfe",
                data: [{
                  x: this.props.stats[7].hi_score,
                  y: this.props.stats[7].luck,
                  r: this.props.stats[7].cal_level
                }]
              }, 
              {label: [this.props.rank[8].playername.toUpperCase()],
                backgroundColor: "rgba(239, 149, 100,1)",
                borderColor: "#e006e7",
                data: [{
                  x: this.props.stats[8].hi_score,
                  y: this.props.stats[8].luck,
                  r: this.props.stats[8].cal_level
                }]
              }, 
              {label: [this.props.rank[9].playername.toUpperCase()],
                backgroundColor: "rgba(238, 136, 112,1)",
                borderColor: "#e006e7",
                data: [{
                  x: this.props.stats[9].hi_score,
                  y: this.props.stats[9].luck,
                  r: this.props.stats[9].cal_level
                }]
              }, 
              {label: [this.props.rank[10].playername.toUpperCase()],
                backgroundColor: "rgba(236, 123, 124,1)",
                borderColor: "#fbfe06",
                data: [{
                  x: this.props.stats[10].hi_score,
                  y: this.props.stats[10].luck,
                  r: this.props.stats[10].cal_level
                }]
              }, 
              {label: [this.props.rank[11].playername.toUpperCase()],
                backgroundColor: "rgba(235, 110, 136,1)",
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[11].hi_score,
                  y: this.props.stats[11].luck,
                  r: this.props.stats[11].cal_level
                }]
              }, 
              {label: [this.props.rank[12].playername.toUpperCase()],
                backgroundColor: "rgba(233, 97, 148,1)",
                borderColor: "#5c6bfe",
                data: [{
                  x: this.props.stats[12].hi_score,
                  y: this.props.stats[12].luck,
                  r: this.props.stats[12].cal_level
                }]
              }, 
              {label: [this.props.rank[13].playername.toUpperCase()],
                backgroundColor: "rgba(232, 84, 159,1)",
                borderColor: "#e006e7",
                data: [{
                  x: this.props.stats[13].hi_score,
                  y: this.props.stats[13].luck,
                  r: this.props.stats[13].cal_level
                }]
              }, 
              {label: [this.props.rank[14].playername.toUpperCase()],
                backgroundColor: "rgba(231, 71, 171,1)",
                borderColor: "#fbfe06",
                data: [{
                  x: this.props.stats[14].hi_score,
                  y: this.props.stats[14].luck,
                  r: this.props.stats[14].cal_level
                }]
              }, 
              {label: [this.props.rank[15].playername.toUpperCase()],
                backgroundColor: "rgba(229, 58, 183 ,1)",
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[15].hi_score,
                  y: this.props.stats[15].luck,
                  r: this.props.stats[15].cal_level
                }]
              }, 
              {label: [this.props.rank[16].playername.toUpperCase()],
                backgroundColor: "rgba(228, 45, 195,1)",
                borderColor: "#5c6bfe",
                data: [{
                  x: this.props.stats[16].hi_score,
                  y: this.props.stats[16].luck,
                  r: this.props.stats[16].cal_level
                }]
              }, 
              {label: [this.props.rank[17].playername.toUpperCase()],
                backgroundColor: "rgba(226, 32, 207,1)",
                borderColor: "#fbfe06",
                data: [{
                  x: this.props.stats[17].hi_score,
                  y: this.props.stats[17].luck,
                  r: this.props.stats[17].cal_level
                }]
              }, 
              {label: [this.props.rank[18].playername.toUpperCase()],
                backgroundColor: "rgba(25, 19, 219,1)",
                borderColor: "#fbfe06",
                data: [{
                  x: this.props.stats[18].hi_score,
                  y: this.props.stats[18].luck,
                  r: this.props.stats[18].cal_level
                }]
              }, 
              {label: [this.props.rank[19].playername.toUpperCase()],
                backgroundColor: "rgba(224, 6, 231,1)",
                borderColor: "#28f9fc",
                data: [{
                  x: this.props.stats[19].hi_score,
                  y: this.props.stats[19].luck,
                  r: this.props.stats[19].cal_level
                }]
              }, 


            ]
          },
    };
  }

  // rescan = () => {
  //   this.props.getRank();
  //   this.props.getStats();
  //   this.setState({scanCount: this.state.scanCount+=1})
  //   console.log(this.state.scanCount)
  // }

  render() {
    return (
      <div className="chart">
        <div className="outer">
          <div className="display">
            <Bubble
              data={this.state.data}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="control">
            <div className="btnpanel">
              <p>CLOSE</p>
              <p> SCANNER</p>
              <Link to="/player/ship">
                <div className="calbtn1" />
              </Link>
            </div>
            {/* <div className="btnpanel">
              <p></p>
              <div className="calbtn2"/>
            </div> */}
            <div className="light l1" />
            <div className="light l2" />
            <div className="light l3" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
   {getRank, getStats }
)(Scanner);

