
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header'
import LeftPanelComponent from './components/leftPanelComponent';
import { fetchGenres, fetchAllTitle } from './services/productService';
import TitlePanelComponent from './components/TitlePannelComponent';

function App() {
  const [genres, setGenres] = useState([]);
  const [MovieTitle, setMovieTitle] = useState([]);
  useEffect(() => {
    const fetchGenresData = async () => {
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
    };
    const fetchTitleData = async () => {
      try {
        const titleData = await fetchAllTitle();
        console.log(titleData, 'titleData')
        if (titleData.results?.length) {
          console.log(titleData.results);
          setMovieTitle(titleData.results);
        }
      } catch (error) {
        console.error('Error fetching Title:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchGenresData();
    fetchTitleData();// Call the function when the component mounts
    // If you need to clean up (e.g., canceling a request) when the component unmounts,
    // you can return a cleanup function from useEffect
    return () => {
      // Cleanup logic here
    };
  }, [fetchGenres, fetchAllTitle]); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <>
      <Header></Header>
      <div className="d-flex text-white full-height">
        <div className="left-panel">
          <LeftPanelComponent genres={genres}></LeftPanelComponent>
        </div>
        <div className="vertical-animation vertical-light-animation">
        </div>
        <div className="right-panel">
          <TitlePanelComponent MovieTitleList={MovieTitle}></TitlePanelComponent>
        </div>
      </div>
    </>
  )
}

export default App
