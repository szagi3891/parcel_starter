import * as React from 'react';
import { observer } from 'mobx-react';
import { Text } from './Text';

@observer
export class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    witaj fantastyczny swiecie
                </div>
                <Text label="label1" />
                <Text label="label2" />
                <Text label="label3" />
                <Text label="label4" />
                <div>adassadsa</div>
                <div>sdasdas</div>
            </div>
        );
    }
}
