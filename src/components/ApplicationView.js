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
import RecList from "./recommendation/RecList";
import MovieForm from "./movies/MovieForm";
import FollowerMovieList from "./movies/FollowerMovieList";
import { MessagesProvider } from "./messages/MessagesProvider";
import MessagesList from "./messages/MessagesList";
import MessageForm from "./messages/MessageForm";






// renders the different page views utilising route


export default (props) => {
    return (
        <>


            <MessagesProvider>
                <UserProvider>
                    <MoviesProvider>
                        <UserMoviesProvider>
                            <FollowersProvider>
                                <RecsProvider>
                                    <Route exact path="/" render={
                                        props => <MoviesList {...props} />
                                    } />
                                    
                                    <Route path="/movies/:movieId(\d+)" render={
                                        props => <MovieDetails {...props} />
                                    } />

                                    <Route path="/profile/:userId(\d+)" render={
                                        props => <FollowerList {...props} />
                                    } />

                                    <Route exact path="/profile/:userId(\d+)" render={
                                        props => <UserMoviesList {...props} />
                                    } />

                                    <Route exact path="/profile/follower/:followerId(\d+)" render={
                                        props => <FollowerMovieList {...props} />
                                    } />

                                    {/* <Route exact path="/profile/:userId(\d+)" render={
                                    props => <RecList {...props} />
                                } /> */}

                                    <Route exact path="/movies/create" render={
                                        props => <MovieForm {...props} />
                                    } />

                                    <Route path="/movies/edit/:moviesId(\d+)" render={
                                        props => <MovieForm {...props} />
                                    } />

                                    <Route path="/profile" render={
                                        props => <MessagesList {...props} />
                                    } />

                                    <Route path="/messages/edit/:messagesId(\d+)" render={
                                        props => <MessageForm {...props} />
                                    } />
                                </RecsProvider>
                            </FollowersProvider>
                        </UserMoviesProvider>
                    </MoviesProvider>
                </UserProvider>
            </MessagesProvider>



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
