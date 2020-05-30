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

class State {
    @observable counter: number = 0;

    @computed get isActive(): boolean {
        return this.counter % 4 === 0;
    }

    @computed get text(): string {
        if (this.counter % 2 === 0) {
            return 'Parzyste';
        }

        return 'nieparzyste';
    }

    constructor() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }
}

interface PropsType {
    label: string
}

export const Text = observer((props: PropsType) => {
    const [state] = React.useState(() => new State());

    return (
        <KoloroweJarmarki active={state.isActive}>
            to jest jakis button {props.label} {state.counter} cosik {state.text}
        </KoloroweJarmarki>
    );
})
