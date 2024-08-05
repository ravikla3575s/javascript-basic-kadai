const childh2A =document.getElementById('text');
const childh2B =document.getElementById('text-after');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    childh2A.style.display = 'none';
    childh2B.style.display = 'inline-block';
});
