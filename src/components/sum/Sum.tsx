import React from 'react'
import { Card } from '../card/Card'
import { connect } from 'react-redux';
import { RootState } from '../../store/store-config';

interface SumProps {
    min: number,
    max: number
}

const Sum = (props: SumProps) => {
    const sum = (num1: number, num2: number) => {
        return num1 + num2;
    }
    return (
        <Card title='Sum'>
            <span>Value: {sum(props.min, props.max)}</span>
        </Card>
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
}

export default connect(mapStateToProps)(Sum)