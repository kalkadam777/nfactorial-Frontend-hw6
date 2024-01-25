// 1. Скрыть элемент по нажатию кнопки
const btn = document.querySelector('button');
const block = document.getElementById('text');
btn.addEventListener('click',()=>{
    block.remove();
})

// 2. Какой обработчик запустится?
const button = document.getElementById('s');
button.addEventListener("click", () => alert("1")); // первый 
button.removeEventListener("click", () => alert("1")); // удалился
button.onclick = () => alert(2); // второй 

// 3. Добавить кнопку закрытия

let getDiv = document.getElementById('list');
for(let i = 0; i < 3; i++){
    let button_x = document.createElement('button');
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    h4.textContent = 'Horse';
    p.textContent = 'The horse (Equus caballus)[2][3] is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, close to Eohippus, into the large, single-toed animal of today.';
    button_x.textContent = '[x]'
    button_x.style.color = 'red';
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(button_x);
    getDiv.appendChild(div)
    button_x.addEventListener('click',()=>{
        div.remove()
    })
}

