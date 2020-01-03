import * as d3 from 'd3';

export default class D3Chart {
    constructor(element, data, currentTeam) {
        const svg = d3.select(element)
            .append("svg")
            .attr("width", 1000)
            .attr("height", 500);

        // svg.append("rect")
        //     .attr("x", 50)
        //     .attr("y", 50)
        //     .attr("width", 100)
        //     .attr("height", 300)
        //     .attr("fill", "grey");

        const y = d3.scaleLinear()
            .domain([0, 50])
            .range([0, 500]);

        const x = d3.scaleBand()
            .domain(data.map(game => game.date))
            .range([0, 900])
            .padding(0.25);

        const rects = svg.selectAll("rect")
            .data(data);

        rects.enter().append("rect")
            .attr("x", d => x(d.date))
            .attr("y", 100)
            .attr("width", x.bandwidth)
            .attr("height", d => {
                if(d.home_team === currentTeam){
                    return y(d.home_score)
                } else {
                    return y(d.away_score)
                }
                })
            .attr("fill", d => {
                if(d.result === "Win"){
                    return "green";
                } else {
                    return "#333";
                }
            })

    }
}
