/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

/*
* File:   Movie.h
* Author: aaronharpt
*
* Created on September 10, 2018, 10:12 AM
*/

#ifndef MOVIE_H
#define MOVIE_H

#include <string>
using namespace  std;

class Movie {
public:
	/* default constructor. Used to create movie objects */
	Movie(string name, string mpaaRating);

	/* gets the name of the movie that called the function
	@return movie name */
	string getMovieName();

	/* set the name of the movie to the argument provided
	@post the movie name of the calling object is changed to what was passed to the function */
	void setMovieName(string name);

	/* gets the MPAA rating of the movie that calls the function
	@return the MPAA rating of the calling object */
	string getMPAARating();

	/*
	set the MPAA rating of the object that called it
	@post the MPAA rating of the calling object is changed to what was provided in the argument
	*/
	void setMPAARating(string MPAARating);

	/*
	gets the value of the rotten tomato rating for the object that called it
	@return Returns the tomato rating
	*/
	int getRottenTomatoesRating();

	/*
	Sets the rotten tomato rating
	@post tomato rating is changed
	*/
	void setRottenTomatoesRating(int rottenTomatoRating);

	/*
	checks to make sure the given rating is valid.
	If it is, increments the corresponding reviews variable by one
	@post if rating is valid, correct reviews variable is incremented, otherwise, error saying rating is invalid is given
	*/
	void addRating(int rating);

	/*
	returns the average rating for a movie
	@return return the average rating for a movie
	*/
	int getAverage();

	/*
	checks to see what the rotten tomato rating is and returns a string based on the value of rottenTomatoRating
	@return "Rotten" if rottenTomatoRating is less than sixty, "Fresh" if it is greater than or equal to sixty
	*/
	string tomatometer();

private:
	string movieName;
	string MPAARating;
	int rottenTomatoesRating;
	int numberOfTerribleReviews;
	int numberOfBadReviews;
	int numberOfOkReviews;
	int numberOfGoodReviews;
	int numberOfGreatReviews;

};

#endif /* MOVIE_H */



