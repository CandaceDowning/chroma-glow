import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2'

class DonateChart extends Component {
    constructor(props){
        super(props)
        
        this.state={
            data: {
                labels: [
                    this.props.donate[0].playername.toUpperCase(), 
                    this.props.donate[1].playername.toUpperCase(), 
                    this.props.donate[2].playername.toUpperCase(), 
                    this.props.donate[3].playername.toUpperCase(), 
                    this.props.donate[4].playername.toUpperCase()],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ['#c81139', "#fbfe06","#28f9fc","#5c6bfe","#e006e7"],
                    data: [
                        this.props.donate[0].donation,
                        this.props.donate[1].donation,
                        this.props.donate[2].donation,
                        this.props.donate[3].donation,
                        this.props.donate[4].donation
                    ]
                  }
                ]
              },
              options: {
                title: {
                  maintainAspectRatio: false,
                }
              }





        }
    }



    render(){
        return(
            <div>
            <Doughnut
              data={this.state.data}
              options={{
                maintainAspectRatio: false,
              }}
            />






            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(DonateChart);