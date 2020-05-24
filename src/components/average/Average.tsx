import React from 'react'
import { Card } from '../card/Card'

interface AverageProps {

}

const Average = (props: AverageProps) => {
    const average = (num1: number, num2: number) => {
        return (num1 + num2) / 2;
    }
    return (
        <Card title='Average'>
            <span>Value: {average}</span>
        </Card>
    )
}

export default Average
