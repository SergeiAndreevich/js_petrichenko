/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]};

    const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo-bg'),
    genre = document.querySelector('.promo-genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    addCheckbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        //do
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = addCheckbox.checked;
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        console.log(movieDB);
    });

    const advRemove = (arr) => {
        arr.forEach(item => {
            item.remove();
        });

    };
    advRemove(adv);

            movieDB.movies.sort();


    function createMovieList (films, parent){
        parent.innerHTML = '';

        films.forEach((film, i) => {
        parent.innerHTML +=
     ` <li class="promo__interactive-item">${i+1}: ${movieDB.movies[i]}
           <div class="delete"></div>
       </li> 
     `;
        });
    };

    createMovieList(movieDB.movies, movieList);


    const makeChanges = () => {
        genre.textContent = 'Драма'; 
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();
    function sortArray (arr) {
        arr.sort(); 
    };
    sortArr(movieDB.movies);
});   


 





















// //////
// const addsRemover = document.querySelectorAll('.promo__adv img');
// adds.forEach(item => {
//     item.remove();    
// });
// //////


// //////
// const genre = document.querySelector('.promo__genre');
// const newGenre = document.createElement('genre__drama');
// newGenre.innerHTML = '<p>Драма</p>';
// newGenre.style.fontSize = '16px';
// newGenre.style.color = 'white';
// genre.replaceWith(newGenre);
// //////

// //////
// const oldBg = document.querySelector('.promo__bg');
// //oldBg.style.backgroundColor = 'black';
// oldBg.style.backgroundImage = 'url(img/bg.jpg)'; //путь задается относительно index.html
// //////

// // //////
// // const del = document.querySelectorAll('.delete');
// // del.forEach(item => {
// //     item.remove();
// // });
// // //////

// const filmItem = document.querySelectorAll('.promo__interactive-list li');
// movieDB.movies.sort();
// // let i = 0;
// // filmItem.forEach(item => {
// //     item.replaceWith(`${i+1}: ${movieDB.movies[i]}`);
// //     i++;
// // });



// const btn = document.querySelector('.confirm');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const add = document.querySelector('.adding__input').value;
//     if (add.length > 21) {
//         add += '...';
//     }
//     movieDB.movies.push(add);
// });




// // conso;e.log(movies.innerHTML) позволяет получить верстку что там содержится;
// const filmList = document.querySelector('.promo__interactive-list');
// filmList.innerHTML = '';
// movieDB.movies.forEach((item, i) =>{
//     filmList.innerHTML +=
//     ` <li class="promo__interactive-item">${i+1}: ${movieDB.movies[i]}
//           <div class="delete"></div>
//       </li> 
//     `;
// });

// });


