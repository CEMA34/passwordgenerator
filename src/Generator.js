import React from "react";

export default function Generator(props) {

    const characters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#",
        "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];

    let passwordOne = ""
    let passwordTwo = ""

    for (let i = 0; i < 15; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
    }

    for (let i = 0; i < 15; i++) {
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }

    return (
        <div className="generatorDiv">
            <button onClick={props.toggle} className="passwordButton">Try Again!</button>
            <div className="passwordsDiv">
                <span className="firstPassword">{passwordOne}</span>
                <span className="secondPassword">{passwordTwo}</span>
            </div>
            <div className="copyButtonDiv">
                <button className="passwordButton" onClick={() => navigator.clipboard.writeText(passwordOne)}>Copy</button>
                <button className="passwordButton" onClick={() => navigator.clipboard.writeText(passwordTwo)}>Copy</button>
            </div>
        </div>
    )
}