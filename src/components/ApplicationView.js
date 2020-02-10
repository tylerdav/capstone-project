import React from "react";
import { Route } from "react-router-dom";
import { FollowersProvider } from "./user/FollowerProvider";
import { RecsProvider } from "./recommendation/RecProvider";
import { UserProvider } from "./user/UserProvider";
import FollowerList from "./user/FollowerList";
import { MoviesProvider } from "./movies/MovieProvider";
import MoviesList from "./movies/MoviesList";
// import { UserMoviesProvider } from "./userMovies/UserMovieProvider";
// import UserMoviesList from "./userMovies/UserMoviesList";
import GenresList from "./genres/GenresList";
import { GenresProvider } from "./genres/GenresProvider";
import MovieDetails from "./movies/MovieDetails";






// renders the different page views utilising route


export default (props) => {
    return (
        <>
            <UserProvider>
                <FollowersProvider>
                    <Route path="/profile" render={
                        props => <FollowerList {...props} />
                    } />
                </FollowersProvider>
            </UserProvider>

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

            {/* <UserMoviesProvider>
                <RecsProvider>
                    <UserProvider>
                        <FollowersProvider>
                            <Route exact path="/profile" render={
                                props => <UserMoviesList {...props} />
                            } />
                        </FollowersProvider>
                    </UserProvider>
                </RecsProvider>
            </UserMoviesProvider> */}

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
