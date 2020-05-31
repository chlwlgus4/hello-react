import React, {Fragment, useState} from "react";

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const namesList = names.map((name, index) => <li key={index}>{name}</li>);

    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id  : nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => {
            console.log(name.id);
            return name.id !== id
        });
        console.log(nextNames)
        setNames(nextNames);
    };

    const namesList = names.map(name => {
            return <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>;
        }
    );
    return (
        <Fragment>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </Fragment>);
}

export default IterationSample;