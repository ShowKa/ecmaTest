//------------------------------------------
// Map
//------------------------------------------

console.log("--- Map() ---");

let obj = {};
// マップの生成＆値の登録 
let m = new Map();
m.set('hoge', 'ほげ');
m.set('foo', 'ふぅ');
m.set('piyo', 'ぴよ');
// 1. オブジェクトをキーに値を設定
m.set(obj, 'オブジェクト');
console.log(m.get('hoge'));
// 結果：ほげ 
console.log(m.get(obj));
// 結果：オブジェクト 
// 2. オブジェクトリテラルでマップにアクセス 
console.log(m.get({}));
// 結果：undefined 
console.log(m.has('hoge'));
// 結果：true 
// マップのキーを列挙
for (let key of m.keys()) {
    console.log(key);
}
// 結果：hoge、foo、piyo、{}
// マップの値を列挙 
for (let value of m.values()) {
    console.log(value);
}
// 結果：ほげ、ふぅ、ぴよ、オブジェクト 
// マップのキー／値を列挙 
for (let [key, value] of m) {
    console.log(`${key}:${value}`);
}
// 結果：hoge:ほげ、foo:ふぅ、piyo:ぴよ、[object Object]:オブジェクト 
// マップを順番に処理 
m.forEach((value, key) => console.log(`${key} = ${value}`));
// 結果：hoge=ほげ、foo=ふぅ、piyo=ぴよ、[object Object]=オブジェクト


//------------------------------------------
// SET
//------------------------------------------

console.log("--- Set() ---");

// セットの生成＆値の登録 
let s = new Set();
s.add(5);
s.add(10);
s.add(8);
s.add(0);

// 1. 重複した値は無視 
s.add(8)

// 2. 任意のオブジェクト型を登録可能
s.add(obj);
// セットの内容を確認 
console.log(s.size);
// 結果：5
console.log(s.has(5));
// 結果：true 
// 3. 参照型に注意！ 
console.log(s.has({}));
// 結果：false
console.log(s.has(obj));
// 結果：true 
// セットから値を削除 
s.delete(5);
// セットの値を列挙 
for (let value of s) {
    console.log(value);
}
// 結果：10、8、0、{
