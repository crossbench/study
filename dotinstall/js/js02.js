'use strict'

//配列
// {
//     // const score1 = 80;
//     // const score2 = 90;
//     // const score3 = 40;

//     const scores = [80,90,40];
//     console.log(scores);
// }


//2番目の配列を選択する
// {
//     const scores = [80,90,40];
//     // console.log(scores[1]);

//     //スコアの上書き
//     scores[2] = 44; 
//     console.log(scores[2]); 

//     // constでの代入は配列ではできる

//     console.log(scores.length);
//     //配列の数を表示する
// }

//forで回す
// {
//     const scores = [80,90,40,50];

//     // console.log(`${scores[0]}`)
//     // console.log(`${scores[1]}`)
//     // console.log(`${scores[2]}`)

//     //ループだと100個でも修正可能
//     // for(let i = 0; i < 3; i++){
//     //     console.log(`${scores[i]}`)
//     // }
    
//     for(let i = 0; i < scores.length; i++){
//         console.log(`Score ${i} ${scores[i]}`)
//     }
    
// }

//push
// {
//     const scores = [80,90,40,50];
//     scores.push(60,50);//後ろに2つ追加
//     scores.shift();//前1つを削除

//     // console.log(`${scores[0]}`)
//     // console.log(`${scores[1]}`)
//     // console.log(`${scores[2]}`)

//     //ループだと100個でも修正可能
//     // for(let i = 0; i < 3; i++){
//     //     console.log(`${scores[i]}`)
//     // }
    
//     for(let i = 0; i < scores.length; i++){
//         console.log(`Score ${i} ${scores[i]}`)
//     }
// }

//////////////////////////////////////////////////////
//配列の途中に挿入、削除
// {
//     const scores = [80,90,40,50];
//     scores.splice(1, 1, 40, 50);

//     for(let i = 0; i < scores.length; i++){
//         console.log(`Score ${i} ${scores[i]}`)
//     }
// }


//////////////////////////////////////////////////////
//スプライト構文
// {
//     const otherScores = [10,20];
//     const scores = [80,90,40,50,...otherScores];

//     console.log(scores);

//     function sum(a, b){
//         console.log(a + b);
//     }

//     sum(...otherScores);
//     //↑sum(10,20)と同じ意味になる

// }

//////////////////////////////////////////////////////
//分割代入
// {
//     const scores = [80,90,40,50];

//     // const [a, b, c, d] = scores;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(d);

//     const [a, b, ...others] = scores;
//     console.log(a);
//     console.log(b);
//     console.log(others);

//     //交換
//     let x = 30;
//     let y = 70;
//     [x,y] = [y,x];
//     console.log(x);
//     console.log(y);
// }

//////////////////////////////////////////////////////
//forEach
// {
//     const scores = [80,90,40,50];
//     scores.forEach((score) => {
//         console.log(`score ${score}`);
//     });
//     //score名前は好きにつけられる

//     scores.forEach((score, index) => {
//         console.log(`score ${index} ${score}`);
//     });
//     //複数の引数の場合
// }

//////////////////////////////////////////////////////
//map
// {
//     const prices = [180,190,240];

//     // const updatedPrices = prices.map((price) => {
//     //     return price + 20;
//     // });

//     const updatedPrices = prices.map(price => price + 20);
//     console.log(updatedPrices);
// }

//////////////////////////////////////////////////////
//filter
//条件を合うものだけ抽出する。
// {
//     const numbers = [1,4,7,8,10];

//     // const evenNumers = numbers.filter(number => {
//     //     if(number % 2 === 0){
//     //         return true;
//     //     } else{
//     //         return false;
//     //     }
//     // });

//     //省略型
//     const evenNumers = numbers.filter(number => number % 2 === 0);

//     console.log(evenNumers);
// }

//////////////////////////////////////////////////////
// プロパティの取得
// プロパティの変更
// プロパティの削除
// {
//     // const point = [100, 180]

//     // const point = {x: 100, y: 180};

//     const point = {
//         x: 100,
//         y: 180
//     };

//     //point.x = 120;
//     point['x'] = 120;

//     // console.log(point.x);
//     // console.log(point['y']);

//     point.z = 90;
//     delete point.y;

//     console.log(point);
// }

//////////////////////////////////////////////////////
// スプレット構文
// {
//     const otherProps = {
//         r: 4,
//         color: 'red',
//     }

//     const point = {
//         x: 100,
//         y: 180,
//         ...otherProps,
//     };
//     // console.log(point);

//     const {x, r, ...others} = point;
//     console.log(x);
//     console.log(r);
//     console.log(others);
// }

//////////////////////////////////////////////////////
// オブジェクトキー
// {

//     // const point = {
//     //     x: 100,
//     //     y: 180,
//     // };

//     // const keys = Object.keys(point);
//     // keys.forEach(key => {
//     //     console.log(`Key: ${key} Value: ${point[key]}`)
//     // });

//     const points = [
//         {x: 30, y: 20},
//         {x: 10, y: 50},
//         {x: 40, y: 40},
//     ];
//     console.log(points[1].y);
// }

//////////////////////////////////////////////////////
// 変数を代入

{
    // let x = 1;
    // let y = x;

    // x = 5;

    // console.log(x);
    // console.log(y);

    //配列で試す
    // let x = [1, 2];
    // let y = x;

    // x[0] = 5;

    // console.log(x);
    // console.log(y);

    let x = [1, 2];
    let y = [...x];

    x[0] = 5;

    console.log(x);//[5,2]
    console.log(y);//[1,2]
}


