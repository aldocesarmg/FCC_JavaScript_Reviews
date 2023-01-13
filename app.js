import {reviews} from './reviews-data.js';

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
})

function showPerson(numberOfPerson) {
    const item = reviews[numberOfPerson];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) currentItem = 0;
    showPerson(currentItem);
})

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) currentItem = reviews.length - 1;
    showPerson(currentItem);
})

randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length - 1);
    showPerson(currentItem);
})