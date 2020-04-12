import React,{Component} from 'react';
import * as d3 from "d3";

class Path extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };
    }

    onMouseOver = () => {
        this.setState({
            isHovered: true
        });
    };

    onMouseOut = () => {
        this.setState({
            isHovered: false
        });
    };

    render() {
        let { radius,slice, sliceColor } = this.props;

        const outerRadius = this.state.isHovered ? radius * 1.1 : radius;
        const innerRadius = radius * 0.7;
        const data = ["3 times weekly","Once every day","Never","<5 times monthly", "Several times a day","1/2 times a year"];

        const arc = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .padAngle(0.01)
            .cornerRadius(2);
        
        return (
            <g>
                <path
                    d={arc(slice)}
                    fill={sliceColor}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                />
                <text transform={`translate(${arc.centroid(slice)})`} fill="white">
                      {slice.value}
                </text>
                {this.state.isHovered && (
                    <g>
                    <circle r={innerRadius * 0.95} fill={sliceColor} />
                        <text textAnchor="middle" fontSize="20px"
                              fill="white">{data[slice.index]}</text>
                    </g>
                )}
            </g>
        );
    }
}
export default Path;
