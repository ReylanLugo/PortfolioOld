import * as React from 'react';
import { Cursor } from 'react-simple-typewriter';
import './styles.css';


type Props = {
    text: string;
}

const ConsoleTitle: React.FC<Props> = ({ text }) => {
    return (
        <h1 className="title">
            <Cursor cursorColor="#0d6efd" cursorStyle=">" />
            {text}
        </h1>
    );
}

export { ConsoleTitle };