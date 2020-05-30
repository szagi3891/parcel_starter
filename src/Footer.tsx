import * as React from 'react';
import { observer } from "mobx-react-lite";
import styled from '@emotion/styled';

const Wrapper = styled('div')`
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: green;
`;

export const Footer = observer(() => {

    return (
        <Wrapper>
            <div>To jest jakaś stopka</div>
            <div>adres kontaktowy bla bla bla</div>
        </Wrapper>
    );
});