/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//////
const adds = document.querySelector('.promo__adv');
adds.remove();
//////


//////
const genre = document.querySelector('.promo__genre');
const newGenre = document.createElement('genre__drama');
newGenre.innerHTML = '<p>Драма</p>';
newGenre.style.fontSize = '24px';
newGenre.style.color = 'white';
genre.replaceWith(newGenre);
//////

//////
const oldBg = document.querySelector('.promo__bg');
//oldBg.style.backgroundColor = 'black';
oldBg.style.backgroundImage = 'url(../img/bg.jpg)';
//////

//////
const del = document.querySelectorAll('.delete');
del.forEach(item => {
    item.remove();
});
//////

const filmItem = document.querySelectorAll('.promo__interactive-item');
filmItem.sort();

filmItem.forEach(item => {
    item.insertHTML('afterbegin', '1');
});