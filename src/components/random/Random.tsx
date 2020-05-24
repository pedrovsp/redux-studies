import React from 'react'
import { Card } from '../card/Card'

interface RandomProps {

}

const Random = (props: RandomProps) => {
    const random = (num1: number, num2: number) => {
        return Math.floor(Math.random() * num2 + 1)
    }
    return (
        <Card title='Random number'>
            <span>Value: {random}</span>
        </Card>
    )
}

export default Random
