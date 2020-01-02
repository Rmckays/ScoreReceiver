import React, {Component} from 'react';
import {connect} from 'react-redux';
import D3Chart from '../D3/D3Chart';

class ChartWrapper extends Component{

    componentDidMount() {
        new D3Chart(this.refs.chart)
    }

    render() {
        return (
            <div ref="chart"></div>
        );
    }


};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(ChartWrapper);