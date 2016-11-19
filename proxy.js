//------------------------------------------
// Proxy
//------------------------------------------
let obj = {
    hoge: 'ほげ',
    foo: 'ふー'
};

// p_obj が代理でobjにアクセスしてくれる。
var p_obj = new Proxy(obj, {
    get(target, prop) {
        return prop in target ? target[prop] : '？';
    }
});

console.log(p_obj.hoge);
// 結果：ほげ 

console.log(p_obj.nothing);
// 結果： ？
