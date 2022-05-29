import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const App = () => {
    const items = [
        {
            title: 'What is React 1?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'What is React 2?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'What is React 3?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'What is React 4?',
            content: 'React is a front end javascript framework'
        }
    ];

    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'The shade of Blue',
            value: 'blue'
        },
    ];
    const [selected,setSelected] = useState(options[0]);
    return (
        <div>
            {/* <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            /> */}
            <Translate />
        </div>
    );
}

export default App;
