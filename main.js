'use strict';

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const n = Math.floor(Math.random()*3);
        result.textContent = n;
    });
}