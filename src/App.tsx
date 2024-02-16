
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header'
import LeftPanelComponent from './components/leftPanelComponent';
import { fetchGenres, fetchAllTitle } from './services/productService';
import TitlePanelComponent from './components/TitlePannelComponent';
import UseStateComponent from './hooks-example/UseState';
import UseEffectComponent from './hooks-example/UseEffect';
import UseReducerComponent from './hooks-example/UseReducer';
import UseContextComponet from './hooks-example/UseContext';
import MyContext from './hooks-example/context/MyContext';

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

  const defaultContextInfo2 = {
    author: 'Sunny Rai 2',
    address: 'Bangalore 2',
    ph: '*****59'
  }
  return (
    <>
      <div className="sticky-header">
        <Header></Header>
      </div>
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
      {/* hooks examples  */}
      {/* <UseStateComponent></UseStateComponent> */}
      {/* <UseEffectComponent></UseEffectComponent> */}
      {/* <UseReducerComponent></UseReducerComponent> */}

      {/* Question - Mycontext has some default value, then why again need to pass it from here ? */}
      {/* <MyContext.Provider value={defaultContextInfo2}>
        <UseContextComponet></UseContextComponet>
      </MyContext.Provider> */}

    </>
  )
}

export default App
