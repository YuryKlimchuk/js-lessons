alert("Hellow world!");

const numberOfFilms = +prompt("Сколько фильмов Вы уже посомтрели?", "");

const personalMovieDB = {
    
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("Ваша оценка данного фильма?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("Ваша оценка данного фильма?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);