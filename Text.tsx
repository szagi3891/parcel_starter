import * as React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import styled from '@emotion/styled';

interface KoloroweJarmarkiPropsType {
    active: boolean,
}

const KoloroweJarmarki = styled('div')<KoloroweJarmarkiPropsType>`
    color: ${props => props.active ? 'red' : 'blue'};
`;

interface PropsType {
    label: string
}

@observer
export class Text extends React.Component<PropsType> {
    @observable counter: number = 0;

    @computed get isActive() {
        return this.counter % 2 === 0;
    }

    constructor(props: PropsType) {
        super(props);

        setInterval(() => {
            this.counter++;
        }, 1000);
    }

    render() {
        return (
            <KoloroweJarmarki active={this.isActive}>
                to jest jakis button {this.props.label} {this.counter}
            </KoloroweJarmarki>
        );
    }
}
