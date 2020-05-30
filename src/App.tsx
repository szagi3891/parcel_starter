import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { List } from './List';
import { State } from './App.state';
import { Footer } from './Footer';

export const App = observer(() => {
    const [state] = React.useState(() => new State());

    return (
        <div>
            <div onClick={state.inc}>
                witaj fantastyczny swiecie {state.ilosc} - kliknij mnie!!
            </div>
            <div>AAAA - 4321</div>
            <List state={state} />
            <Footer />
        </div>
    );
});
