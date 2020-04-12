import React from 'react';
import * as d3 from "d3";
import Path from "./path";

const Slice = (props) =>{


    let {pie} = props;
    let interpolate = d3.interpolateRgb("#3c308a","#289687");

    return pie.map((slice,index) =>{
        let sliceColor = interpolate(index / (pie.length - 1));
        return (
            <Path
                key={index}
                radius={130}
                slice={slice}
                sliceColor={sliceColor}
            />) });

};
export default Slice;