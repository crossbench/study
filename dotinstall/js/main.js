'use strict';

// コメント
// console.log('hello world from main.js');

// console.log("it'me");
// console.log('it\'me');

// console.log('it\n me');

// console.log('hello' + 'world');

// console.log(10 + 3)
// console.log(10 - 3)
// console.log(10 * 3)
// console.log(10 / 3)
// console.log(10 % 3) //1
// console.log(10 ** 3) //1000

// console.log((2 + 10) * 3) //1

//定数

// console.log(150 * 140)
// console.log(150 * 160)


//定数 const
//変数 let var古い

// let price = 150;
// console.log(price *  140)
// console.log(price * 160)

// price = 170;
// console.log(price * 140)
// console.log(price * 160)

// let price = 500;

// // price = price + 100;
// price += 100

// price *= 2

// // price +=;
// price++


// console.log(price);


//型のチェック
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); //objectになるバグ 有名なバグ


// console.log('5' * 3);
// console.log('5' - 3);

// console.log('5' + 3); //+演算子は文字列の+になる
// console.log(parseInt('5',10) + 3); 



// const score = 40;

// if(score >= 80){
//     console.log('great!');
// }else if(score >= 60){
//     console.log('goog!');
// }else{
//     console.log('おっ、、おう');
// }


//条件付き演算子
// const score = 80;

// score >= 80 ? console.log('Great!') : console.log('おっ、、おう');

//短くできるが読みにくくなるというデメリット

// const score = 60;
// const name = 'taguchi';

// if(score >= 50){
//     if(name === 'taguchi'){
//         console.log('最高かよ');
//     }
// }

// && なおかつ (AND)
// || もしくわ (OR)
// ! 〜ではない (NOT)

// if(score >= 50 && name === 'taguchi'){
//     console.log('論理演算子でスマートに最高かよ');
// }

// const signal = 'yellow';

// switch (signal){
//     case 'red' :
//         console.log('stop');
//         break
//     case 'green' :
//         console.log('go');
//         break
//     case 'yellow' :
//         console.log('気をつけて');
//         break
// }


// for (let i = 1; i <= 10; i++){
//     // console.log('hello');
//     // console.log('hello' + i);

//     //テンプレートリテラル
//     console.log(`hello ${i}`);
//     //Shift + @マークでバッククォート
// }

let hp = 100;

while (hp > 0){
    console.log(`${hp} HP left!`)
    hp -= 15;
}

