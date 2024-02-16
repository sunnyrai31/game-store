
import React, { useEffect, useState } from 'react';
import './App.css'
import HeaderComponent from './components/Header'
import LeftPanelComponent from './components/LeftPanelComponent';
import { fetchGenres, fetchAllTitle } from './services/ProductService';
import TitlePanelComponent from './components/TitlePannelComponent';
import UseStateComponent from './hooks-example/UseState';
import UseEffectComponent from './hooks-example/UseEffect';
import UseReducerComponent from './hooks-example/UseReducer';
import UseContextComponet from './hooks-example/UseContext';
import MyContext from './hooks-example/context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  //context api default value
  const defaultContextInfo2 = {
    author: 'Sunny Rai 2',
    address: 'Bangalore 2',
    ph: '*****59'
  }
  return (
    <>
      <Router>
        <div className="sticky-header">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="d-flex text-white full-height">

          <div className="left-panel">
            <LeftPanelComponent genres={genres}></LeftPanelComponent>
          </div>
          <div className="vertical-animation vertical-light-animation">
          </div>

          <div className="right-panel">
            <Routes>
              <Route path='/'
                element={<TitlePanelComponent MovieTitleList={MovieTitle}></TitlePanelComponent>}
              >
              </Route>
              {/* hooks examples  */}
              {/* <UseStateComponent></UseStateComponent> */}

              <Route path='/useState'
                element={<UseStateComponent></UseStateComponent>}
              ></Route>
              {/* <UseEffectComponent></UseEffectComponent> */}

              <Route path='/useEffect'
                element={<UseEffectComponent></UseEffectComponent>}
              ></Route>
              {/* <UseReducerComponent></UseReducerComponent> */}
              <Route path='/useReducer'
                element={<UseReducerComponent ></UseReducerComponent>}
              ></Route>
              {/* Question - Mycontext has some default value, then why again need to pass it from here ? */}
              <Route path='/useContextApi'
                element={
                  <MyContext.Provider value={defaultContextInfo2}>
                    <UseContextComponet></UseContextComponet>
                  </MyContext.Provider>}
              ></Route>
            </Routes>
          </div>
        </div>

      </Router>

    </>
  )
}

export default App
