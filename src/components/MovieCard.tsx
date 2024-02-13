import { Fragment } from "react";

function MovieCardComponent({ MovieDetails }: { MovieDetails: any }) {
    const prepareMovieCardTemplate = () => {
        const { _id, primaryImage, titleType, titleText, releaseYear } = MovieDetails;
        const imageSize = {
            width: "20rem",
        };
        return (
            <div
                key={_id}
                className="card col-md-4 m-3 firework-card"
                style={imageSize}
            >
                <img src={primaryImage?.url} className="rounded-sqaure" alt="#" />
                <div className="card-body">
                    <h5 className="card-title">{titleText?.text}</h5>
                    <p className="card-text">{releaseYear?.year}</p>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            {prepareMovieCardTemplate()}
        </Fragment>
    )
}
export default MovieCardComponent;
