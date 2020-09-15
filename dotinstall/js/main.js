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

// let hp = 100;

// while (hp > 0){
//     console.log(`${hp} HP left!`)
//     hp -= 15;//この処理を忘れると無限ループ
// }


// do whileだとHPが見えてから処理
// let hp = -50;

// do {
//     console.log(`${hp} HP left!`)
//     hp -= 15;//この処理を忘れると無限ループ
// } while (hp > 0)


// for(let i = 1; i <= 10; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }


// for(let i = 1; i <= 10; i++){
//     if(i === 4){
//         break;
//     }
//     console.log(i);
// }

// function関数
// function showAd(){
//     console.log('------------------------');
//     console.log('-----------ad-----------');
//     console.log('------------------------'); 
// }

// showAd();
// console.log('-------テスト---------');
// console.log('-------テスト---------');
// showAd();

//引数を使ってみる

// function showAd(message = 'Ad'){ //仮引数
//     console.log('------------------------');
//     console.log(`-----------${message}-----------`);
//     console.log('------------------------'); 
// }
// showAd('Header Ad'); //実引数
// console.log('Tom is Great!');
// console.log('Tom is Great!');
// showAd('Footer Ad');
// showAd();//初期値がAdに設定


// function sum(a,b,c){
//     // console.log(a + b + c);
//     return a + b + c;
//     console.log('リターンのあとは処理されない');
// }

// // sum(1,2,3);
// // sum(3,4,5);

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);


//関数式
// const sum = function (a,b,c){
//     return a + b + c;
// };

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

//アロー関数
// const sum = (a,b,c) => a + b + c;

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// const double = function(a){
//     return a * 2
// };

//アロー関数にすると
// const double = a => a * 2;
// console.log(double(12));


//スコープ
// const x = 2;

// function f() {
//     const x = 1;
//     console.log(x);
// }

// f();
// console.log(x);

{
    const x = 100;
    console.log(x);    
}





