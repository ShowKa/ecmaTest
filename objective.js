//------------------------------------------
// 変数名をプロパティ名に定義できる。
//------------------------------------------
let title = 'AngularJSアプリケーションプログラミング';
let price = 3700;
let publish = '技術評論社';
let book = {
    title,
    price,
    publish
};
console.log(book);　 // 結果：{"title": "AngularJSアプリケーションプログラミング", "price": 3700, "publish": "技術評論社"


//------------------------------------------
// 関数名をそのままプロパティ名にできる。			
//------------------------------------------
let book2 = {　
    title: 'AngularJSアプリケーションプログラミング',
    price: 3700,
    toString() {　　
        console.log(`${this.title}:${this.price}円`);
    }
};
book2.toString();　 // 結果：AngularJSアプリケーションプログラミング:3700


//------------------------------------------
// 静的メソッドを定義できる。
//------------------------------------------
class Figure {
    static triangle(base, height) {
        return base * height / 2;
    }
}
console.log(Figure.triangle(10, 5));
// 結果：25


//------------------------------------------
// 継承できる
//------------------------------------------
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show() {
        return `${this.name}は${this.sex}です。`;
    }
}

class BusinessPerson extends Person {
    constructor(name, sex, clazz) {
        super(name, sex);
        this.clazz = clazz;
    }
    show() {
        return `${super.show()} 役職は${this.clazz}です。`;
    }
}

let bp = new BusinessPerson('理央', '女', '主任');
console.log(bp.show());
// 結果：理央は女です。 役職は主任です。


//------------------------------------------
// ジェネレーター
//------------------------------------------
// ジェネレーターの配下では、yield命令を呼び出すことができます。
// yieldは、returnとよく似た命令で関数の値を呼び出し元に返します。
// しかし、return命令がその場で関数の実行を終了するのに対して、yield命令は処理を一時停止します。
// つまり、次に呼び出された時には、その時点から処理を再開できます。

function* myGenerator() {
    yield 'あ';
    yield 'い';
    yield 'う';
}

for (let t of myGenerator()) {
    console.log(t);
} // 結果：あ、い、う

function* countdown(begin) {
    while (begin >= 0) {
        yield begin--;
    }
}

for (let t of countdown(10)) {
    console.log(t);
} // 結果：10、9、8、7、6、5、4、3、2、1、0


//------------------------------------------
// import : node.js 未対応
//------------------------------------------
// import { triangle, circle } from './lib/Figure';
// console.log(triangle(10, 5));
// 結果：2


//------------------------------------------
// 一括import
//------------------------------------------
// import * as fig from './lib/Figure';
// console.log(fig.triangle(10, 5));
// console.log(fig.circle(2))
