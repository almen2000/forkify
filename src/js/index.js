console.log('Hey Alexandr');

import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://crossorigin.me/';
    const key = '8386598a429d3bc3096e36383bec2d8a';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');