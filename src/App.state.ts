import { observable, action } from 'mobx';

export class State {
    @observable ilosc: number = 3;

    @action inc = () => {
        this.ilosc++;
    }
}