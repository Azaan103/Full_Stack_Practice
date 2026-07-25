let addbtn = document.querySelector('#addBtn')
let findbtn = document.querySelector('#findBtn')
let watchedbtn = document.querySelector('#watchedBtn')
let unwatchedbtn = document.querySelector('#unwatchedBtn')
let showallbtn = document.querySelector('#showAllBtn')

let moviename = document.querySelector('#movieTitle')
let moviegenre = document.querySelector('#movieGenre')
let movierating = document.querySelector('#movieRating')
let moviestatus = document.querySelector('#movieStatus')
let movietable = document.querySelector('#movieTable')

let ID = 1;

function idgenerator() {
    return ID++;
}

const movies = [
    {
        ID: idgenerator(),
        Title: "Jarhead",
        Genre: "War",
        Rating: 7.8,
        Status: "Watched"
    },
    {
        ID: idgenerator(),
        Title: "Interstellar",
        Genre: "Sci-Fi",
        Rating: 9.5,
        Status: "Unwatched"
    }
];

display();


// ---------------- DISPLAY ALL MOVIES ----------------

function display() {

    movietable.innerHTML = "";

    movies.forEach(function (movie) {

        movietable.innerHTML += `
        <tr>
            <td>${movie.ID}</td>
            <td>${movie.Title}</td>
            <td>${movie.Genre}</td>
            <td>${movie.Rating}</td>
            <td>${movie.Status}</td>
        </tr>
        `;

    });

}


// ---------------- ADD MOVIE ----------------

addbtn.addEventListener('click', function () {

    let mov_name = moviename.value;
    let mov_genre = moviegenre.value;
    let mov_rating = movierating.value;
    let mov_status = moviestatus.value;

    let movie_data = {

        ID: idgenerator(),
        Title: mov_name,
        Genre: mov_genre,
        Rating: mov_rating,
        Status: mov_status

    };

    movies.push(movie_data);

    display();

});


// ---------------- FIND MOVIE ----------------

findbtn.addEventListener('click', function () {

    let mov_name = moviename.value;

    let foundMovie = movies.find(function (movie) {

        return movie.Title === mov_name;

    });

    if (foundMovie) {

        movietable.innerHTML = "";

        movietable.innerHTML += `
        <tr>
            <td>${foundMovie.ID}</td>
            <td>${foundMovie.Title}</td>
            <td>${foundMovie.Genre}</td>
            <td>${foundMovie.Rating}</td>
            <td>${foundMovie.Status}</td>
        </tr>
        `;

    }

    else {

        alert("Movie doesn't exist");

    }

});


// ---------------- SHOW WATCHED ----------------

watchedbtn.addEventListener('click', function () {

    let watchedMovies = movies.filter(function (movie) {

        return movie.Status === "Watched";

    });

    movietable.innerHTML = "";

    watchedMovies.forEach(function (movie) {

        movietable.innerHTML += `
        <tr>
            <td>${movie.ID}</td>
            <td>${movie.Title}</td>
            <td>${movie.Genre}</td>
            <td>${movie.Rating}</td>
            <td>${movie.Status}</td>
        </tr>
        `;

    });

});


// ---------------- SHOW UNWATCHED ----------------

unwatchedbtn.addEventListener('click', function () {

    let unwatchedMovies = movies.filter(function (movie) {

        return movie.Status === "Unwatched";

    });

    movietable.innerHTML = "";

    unwatchedMovies.forEach(function (movie) {

        movietable.innerHTML += `
        <tr>
            <td>${movie.ID}</td>
            <td>${movie.Title}</td>
            <td>${movie.Genre}</td>
            <td>${movie.Rating}</td>
            <td>${movie.Status}</td>
        </tr>
        `;

    });

});


// ---------------- SHOW ALL ----------------

showallbtn.addEventListener('click', function () {

    display();

});