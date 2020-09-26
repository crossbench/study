'use strict'

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click' , () =>{
        // const results = ['大吉','中吉','凶','末吉']
        // const results = ['大吉','大吉','大吉','大吉','凶']
        // const n = Math.floor(Math.random() * results.length);
        //lengthにすることで要素が増えても数字を不安必要がない
        

        // const n = Math.floor(Math.random() * 3);
        // btn.textContent = results[n];
        // btn.textContent = n;

        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break
        //     case 1:
        //         btn.textContent = '中吉';
        //         break
        //     case 2:
        //         btn.textContent = 'キョウ';
        //         break
        // }

        //確率を設定する場合
        const n = Math.random();
        if (n < 0.05){
            btn.textContent = '大吉'; //5%の確率ででる
        } else if (n < 0.2){
            btn.textContent = '中吉'; //15%の確率ででる
        } else{
            btn.textContent = '凶'; //80%の確率ででる
        }
    });
}