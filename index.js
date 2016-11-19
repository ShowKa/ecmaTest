//------------------------------------------
// 8進数（2進数もあるでよ）
//------------------------------------------
console.log(0o10 === 8);


//------------------------------------------
// テンプレと（バッククオート）と埋め込み
//------------------------------------------
let name = 'Yamada';
console.log(`Hello,${name}!!`); // 結果：Hello,Yamada!


//------------------------------------------
// テンプレートと埋め込み応用
//------------------------------------------
// 与えられた文字列をエスケープ処理するための_e関数
function _e(str) {
    if (!str) {
        return '';
    }
    // 変換表ESCに従って、文字列を置き換え
    return str.replace(/[<>&"']/g, function(submatch) {
        const ESC = {
            '<': '&lt;',
            '>': '&gt;',
            '&': 'and',
            '"': 'double',
            "'": 'single'
        };
        return ESC[submatch];
    });
}
// 分解されたtemplatesとvaluesを順に連結（valuesは_e関数でエスケープ）
function escape(templates, ...values) {
    let result = '';
    for (let i = 0; i < templates.length; i++) {
        result += templates[i] + _e(values[i]);
    }
    return result;
}

// テンプレート文字列をエスケープ処理
let name2 = '<Tom & Jerry>';
console.log(escape `こんにちは、${name2}さん！`); // 結果：こんにちは、<Tom & Jerry>さん


//------------------------------------------
// Sybol : enumに近い？
//------------------------------------------
const JAVASCRIPT = Symbol();


//------------------------------------------
// 分割代入 : オブジェクトから要素を一部だけ抽出
//------------------------------------------
let data = { hoge: 'ほげ', foo: { piyo: 'ぴよ', goo: 'ぐぅ' } };
let { hoge, foo, foo: { piyo, goo } } = data;
console.log(hoge); // 結果：ほげ
console.log(foo); // 結果：{"piyo":"ぴよ","goo":"ぐぅ"}
console.log(piyo); // 結果：ぴよ


//------------------------------------------
// 分割代入応用 : 複数の返り値
//------------------------------------------
function destructure() {
    let result1 = 10;
    let result2 = 20;
    return [result1, result2];
}
let [hoge1, hoge2] = destructure();
console.log(hoge1);


//------------------------------------------
// 分割代入応用 : 引数の特定のプロパティだけ引用
//------------------------------------------
let book = {
    isbn: '978-4-7741-7568-3',
    title: 'AngularJSアプリケーションプログラミング',
    price: 3700
};
let getInfo = function({ isbn }) {
    console.log(isbn);
}
getInfo(book); // 結果：978-4-7741-7568-3


//------------------------------------------
// 分割代入応用 : 正規表現での応用
//------------------------------------------
let tel = '000-111-2222';
let tel_pattern = /^(0\d{2,4})\-(\d{1,4})\-(\d{2,5})$/;
let [, area, local, privated] = tel_pattern.exec(tel);
console.log(area); // 000


//------------------------------------------
// 展開演算子の応用
//------------------------------------------
// ECMAScript6では、展開演算子を利用することで、より直観的に表現できます。
console.log(Math.max(...[100, -10, 50, 108])); // 結果：10


//------------------------------------------
// for of 演算子
//------------------------------------------
// for...of命令が値を列挙するのに対して、for...in命令はプロパティ名（インデックス）を列挙します
let data2 = [1, 2, 4];
Array.prototype.hoge = function() {};
for (let d of data2) { console.log(d); } // 結果：1、2、4
for (let d in data2) { console.log(d); } // 結果：0、1、2、hoge


//------------------------------------------
// デフォルト値
//------------------------------------------

// デフォルト値が適用されるのは引数が未指定であった場合だけです
// （undefined値が明示的に指定された場合にも、適用されます）。
// その他、たとえばnull、falseなどが渡された場合には、デフォルト値は無視されます。

function show(name = '権兵衛') {
    console.log('私の名前は' + name + 'です！');
}
show(); // 結果：私の名前は権兵衛です


//------------------------------------------
// デフォルト値応用
//------------------------------------------
//デフォルト値に関数を指定できることを利用して、必須パラメーターを表現することもできます。
function required() {
    console.error("Argument is missing ");
    // throw new Error('Arguments is missing');
}

function test(value = required()) {
    return value;
}

test();
// 結果：エラー（Arguments is missing）


//------------------------------------------
// 可変長引数
//------------------------------------------
function sum(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
}

console.log(sum(10, 20, 30));
// 結果：6


//------------------------------------------
// アロー演算子
//------------------------------------------
let numbers = [1, 2, 3];

// 1. 従来の関数リテラルでの表記
let formatted = numbers.map(function(value, index) {
    return value * value;
});

// 2. アロー関数による表記
let formatted2 = numbers.map((value, index) => value * value);
console.log(formatted2); // 結果：[1,4,9]

// 引数がひとつである場合には、以下のように引数を括るカッコを省略することもできます。
let formatted3 = numbers.map(value => value * value);
console.log(formatted3); // 結果：[1,4,9]
