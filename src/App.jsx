import './App.css'
import React from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import { render } from 'react-dom'

function App() {
  const [showMenu, setShowMenu] = React.useState(true)

  function renderQuiz() {
    setShowMenu(prevShowMenu => !prevShowMenu)
  }

  return (
    <div className="App">
      {showMenu && <Menu 
        showMenu={() => renderQuiz()}
      />}
      {!showMenu && <Quiz />}
    </div>
  )
}

export default App
