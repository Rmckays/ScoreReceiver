import * as d3 from 'd3';

const HEIGHT = 500;
const WIDTH = 1000;

export default class D3Chart {
    constructor(element, data, currentTeam) {
        const svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT);

        const maxAway = d3.max(data, d => {
            return parseInt(d.away_score);
        });

        const maxHome = d3.max(data, d => {
            return parseInt(d.home_score);
        });

        const absMax = (maxAway > maxHome) ?  maxAway : maxHome;

        const y = d3.scaleLinear()
            .domain([0, absMax])
            .range([0, HEIGHT]);

        const x = d3.scaleBand()
            .domain(data.map(game => game.date))
            .range([0, WIDTH])
            .padding(0.25);

        const rects = svg.selectAll("rect")
            .data(data);

        rects.enter().append("rect")
            .attr("x", d => x(d.date))
            .attr("y", d => {
                if(d.home_team === currentTeam){
                    return HEIGHT - y(d.home_score)
                } else {
                    return HEIGHT - y(d.away_score)
                }
            })
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
