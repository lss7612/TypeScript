//타입 추론
//타입스크립트는 자바스크립트와의 호환성을 위해 타입주석 부분을 생략 가능하다
let n = 1 //n의 타입을 number로 판단

//any 타입
//타입스크립트는 자바스크립트와의 호환을 위해  any라는 이름의 타입을 제공한다.
let a: any = 0
a = 'hello'
a = true
a = {}

console.log(n);
console.log(a);