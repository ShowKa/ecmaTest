//------------------------------------------
// モジュール・エクスポート
//------------------------------------------
const PI = 3.1415;

export function triangle(base, height) {
    return base * height / 2;

};

export function circle(radius) {
    return radius * radius * PI;
}

// 定数PIはexportキーワードで修飾されていないので、モジュール外部からは参照できません。
