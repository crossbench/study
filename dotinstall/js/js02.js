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

// {
//     // let x = 1;
//     // let y = x;

//     // x = 5;

//     // console.log(x);
//     // console.log(y);

//     //配列で試す
//     // let x = [1, 2];
//     // let y = x;

//     // x[0] = 5;

//     // console.log(x);
//     // console.log(y);

//     let x = [1, 2];
//     let y = [...x];

//     x[0] = 5;

//     console.log(x);//[5,2]
//     console.log(y);//[1,2]
// }


//////////////////////////////////////////////////////
// 文字列を操作してみよう
// {

//     const str = 'hello';

//     // console.log(str.length);
//     //helloは5文字なので '5'が表示される

//     //str.substring(開始位置,終了位置);
//     console.log(str.substring(2,4));
//     //llが取得できる

//     console.log(str[1]);
//     //これでも取得できるがforeachなどが使用できるわけではない

// }

//////////////////////////////////////////////////////
//  join()､split()を使ってみよう
// {

//     const d = [2020, 11, 14];

//     //console.log(d.join('/'));

//     const t = '17:45:59';
//     // console.log(t.split(':'));

//     const [hour,minite,second] = t.split(':');
//     console.log(hour);
//     console.log(minite);
//     console.log(second);

// }

//////////////////////////////////////////////////////
//  数値を操作してみよう
// {

//     const scores = [10, 3, 9];

//     let sum = 0;

//     scores.forEach(score => {
//         sum += score;
//     });

//     const ave = sum / scores.length;

//     // console.log(sum);
//     // console.log(ave);

//     // console.log(Math.floor(ave));//7
//     // console.log(Math.ceil(ave));//8
//     // console.log(Math.round(ave));//7
//     // console.log(ave.toFixed(3));//7.333

//     console.log(Math.random());//ランダム0~1の数値を出力

// }

//////////////////////////////////////////////////////
//  ランダムな整数値を作ってみよう
// {

//     //console.log(Math.random());//ランダム0~1の数値を出力

//     //1-6のランダムな整数
//     // Math.floor(Math.random() * (max + 1 -min) +min);

//     console.log(Math.floor(Math.random() * (6) + 1));

// }

//////////////////////////////////////////////////////
//  現在日時を扱ってみよう
// {

//     const d = new Date();

//     // d.getFullYear();//2020
//     // d.getMonth(); //0-11 jan:0, Feb:1
//     // d.getDate(); //1-31
//     // d.getDay(); //0-6 (Sun:0, Mon:1)

//     console.log(`${d.getMonth() + 1}月${d.getDate()}日`)

// }

//////////////////////////////////////////////////////
//  特定の日時を扱ってみよう
// {

//     const d = new Date(2019,10) ; //2019/10/01 00:00:00

//     d.setHours(10, 20, 30); //2019/10/01 10:20:30
//     d.setDate(31); //2019/10/31
//     console.log(d);
// }

//////////////////////////////////////////////////////
//  alert()､confirm()を使ってみよう
// {

//     //alert('hello');;

//     const answer = confirm('削除しますか？');

//     if (answer){
//         console.log('削除しました');
//     }else {
//         console.log('キャンセルされました');
//     }
// }

//////////////////////////////////////////////////////
//  setInterval()を使ってみよう
// 1000msで300msのfuncでも1000msで切れる
// {

//     let i = 0;

//     function showTime(){
//         console.log(new Date());
//         i++;
//         if (i > 2){
//             clearInterval(intervalId)
//         }
//     }
    
//     //setInterval(showTime, 1000);
//     //1秒ごとに実行する

//     const intervalId = setInterval(showTime, 1000);
//     //1秒ごとに実行する
// }

//////////////////////////////////////////////////////
//  setTimeout()を使ってみよう
// 1000msで300msのfuncだと1300msで切れる 負荷が少ない
// {

//     let i = 0;

//     function showTime(){
//         console.log(new Date());
//         const timeoutId = setTimeout(showTime, 2000);
//         i++;
//         if (i > 2){
//             clearInterval(timeoutId);
//         }
//     }
    
//     showTime();
// }

//////////////////////////////////////////////////////
//  例外処理を使ってみよう
// 名前を大文字に変換する
// {
//     const name = 'taguchi';
//     //const name = 5; //5だと例外になる

//     try{
//         console.log(name.toUpperCase());
//     } catch(e){
//         console.log(e);
//     }

//     console.log('finishi!')
// }

