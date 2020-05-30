import * as React from 'react';
import { State } from "App.state";
import { observer } from "mobx-react-lite";
import { Text } from './Text';

interface ListPropsType {
    state: State,
}

export const List = observer((props: ListPropsType) => {
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
