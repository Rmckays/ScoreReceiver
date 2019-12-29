import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import D3Chart from '../D3/D3Chart';

const ChartWrapper = props => {
    const container = useRef('chart');

    useEffect(() => {
        new D3Chart(container)
    }, []);

    return (
      <div ref="chart"></div>
    );
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(ChartWrapper);