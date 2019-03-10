import * as React from 'react';
import { observer } from 'mobx-react';
import { Text } from './Text';

@observer
export class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    witaj swiecie
                </div>
                <Text label="label1" />
                <Text label="label2" />
                <Text label="label3" />
            </div>
        );
    }
}