//////////////////////////////////////////////////////
// クラス
// オブジェクトが複数ある場合を考えよう
// {
//     const posts = [
//         {
//             text:'javascript勉強中',
//             likeCount: 0,
//         },
//         {
//             text:'プログラム楽しい！',
//             likeCount: 0,
//         },
//     ];

//     function show(post){
//         console.log(`${post.text} - ${post.likeCount}いいね`);
//     } 

//     show(posts[0]);
// }

//////////////////////////////////////////////////////
// メソッドを使ってみよう

// {
//     const posts = [
//         {
//             text:'javascript勉強中',
//             likeCount: 0,
//             // show: function (){
//             //     console.log(`${this.text} - ${post.likeCount}いいね`);
//             // }, 
//             show (){
//                 console.log(`${this.text} - ${this.likeCount}いいね`);
//             }, 
//         },
//         {
//             text:'プログラム楽しい！',
//             likeCount: 0,
//             show (){
//                 console.log(`${this.text} - ${this.likeCount}いいね`);
//             }, 
//         },
//     ];

//     //show(posts[0]);
//     posts[0].show();
//     posts[1].show();
// }

//////////////////////////////////////////////////////
// クラスを作ってみよう

// {
//     class Post{
//         constructor(text){
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show (){
//             console.log(`${this.text} - ${this.likeCount}いいね`);
//         }   
//     }

//     const posts = [
//         new Post('javascript勉強中'),
//         new Post('プログラム楽しい！'),
//     ];

//     posts[0].show();
//     posts[1].show();
// }

//////////////////////////////////////////////////////
// カプセル化を理解しよう

//メソッドに入れておくのがおすすめ。

// {
//     class Post{
//         constructor(text){
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show (){
//             console.log(`${this.text} - ${this.likeCount}likes`);
//         }
        
//         like(){
//             this.likeCount++;
//             this.show();
//         }
//     }

//     const posts = [
//         new Post('javascript勉強中'),
//         new Post('プログラム楽しい！'),
//     ];

//     posts[0].like();

//     //posts[0].likeCount++;;//これは非推奨

//     // posts[0].show();
//     // posts[1].show();
// }

//////////////////////////////////////////////////////
// 静的メソッドを使ってみよう

// {
//     class Post{
//         constructor(text){
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show (){
//             console.log(`${this.text} - ${this.likeCount}likes`);
//         }
        
//         like(){
//             this.likeCount++;
//             this.show();
//         }

//         //　静的メソッド
//         // thisは使えない
//         static showInfo(){
//             console.log('Post class version 1.0');
//         }
//     }

//     const posts = [
//         new Post('javascript勉強中'),
//         new Post('プログラム楽しい！'),
//     ];

//     Post.showInfo();
// }

//////////////////////////////////////////////////////
// クラスを拡張したい場合を考えよう

// {
//     class Post{
//         constructor(text){
//             this.text = text;
//             this.likeCount = 0;
//         }

//         show (){
//             console.log(`${this.text} - ${this.likeCount}likes`);
//         }
        
//         like(){
//             this.likeCount++;
//             this.show();
//         }
//     }
//     class SponsorPost{
//         constructor(text,sponsor){
//             this.text = text;
//             this.likeCount = 0;
//             this.sponsor = sponsor;
//         }

//         show (){
//             console.log(`${this.text} - ${this.likeCount}likes`);
//             console.log(`.... sponsored by ${this.sponsor}`);
//         }
        
//         like(){
//             this.likeCount++;
//             this.show();
//         }
//     }

//     const posts = [
//         new Post('javascript勉強中'),
//         new Post('プログラム楽しい！'),
//         new SponsorPost('3分でマスターしよう','dotinstall'),
//     ];


//     posts[2].show();
//     posts[2].like();
// }

//////////////////////////////////////////////////////
// クラスを継承してみよう

{
    class Post{ // 親クラス
        constructor(text){
            this.text = text;
            this.likeCount = 0;
        }

        show (){
            console.log(`${this.text} - ${this.likeCount}likes`);
        }
        
        like(){
            this.likeCount++;
            this.show();
        }
    }

    class SponsorPost extends Post{ // 子クラス
        constructor(text,sponsor){
            super(text);
            this.sponsor = sponsor;
        }

        show (){
            super.show();
            console.log(`.... sponsored by ${this.sponsor}`);
        }
    }

    const posts = [
        new Post('javascript勉強中'),
        new Post('プログラム楽しい！'),
        new SponsorPost('3分でマスターしよう','dotinstall'),
    ];

    posts[2].show();
    posts[2].like();

}

