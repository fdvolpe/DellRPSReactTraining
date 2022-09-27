import React, { useState } from "react";

export default function Loop(props) {

    let [count, setCount] = useState(0)
    var people = [{ id: 1, name: "Eena" }, { id: 2, name: "Meena" }, { id: 3, name: "Deeka" }];
    const [list, setList] = useState(people);

    function handleClick() {
        setCount(10);
    }

    function handleEnter(e) {
        if (e.key == 'Enter') {
            const newList = list.concat({ id: list.length, name: e.target.value });
            setList(newList);
        }
    }

    return (
        <>
            <button onClick={() => handleClick()}>Click Me {count}</button>
            <input type='text' onKeyUp={(e) => handleEnter(e)} />
            <hr />
            <ol>
                {
                    list.map(function (person) {
                        return <li key={person.id}>{person.name}</li>

                    })
                }
            </ol>
        </>
    )
}