import React from "react"
import Generator from "./Generator";

export default function App() {

  const [state, setState] = React.useState(false)
  const [theme, setTheme] = React.useState(false)

  function toggle() {
    setState(prevState => !prevState)
  }

  function themeToggle() {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <div style={theme ? { backgroundColor: "#1F2937" } : { backgroundColor: "#ECFDF5" }} className="mainDiv">
      <main>
        <button style={state ? { display: "none" } : { display: "block" }} onClick={themeToggle}
          className="themeButton">{theme ? "Light" : "Dark"} Mode</button>
        <h1 style={theme ? { color: "white" } : { color: "#2B283A" }}>Generate a <span>random password</span></h1>
        <p style={theme ? { color: "white" } : { color: "#6B7280" }}>Never use an insecure password again.</p>
        <button style={state ? { display: "none" } : { display: "block" }} onClick={toggle} className="passwordButton">Generate passwords</button>
        {state && <Generator toggle={toggle} />}
      </main>
    </div>
  )
}