//object타입으로 생성된 타입변수는 객체를 대상으로 하는 any타입처럼 동작합니다.

let o: object = { name: 'Jack', age: 32 };
o = { first: 1, second: 2 };

//하지만 객체의 인터페이스 구문은 위와 같이 동작하지 못하도록 고안되었습니다. 만약 위 o변수가 object 타입이 아니라 Interface타입일 경우 변수를 다시 넣을때 오류가 발생합니다.

// 인터페이스 선언문
// interface 인터페이스이름 {
//     속성이름[?]: 속성타입[,...]
// }

interface IPerson {
  name: string;
  age: number;
  //name: string, age:number
}

let good: IPerson = { name: 'Jack', age: 32 };

// let bad1: IPerson = { name: 'Jack' }; //오류
// let bad2: IPerson = { age: 32 }; //오류
// let bad3: IPerson = {}; //오류
// let bad4: Iperson = { name: 'Jack', age: 32, etc: true }; //오류

//선택속성과 필수속성
interface IPerson2 {
  name: string; //필수속성
  age: number; //필수속성
  etc?: boolean; //선택속성
}

let good1: IPerson2 = { name: 'Jack', age: 32 };
let good2: IPerson2 = { name: 'Jack', age: 32, etc: true };

//익명 인터페이스
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: 'Jack', age: 32 };
console.log(ai);

//익명 인터페이스는 주로 다음처럼 함수를 구현할때 사용한다.
function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`);
}

printMe(ai);
