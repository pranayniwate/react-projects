import './App.css';
import { useState, useEffect } from 'react';

function Color() {
    const [color, setColor] = useState('');

    const generateColor = () => {
        //Dark Color

        const dark = [0, 1, 2, 3, 4]
        var bgColor = '#'

        for (var i = 0; i < 6; i++) {
            bgColor += dark[Math.floor(Math.random() * dark.length)];
        }

        document.body.style = `background: ${bgColor} ;`;


        // Light Color
        var letters = ['B', 'C', 'D', 'E', 'F'];
        var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        var color = '#';
        color += letters[Math.floor(Math.random() * letters.length)];


        for (var i = 0; i < 5; i++) {
            color += nums[Math.floor(Math.random() * nums.length)];
        }

        setColor(color);

    }

    useEffect(() => {
        return generateColor()
    }, [])


    return (
        <main className="dark-color">
            <h1 className='heading' style={{ color: color }}>Color Generator</h1>
            <div className="light-color" style={{ backgroundColor: color }}>
                <button className="btn" onClick={generateColor}>Click Me</button>
            </div>
        </main>
    );
}

export default Color;
