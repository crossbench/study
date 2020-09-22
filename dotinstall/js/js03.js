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
{
    document.querySelector('button').addEventListener('click',() => {
        const targetNode = document.getElementById('target');

        //targetNode.classList.add = 'my-color';
        //classが保持される

        if (targetNode.classList.contains('my-color') === true) {
            targetNode.classList.remove('my-color');
        } else {
            targetNode.classList.add = ('my-color');
        }
    });
}

