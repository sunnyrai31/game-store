import React from "react";
import MovieCardComponent from "./MovieCard";

function TitlePanelComponent({ MovieTitleList }: { MovieTitleList: any[] }) {
    const prepareTitleCardTemplate = () => {
        return MovieTitleList.map((MovieDetails, index) => {
            console.log(MovieDetails);
            return (
                MovieDetails &&
                <MovieCardComponent key={index} MovieDetails={MovieDetails}></MovieCardComponent>
            )
        })
    }
    return (
        <div className="d-flex" style={{ flexFlow: "wrap" }}>
            {prepareTitleCardTemplate()}
        </div>
    )
}
export default TitlePanelComponent;
