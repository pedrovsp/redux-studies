import React from 'react';
import './Interval.scss';
import { Card } from '../card/Card';
import { connect } from 'react-redux';
import { changeMaxValue, changeMinValue } from '../../store/actions/numbers';
import { RootState } from '../../store/store-config';

interface IntervalProps {
    min: number,
    max: number,
    changeValueInputOne: (value: number) => void,
    changeValueInputTwo: (value: number) => void
}

const Range = (props: IntervalProps) => {
    return (<div>
        <Card title="Number interval">
            <div className="Interval">
                <span>
                    <strong>Min</strong>
                    <input onChange={event => props.changeValueInputOne(Number(event.target.value))}
                        type="number" value={props.min} />
                </span>
                <span>
                    <strong>Max</strong>
                    <input onChange={event => props.changeValueInputTwo(Number(event.target.value))}
                        type="number" value={props.max} />
                </span>
            </div>
        </Card>
    </div>);
}

function mapDispatchToProps(dispatch: any) {
    return {
        changeValueInputOne: (value: number) => {
            const action = changeMinValue(value);
            dispatch(action);
        },
        changeValueInputTwo: (value: number) => {
            const action = changeMaxValue(value);
            dispatch(action)
        }
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Range)