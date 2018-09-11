// Aaron Harpt
// Cs250 Programming Project 1

#include <iostream>

#include "Movie.h"

int main() {

	Movie movie("Movie 1", "PG");

	Movie movie2("Movie 2", "R");

	Movie movie3("Movie 3", "E");

	movie.addRating(1);

	movie.addRating(2);

	movie.addRating(3);

	movie.addRating(4);

	movie.addRating(5);

	movie2.addRating(1);

	movie2.addRating(3);

	movie2.addRating(5);

	movie2.addRating(1);

	movie2.addRating(3);

	movie3.addRating(1);

	movie3.addRating(2);

	movie3.addRating(1);

	movie3.addRating(4);

	movie.addRating(2);

	cout << "Name: " << movie.getMovieName() << endl;
	cout << "MPAA Rating: " << movie.getMPAARating() << endl;
	cout << "Rotten Tomatoes Rating: " << movie.getRottenTomatoesRating() << endl;
	cout << "The movie is currently: " << movie.tomatometer() << endl;
	cout << "It's average rating is: " << movie.getAverage() << endl;

	cout << "Name: " << movie2.getMovieName() << endl;
	cout << "MPAA Rating: " << movie2.getMPAARating() << endl;
	cout << "Rotten Tomatoes Rating: " << movie2.getRottenTomatoesRating() << endl;
	cout << "The movie is currently: " << movie.tomatometer() << endl;
	cout << "It's average rating is: " << movie.getAverage() << endl;

	cout << "Name: " << movie3.getMovieName() << endl;
	cout << "MPAA Rating: " << movie3.getMPAARating() << endl;
	cout << "Rotten Tomato Rating: " << movie3.getRottenTomatoesRating() << endl;
	cout << "The movie is currently " << movie3.tomatometer() << endl;
	cout << "It's average rating is: " << movie3.getAverage() << endl;

	system("pause");

	return 0;
}
