import React from 'react';
import * as d3 from "d3";
import Slice from "./slice";

const PieChart = () =>{

    const data = [770,365,740,1359,945,421];
    const h = 400;
    const w = 400;

    let pie = d3.pie()(data);

    return(
        <svg height={h} width={w}>
            <g transform={`translate(${w/2},${h/2})`}>
                <Slice pie={pie}/></g>
        </svg>
    )
};
export default PieChart;







/*class BarChart extends Component {

   componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = this.props.data;

        const svg = d3.select("body").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        svg.selectAll("chart")
            .data(data)
            .enter()
            .append("chart")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 30)
            .attr("fill", "blue");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - (15*d))

    }

    render(){
        return(<div>
            <div id={"#" + this.props.id}>
            </div>
        </div>)
    }
}*/

