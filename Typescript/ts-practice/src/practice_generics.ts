// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });
// 이렇게 하면 타입 유추가 모두 깨진거나 다름이 없습니다. 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것 입니다.


// 이런 상황에 Generics 를 사용하면 됩니다. Generics 는 다음과 같이 사용합니다.
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });


function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);
// 이렇게 함수에서 Generics 를 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있습니다.


// interface 에서 Generics 사용하기
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};


// type 에서 Generics 사용하기
type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ['a', 'b', 'c']
};


// 클래스에서 Generics 사용하기
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());