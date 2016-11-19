//------------------------------------------
// String／ Array／ Regex / Number / Math／ Objectなど
// 組み込みオブジェクトのメソッドも拡充
//------------------------------------------

// Stringオブジェクトには新たにcodePointAt／fromCodePointメソッドが提供され、
// サロゲートペアからコードポイントを追加したり、 コードポイントから文字を復元したりできるようになりました。

console.log('叱られて'.codePointAt(0).toString(16));
// 結果：20b9f 
console.log(String.fromCodePoint(0x20b9f));
// 結 : 叱

// 正規表現を扱うRegExpオブジェクトにもUnicodeを扱うためのuフラグが実装されました。これを利用することで、サロゲートペアを正しく判定できます。
let str = '叱られて';
console.log(/^.られて$/u.test(str));
// 結果：true  
//「.」は任意の一文字を表します。uフラグを外すと、サロゲートペアが1文字と見なされなくなりますので、結果はfalseとな

function hoge() {
    let args = Array.from(arguments);
    console.log(args.length);
    // 結果：5 
}
hoge(1, 2, 3, 4, 5);

// isFinite／ isNaNメソッドは、 正しくはグローバルオブジェクトの同名のメソッドとは挙動が一致しない点に注意してください。 
// というのも、 グローバルオブジェクトのそれは引数を数値に暗黙的に変換した上で判定するのに対して、
//  Numberオブジェクトでは数値であり、 かつ、 NaN／ Finite（ 有限値） であるものだけをtrueとします。 
// よって、 以下のようなコードでは結果が変わります。
console.log(Number.isNaN('hoge'));
// 結果：false
console.log(isNaN('hoge'));
// 結果：true

// 特定の位置からマッチさせたい場合、yフラグを設定する。
// 具体的にはlastIndexで指定された位置から一致するか判定する。
let re = /WINGS/y;
console.log(re.flags);
// 結果：y 
console.log(re.test('WINGS'));
// 結果：true 
re.lastIndex = 2;
console.log(re.test('出版WINGS'));
// 結果：true

// assignメソッドは、 jQueryなどでは$.extendメソッドとして提供されていたものです。
// たとえば、 コンストラクターで初期値をプロパティにまとめて割り当てるようなケースでも利用できます。
class Person {
    constructor(firstName, lastName, sex) {
        // これは便利！！ 
        Object.assign(this, {
            firstName,
            lastName,
            sex
        });
    }
    show() {
        return `${this.lastName}${this.firstName}は${this.sex}です。`;
    }
}
let p = new Person('理央', '佐藤', '女');
console.log(p.show());
// 結果：佐藤理央は女です。
