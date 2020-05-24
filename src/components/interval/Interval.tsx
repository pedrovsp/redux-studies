import React, { FunctionComponent } from 'react';
import './Interval.scss';
import { Card } from '../card/Card';

interface IntervalProps { }

export const Interval: FunctionComponent<IntervalProps> = props => {
    return (<div>
        <Card title="Number interval">
            <div className="Interval">
                <span>
                    <strong>Min</strong>
                    <input type="number" value={0} readOnly />
                </span>
                <span>
                    <strong>Max</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
        </Card>
    </div>);
}
