import * as React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ['React.js', 'Python', 'Node.js', 'Vue.js'],
        loop: true,
        delaySpeed: 2000
    })

    return <>
        <span className="writer-text">
            Developer in {text}<Cursor cursorStyle="<" cursorColor='red'/>
        </span>
        
    </>;
}

export { TypeWriter };