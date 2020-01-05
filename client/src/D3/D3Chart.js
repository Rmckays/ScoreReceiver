import * as d3 from 'd3';

const MARGINS = {top: 10, right: 20, left: 35, bottom: 70};
const HEIGHT = 500 - MARGINS.left - MARGINS.right;
const WIDTH = 1000 - MARGINS.top - MARGINS.bottom;

export default class D3Chart {
    constructor(element, data, currentTeam) {
        const svg = d3.select(element)
            .append("svg")
                .attr("width", WIDTH + MARGINS.left + MARGINS.right)
                .attr("height", HEIGHT + MARGINS.top + MARGINS.bottom)
            .append("g")
                .attr("transform", `translate(${MARGINS.left}, ${MARGINS.top})`);

        const maxAway = d3.max(data, d => {
            return parseInt(d.away_score);
        });

        const maxHome = d3.max(data, d => {
            return parseInt(d.home_score);
        });

        const absMax = (maxAway > maxHome) ?  maxAway : maxHome;

        const y = d3.scaleLinear()
            .domain([0, absMax])
            .range([HEIGHT, 0]);

        // const x = d3.scaleBand()
        //     .domain(data.map(game => game.date))
        //     .range([0, WIDTH])
        //     .padding(0.4);

        const x = d3.scaleTime()
            // .domain([Date(data[0].date), Date(data[data.length -1].date)])
            .domain(d3.extent(data, d => new Date(d.date)))
            .range([0, WIDTH]);

        const xAxisCall = d3.axisBottom(x)
            .tickFormat(d3.timeFormat("%b %d %y"));

        svg.append("g")
            .attr("transform", `translate(0, ${HEIGHT})`)
            .call(xAxisCall)
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .attr("text-anchor", "end");

        const yAxisCall = d3.axisLeft(y);
        svg.append("g").call(yAxisCall);

        svg.append("text")
            .attr("x", WIDTH/2)
            .attr("y", HEIGHT + 60)
            .attr("text-anchor", "middle")
            .text("Game Dates");

        svg.append("text")
            .attr("x", - (HEIGHT / 2))
            .attr("y", - 25)
            .attr("text-anchor", "middle")
            .text("Points")
            .attr("transform", "rotate(-90)");

        const lineCurrentTeam = d3.line()
            .x(d => x(new Date(d.date)))
            .y(d => {
                if (d.home_team === currentTeam) {
                    return y(d.home_score)
                } else {
                    return y(d.away_score)
                }
            })

        const lineOpposeTeam = d3.line()
            .x(d => x(new Date(d.date)))
            .y(d => {
                if (d.home_team !== currentTeam) {
                    return y(d.home_score)
                } else {
                    return y(d.away_score)
                }
            })

        const circles = svg.selectAll("circle")
            .data(data);

        const teamPath = svg.append("path");

        const opposePath = svg.append("path");

        circles.exit().remove();

        circles.enter().append("circle")
            .attr("r", 4)
            .attr("cx", d => x(new Date(d.date)))
            .attr("cy", d => {
                if(d.home_team === currentTeam){
                    return y(d.home_score)
                } else {
                    return y(d.away_score)
                }
            })
            .attr("fill", "green");

        teamPath.data([data])
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 2)
            .attr('d', lineCurrentTeam);

        circles.enter().append("circle")
            .attr("r", 4)
            .attr("cx", d => x(new Date(d.date)))
            .attr("cy", d => {
                if(d.home_team !== currentTeam){
                    return y(d.home_score)
                } else {
                    return y(d.away_score)
                }
            })
            .attr("fill", "red")

        opposePath.data([data])
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr('d', lineOpposeTeam);

        // const rects = svg.selectAll("rect")
        //     .data(data);
        //
        // rects.enter().append("rect")
        //     .attr("x", d => x(d.date))
        //     .attr("y", d => {
        //         if(d.home_team === currentTeam){
        //             return y(d.home_score)
        //         } else {
        //             return y(d.away_score)
        //         }
        //     })
        //     .attr("width", x.bandwidth)
        //     .attr("height", d => {
        //         if(d.home_team === currentTeam){
        //             return HEIGHT - y(d.home_score);
        //         } else {
        //             return HEIGHT - y(d.away_score);
        //         }
        //         })
        //     .attr("fill", d => {
        //         if(d.result === "Win"){
        //             return "green";
        //         } else {
        //             return "#333";
        //         }
        //     })

    }
}
