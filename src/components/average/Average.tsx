import React from 'react'
import { Card } from '../card/Card'
import { connect } from 'react-redux'
import { RootState } from '../../store/store-config'
interface AverageProps {
    min: number,
    max: number
}

const Average = (props: AverageProps) => {
    const average = (num1: number, num2: number) => {
        return (num1 + num2) / 2;
    }
    return (
        <Card title='Average'>
            <span>Value: {average(props.min, props.max)}</span>
        </Card>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
}

export default connect(mapStateToProps)(Average)
