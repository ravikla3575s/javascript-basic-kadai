const text =document.getElementById('text');
const btn = document.getElementById('btn');
let clickCount = 0;

btn.addEventListener('click',() => {
    clickCount++;
    if (clickCount % 2 == 0) {
        text.textContent = 'ボタンをクリックしてください';
    } else if(clickCount == 1){
        text.textContent = 'ボタンをクリックしました'
    }else{
        text.textContent = 'ボタンを' + clickCount + '回クリックしました';
}});