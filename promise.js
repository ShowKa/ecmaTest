//------------------------------------------
// Promise
//------------------------------------------

function hoge(value) {
    // Promise型のオブジェクトを返却する！
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`値は${value}`);
            } else {
                reject('入力値が空です');
            }
        }, 500);
    })
}

hoge('佐藤理央').then(response => {
    console.log(response);
}, error => {
    console.log(error);
}); // 結果：値は佐藤理央


//------------------------------------------
// Promise : コールバックを順番に処理
//------------------------------------------
// 1. 初回のhoge関数を実行
hoge('佐藤理央').then(response => {
    console.log('1. ' + response);
    // 2. 初回実行に成功したら、2回目のhoge関数を実行   
    // 要するにPromiseのコールバックでPromiseを返却すれば、次のコールバックにつながる！！
    return hoge('鈴木幸助');
}).then(response => {
    console.log('2. ' + response);
}, error => {
    console.log('Error.' + error);
});
// 結果：1. 値は佐藤理央、2. 値は鈴木幸


//------------------------------------------
// Promise : すべての処理が終わってからコールバック			
//------------------------------------------
Promise.all([hoge('佐藤理央'), hoge('腰掛奈美'), hoge('鈴木花子')]).then(response => {
    console.log(response);
}, error => {
    console.log('Error.' + error);
});
// 結果：["値は佐藤理央","値は腰掛奈美","値は鈴木花子"]


//------------------------------------------
// Promise : 最初の処理が終わってからコールバック
//------------------------------------------
Promise.race([hoge('佐藤理央'), hoge('腰掛奈美'), hoge('鈴木花子')]).then(response => {
    console.log(response);
}, error => {
    console.log('Error.' + error);
});
// 結果：値は佐藤理央（結果は変動する可能性があります）



