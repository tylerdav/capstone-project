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

            <UserMoviesProvider>
                <MoviesProvider>
                    <RecsProvider>
                        <UserProvider>
                            <FollowersProvider>
                                <Route path="/profile" render={
                                    props => <FollowerList {...props} />
                                } />
                                <Route exact path="/profile" render={
                                    props => <UserMoviesList {...props} />
                                } />
                                <Route path="/movies/:movieId(\d+)" render={
                                    props => <MovieDetails {...props} />
                                } />
                            </FollowersProvider>
                        </UserProvider>
                    </RecsProvider>
                </MoviesProvider>
            </UserMoviesProvider>
            


            
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
