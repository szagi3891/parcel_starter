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

interface ListPropsType {
    state: State,
}

const List = observer((props: ListPropsType) => {
    const { state } = props;

    const przyciski = [];

    for (let i=0; i<state.ilosc; i++) {
        przyciski.push(
            <Text key={i} label={`__label__${state.ilosc}__`} />
        );
    }

    return (
        <>
            {przyciski}
        </>
    );
});

export const App = observer(() => {
    const [state] = React.useState(() => new State());

    return (
        <div>
            <div onClick={state.inc}>
                witaj fantastyczny swiecie {state.ilosc} - kliknij mnie!!
            </div>
            <div>AAAA - 4321</div>
            <List state={state} />
            <div>adassadsa</div>
            <div>sdasdas</div>
        </div>
    );
});
