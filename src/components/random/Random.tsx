import React from 'react'
import { Card } from '../card/Card'
import { RootState } from '../../store/store-config'
import { connect } from 'react-redux'

interface RandomProps {
    min: number,
    max: number
}

const Random = (props: RandomProps) => {
    const random = (num1: number, num2: number) => {
        return Math.floor((Math.random() * (num2 - num1)) + num1)
    }
    return (
        <Card title='Random number'>
            <span>Value: {random(props.min, props.max)}</span>
        </Card>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
}

export default connect(mapStateToProps)(Random)