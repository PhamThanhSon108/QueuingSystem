import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { RadialBar } from "@ant-design/plots";

interface Datum {
  star: number;
}
function RadialChart({ color }: { color?: string }) {
  const data = [
    {
      name: "X6",
      star: 297,
    },
    {
      name: "G",
      star: 801,
    },
  ];
  const config = {
    with: 150,
    data,
    xField: "name",
    yField: "star",
    maxAngle: 350,
    radius: 1,
    innerRadius: 0.74,
    // tooltip: {
    //   fields: ["name", "star"],
    //   formatter: (datum: any) => {
    //     return { name: datum.name, value: datum.star };
    //   },
    //   customContent: (data: any, title: any) => {
    //     console.log(data, title);
    //     return `<div>${1}</div>`;
    //   },
    // },
    colorField: "star",
    color: function (type: any) {
      if (type.star > 800) return color ?? "#ff7506";
      return "#7E7D88";
    },
    barBackground: {
      style: {
        fill: "#EAEAEC",
        fillOpacity: 1,
      },
    },
    barStyle: {
      style: {
        fill: "red",
        fillOpacity: 0.5,
        stroke: "black",
        lineWidth: 1,
        lineDash: [4, 5],
        strokeOpacity: 0.7,
        shadowColor: "black",
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        cursor: "pointer",
      },
    },
    // annotations: [
    //   {
    //     type: "text",
    //     position: ["median", "median"],
    //     content: "辅助文本",
    //     style: {
    //       fill: "red",
    //     },
    //   },
    // ],
  };
  return <RadialBar style={{ width: "60px", height: "60px" }} {...config} />;
}
export default RadialChart;
