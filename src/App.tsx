
import './App.css'
import Header from './components/header'

function App() {
  return (
    <>
      <Header></Header>
      <div className="d-flex text-white full-height">
        <div className="left-panel">
          {/* Content for the left panel */}
          Left Panel (15%)
        </div>
        <div className="vertical-animation vertical-light-animation">
        </div>
        <div className="right-panel">
          {/* Content for the right panel */}
          Right Panel (70%)
        </div>
      </div>
    </>
  )
}

export default App
