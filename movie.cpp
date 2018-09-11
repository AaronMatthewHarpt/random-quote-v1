#include "Movie.h"

Movie::Movie(string name, string mpaaRating) {
    movieName = name;
    MPAARating = mpaaRating;
    numberOfTerribleReviews = 0;
    numberOfBadReviews = 0;
    numberOfOkReviews = 0;
    numberOfGoodReviews = 0;
    numberOfGreatReviews = 0;
    rottenTomatoesRating = 0;
}

string Movie::getMovieName() {
    return movieName;
}

void Movie::setMovieName(string name) {
    movieName = name;
}

string Movie::getMPAARating() {
    return MPAARating;
}

void Movie::setMPAARating(string MPAARating) {
    this->MPAARating = MPAARating;
}

int Movie::getRottenTomatoesRating() {
    return rottenTomatoesRating;
}

void Movie::setRottenTomatoesRating(int rottenTomatoRating) {
    this->rottenTomatoesRating = rottenTomatoRating;
}

void Movie::addRating(int rating) {
    if (rating < 6 && rating > 0) {
        if (rating == 1) {
            numberOfTerribleReviews++;
        }
        else if (rating == 2) {
            numberOfBadReviews++;
        }
        else if (rating == 3) {
            numberOfOkReviews++;
        }
        else if (rating == 4) {
            numberOfGoodReviews++;
        }
        else if (rating == 5) {
            numberOfGreatReviews++;
        }

    }
}

int Movie::getAverage() {
    int average = (numberOfTerribleReviews + numberOfBadReviews + numberOfOkReviews + numberOfGoodReviews + numberOfGreatReviews) / 5;
    
    return average;
}

string Movie::tomatometer() {
    if (rottenTomatoesRating < 60) {
        return "Rotten";
    }
    else if (rottenTomatoesRating >= 60) {
        return "Fresh";
    } 
}






