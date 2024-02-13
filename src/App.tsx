
import { useState } from 'react';
import './App.css'
import Header from './components/header'
import { fetchGenres } from './services/productService'

function App() {
  const [genres, setGenres] = useState([]);
  const handleFetchDataClick = async () => {
    try {
      const data = await fetchGenres();
      if (data.results?.length) {
        console.log(data.results);
        setGenres(data.results);
      }

    } catch (error) {
      console.error('Error fetching genres:', error);
      // Handle the error (e.g., display an error message)
    }
  }
  const prepareGenres = () => {
    return genres.map((item, index) => {
      return <li className='list-group-item' key={index}>{item}</li>
    })
  }
  return (
    <>
      <Header></Header>
      <div className="d-flex text-white full-height">
        <div className="left-panel">
          {/* Content for the left panel */}
          <p>
            Left Panel (15%)

          </p>
          <button onClick={handleFetchDataClick} className='btn btn-primary'>fetch data</button>
          <span>
            <ul>
              {prepareGenres()}
            </ul>

          </span>
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
