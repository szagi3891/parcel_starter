import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from './Text';
import { observable, action } from 'mobx';

class State {
    @observable ilosc: number = 3;

    @action inc = () => {
        this.ilosc++;
    }
}

export const App = observer(() => {
    const [state] = React.useState(() => new State());

    const przyciski = [];

    for (let i=0; i<state.ilosc; i++) {
        przyciski.push(
            <Text key={i} label={`label ${i}`} />
        );
    }

    return (
        <div>
            <div onClick={state.inc}>
                witaj fantastyczny swiecie {state.ilosc}
            </div>
            <div>AAAA - 4321</div>
            {przyciski}
            <div>adassadsa</div>
            <div>sdasdas</div>
        </div>
    );
});
