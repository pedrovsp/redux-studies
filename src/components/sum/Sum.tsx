import React from 'react'
import { Card } from '../card/Card'

interface SumProps {

}

const Sum = (props: SumProps) => {
    const sum = (num1: number, num2: number) => {
        return num1 + num2;
    }
    return (
        <Card title='Sum'>
            <span>Value: {sum}</span>
        </Card>
    )
}

export default Sum
