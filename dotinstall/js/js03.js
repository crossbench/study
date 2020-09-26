'use strict'

// {
//     function update(){
//         // document.querySelector('h1').textContent = 'Changed';
//         //document.querySelector('#target').textContent = 'Changed';
//         // document.getElementById('target').textContent = 'Changed';
//     }

//     setTimeout(update,1000);
// }


//複数の要素を取得してみよう
// {
//     function update(){
//         // document.querySelector('h1').textContent = 'Changed';

//         //１つしか取得できない。
//         //document.querySelector('p').textContent = 'Changed!';

//         //2番目がかわる
//         // document.querySelectorAll('p')[1].textContent = 'Changed!';

//         //すべて
//         document.querySelectorAll('p').forEach((p, index) => {
//             p.textContent = `${index}番目のpです`;
//         });
        
//     }

//     setTimeout(update,1000);
// }

// //要素の取得方法を理解しよう
// {
//     <ul>
//         <li>item</li>
//         <li>item</li>
//         <li>item</li>
//     </ul>

//     ul.childNodes
//     改行なども含むすべての子要素

//     ul.children
//     要素だけの子要素 liなど

//     ul.firstChild
//     ul.lastChild

//     ul.firstElementChild
//     ul.lastElementChild
//     要素のみ
// }

// addEventListener()を使ってみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         document.getElementById('target').textContent = 'Changed!';   
//     });
// }

// 要素の属性を操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const targetNode = document.getElementById('target');

//         targetNode.textContent = 'Changed!';   
//         targetNode.title = 'This is title!';   
//         targetNode.style.color = 'red';   
//         targetNode.style.backgroundColor = 'skyblue';   
//     });
// }

// classNameを操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const targetNode = document.getElementById('target');

//         targetNode.className = 'my-color';
//         //classNameはclassを上書きになる。

//         targetNode.className = 'my-border my-color';
//         

//     });
// }

// classListを使ってみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const targetNode = document.getElementById('target');

//         //targetNode.classList.add = 'my-color';
//         //classが保持される

//         // if (targetNode.classList.contains('my-color') === true) {
//         //     targetNode.classList.remove('my-color');
//         // } else {
//         //     targetNode.classList.add = ('my-color');
//         // }
//         targetNode.classList.toggle('may-color');
//     });
// }

// カスタムデータ属性を扱ってみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const targetNode = document.getElementById('target');
//         // targetNode.textContent = 'Dotinstall';
//         targetNode.textContent = targetNode.dataset.translation;
//     });
// }

// 要素を追加してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const item2 = document.createElement('li');
//         item2.textContent = 'item 2';
//         // const ulNode = document.querySelector('ul');
//         const ul = document.querySelector('ul');
//         ul.appendChild(item2);
//     });
// }

// 要素の複製､ 挿入をしてみよう
//真ん中に要素をコピーして挿入
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const item0 = document.querySelectorAll('li')[0];
//         const copy = item0.cloneNode(true);
//         //中身をコピーしない場合はfalse

//         const ul = document.querySelector('ul');

//         const item2 = document.querySelectorAll('li')[2];
//         ul.insertBefore(copy,item2);
//     });
// }

// 要素の削除をしてみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const item1 = document.querySelectorAll('li')[1];
        
//         //item1.remove();
//         //対応していないブラウザーがある

//         //親Node.removeChild(削除するNode)
//         document.querySelector('ul').removeChild(item1);
//     });
// }

// input要素を操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const li = document.createElement('li');
//         const text = document.querySelector('input');
//         li.textContent = text.value;
//         document.querySelector('ul').appendChild(li);

//         text.value = '';
//         //要素を空にする。

//         text.focus();
//         //その後フォーカス
//     });
// }

// セレクトボックスを操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const li = document.createElement('li');
//         const color = document.querySelector('select');
//         li.textContent = `${color.value} - ${color.selectedIndex}`;
//         document.querySelector('ul').appendChild(li);
//     });
// }

// ラジオボタンを操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const colors = document.querySelectorAll('input');
//         let selectedColor;

//         colors.forEach(color => {
//             if(color.checked === true){
//                 selectedColor = color.value;
//             }
//         });
//         const li = document.createElement('li');
//         li.textContent = selectedColor;
//         document.querySelector('ul').appendChild(li);
//     });

// }

// チェックボックスを操作してみよう
// {
//     document.querySelector('button').addEventListener('click',() => {
//         const colors = document.querySelectorAll('input');
//         const selectedColors = [];
        
//         colors.forEach(color => {
//             if (color.checked === true){
//                 selectedColors.push(color.value);
//             }
//         })
//         const li = document.createElement('li');
//         li.textContent = selectedColors.join(',');
//         document.querySelector('ul').appendChild(li);

//     });
// }

// いろいろなイベントを見てみよう
// {
//     document.querySelector('button').addEventListener('dblclick',() => {
//         console.log('double chlik');
//     });

//     document.addEventListener('mousemove',() => {
//         console.log('mouse move');
//     });

// }

// イベントオブジェクトを扱ってみよう
// {
//     document.querySelector('button').addEventListener('dblclick',() => {
//         console.log('double chlik');
//     });

//     document.addEventListener('mousemove', e => {
//         //console.log('mouse move');
//         console.log(e.clientX, e.clientY);
//     });

//     document.addEventListener('keydown', e => {
//         console.log(e.key);
//     });

// }

// フォームで使われるイベントを見てみよう
// {
//     const text = document.querySelector('textarea');

//     // text.addEventListener('focus', () =>{
//     //     console.log('focus');
//     // });
//     // text.addEventListener('blur', () =>{
//     //     console.log('blur');
//     // });

//     text.addEventListener('input', () =>{
//         //console.log('input');
//         console.log(text.value.length);
//     });
//     text.addEventListener('change', () =>{
//         console.log('change');
//     });
// }

// フォームを送信してみよう
// {
//     document.querySelector('form').addEventListener('submit', e =>{
//         e.preventDefault();
//         //これを入れるとページ遷移しない

//         console.log('submit');
//         //submitするとページ遷移されるのでリロードになる
//     });
// }

// イベントの伝播を理解しよう
{
    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'li'){
            e.target.classList.toggle('done');
            console.log('done');
        }
    });
}

