import React from "react";
import { Route } from "react-router-dom";
import { MoviesProvider } from "./movies/MovieProvider";
import { FollowersProvider } from "./user/FollowerProvider";
import { UserProvider } from "./user/UserProvider";
import { RecsProvider } from "./recommendation/RecProvider";
// import { GenresProvider } from "./genres/GenresProvider";
import MovieDetails from "./movies/MovieDetails";
import FollowerList from "./user/FollowerList";
import MoviesList from "./movies/MoviesList";
// import GenresList from "./genres/GenresList";
import UserMoviesList from "./movies/UserMoviesList";
import { UserMoviesProvider } from "./movies/UserMovieProvider";
import "./ApplicationView.css"






// renders the different page views utilising route


export default (props) => {
    return (
        <>

            <MoviesProvider>
                <UserProvider>
                    <Route exact path="/" render={
                        props => <MoviesList {...props} />
                    } />
                    <Route path="/movies/:movieId(\d+)" render={
                        props => <MovieDetails {...props} />
                    } />
                </UserProvider>
            </MoviesProvider>

                        <UserProvider>
            <UserMoviesProvider>
                <MoviesProvider>
                    <RecsProvider>
                            <FollowersProvider>
                                <Route path="/profile" render={
                                    props => <FollowerList {...props} />
                                } />
                                <Route exact path="/profile" render={
                                    props => <UserMoviesList {...props} />
                                } />
                            </FollowersProvider>
                    </RecsProvider>
                </MoviesProvider>
            </UserMoviesProvider>
                        </UserProvider>
            


            
            {/*             
            <GenresProvider>
                <Route path="/" render={
                    props => <GenresList {...props} />
                } />
            </GenresProvider> */}




            {/* <MovieProvider>
                
            </MovieProvider> */}

        </>
    )
}
