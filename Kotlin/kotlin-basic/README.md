# Kotlin

Java 를 대체하기 위한 목적으로 Jetbrains에서 개발한 언어로, 자바가상머신과 호환된다.



## 1. 변수와 자료형

```kotlin
fun main() {
    var a :Int? = null // nullable 변수
    a = 123
    println(a)
    
    var intValue :Int = 1234
    var longValue :Long = 1234L
    var intValueByHex :Int = 0x1af
    var intValueByBin :Int = 0b10110110
    
    var doubleValue :Double = 123.5
    var doubleValueWithExp :Double = 123.5e10
    var floatValue :Float = 123.5f
    
    var char :Char = 'a'
    var koreanCharValue = '가'
    
    var booleanValue :Boolean = true
    
    val stringValue = "one line string test"
    val multiLineStringValue = """multiline
    string
    value"""
}
```



## 2. 형변환과 배열

```kotlin
fun main() {
	// 형변환: 하나의 변수에 지정된 자료형을 호환되는 다른 자료형으로 변경하는 것
	// 형변환 함수: to자료형 형태로 이루어짐 => 명시적 형변환
	// 코틀린에서는 암시적 형변환을 지원하지 않음
	var a :Int = 54321
    var b :Long= a.toLong()
    
    // 배열
    var intArr = arrayOf(1, 2, 3, 4, 5)
    // Generic
    var nullArr = arrayOfNulls<Int>(5)
    
    intArr[2] = 8
    println(intArr[2])
}
```



## 3. 타입추론과 함수

```kotlin
fun main() {
	// 타입추론: 변수나 함수들을 선언할 때나 연산이 이루어질때 자료형을 명시하지 않아도 자동으로 추론해주는 기능
	
    println(add(5, 6, 7))
}

fun add(a: Int, b: Int, c: Int): Int {
	return a + b + c
}

// 단일 표현식 함수
// 반환형의 타입추론이 가능하므로 생략가능
fun add(a: Int, b: Int, c: Int) = a + b + c
```



## 4. 조건문과 비교연산자

```kotlin
fun main() {
	// 조건문
    var a = 7
    
    // if
    if(a > 10) {
        println("a는 10보다 크다")
    } else {
        println("a는 10보다 작거나 같다")
    }
    
    
	doWhen(1)
    doWhen("Dimo")
    doWhen(12L)
    doWhen(3.14159)
    doWhen("Kotlin")
}

// when: 동작 실행
fun doWhen(a: Any){
    when(a) {
        1 -> println("정수 1입니다")
        "Dimo" -> println("디모의 코틀린 강의입니다.")
        is Long -> println("Long 타입 입니다")
        !is String -> println("String 타입이 아닙니다")
       	else -> println("어떤 조건도 만족하지 않습니다")
    }
}

// when: 값을 반환
fun doWhen(a: Any){
    // when
    var result = when(a) {
        1 -> "정수 1입니다"
        "Dimo" -> "디모의 코틀린 강의입니다."
        is Long -> "Long 타입 입니다"
        !is String -> "String 타입이 아닙니다"
       	else -> "어떤 조건도 만족하지 않습니다"
    }
    
    println(result)
}
```



## 5. 반복문과 증감

```kotlin
fun main() {
	var a = 0
    var b = 0
    
    // 증가 연산자(전위, 후위)
    while(a < 5){
        println(a++)
    }
    
    while(b < 5){
        println(++b)
    }
    
    // do...while 문
    // 조건과 관계없이 반드시 한번은 실행
    do
    {
       println(a++)
    } while(a < 5)
    
    // for
    for(i in 0..9){
        print(i)
    }
    println()
    
    for(i in 0..9 step 3){
        print(i)
    }
    println()
    
    for(i in 9 downTo 0){
    	print(i)
    }
    println()
    
    for(i in 'a'..'e'){
        print(i)
    }
}
```



## 6. 흐름제어와 논리연산자

```kotlin
fun main() {
	// 흐름제어
	// return, break, continue
	for (i in 1..10){
        if (i == 3) break
        println(i)
    }
    
    for (i in 1..10){
        if (i == 3) continue
        println(i)
    }
    
    // kotlin의 특수한 기능으로 반복문의 레이블명@를 활용해서 중첩되어있는 반복문도 빠져나갈 수 있다.
    loop@for (i in 1..10){
        for (j in 1..10) {
           if (i == 1 && j == 2) break@loop
        	println("i : $i, j : $j") 
        }
    }
    
    // 논리연산자
    // &&, ||, !
    println (true && false)
    println (true || false)
    println (!true)
    println (!false)
    
    var a = 6
    var b = 4
    
    println(a > 5 && b > 5)
}
```



## 7. 클래스의 기본

```kotlin
fun main() {
	var a = Person("박보영", 1990)
    var b = Person("전정국", 1997)
    var c = Person("장원영", 2004)
    
    println ("안녕하세요, ${a.birthYear}년생 ${a.name}입니다")
    a.introduce()
    b.introduce()
    c.introduce()
}

class Person (var name: String, val birthYear: Int) {
    fun introduce() {
        println("안녕하세요, ${birthYear}년생 ${name}입니다")
    }
}
```



## 8. 클래스의 생성자

```kotlin
fun main() {
	var a = Person("박보영", 1990)
    var b = Person("전정국", 1997)
    var c = Person("장원영", 2004)
    
    var d = Person("이루다")
    var e = Person("차은우")
    var f = Person("류수정")
}

// 생성자: 새로운 인스턴스를 만들기 위해 호출하는 특수한 함수
// 인스턴스의 속성을 초기화
// 인스턴스 생성시 구문을 수행 => init
class Person (var name:String, val birthYear:Int) { // 속성을 생성함과 동시에 생성자를 선언
    // init: 패러미터나 반환형이 없는 특수한 함수
    // 생성자를 통해 인스턴스가 만들어질때 호출되는 함수
    init {
        println("${this.birthYear}년생 ${this.name}님이 생성되었습니다.")
    }
    // 보조생성자
    // 필요에 따라 추가적으로 선언
    // 기본생성자와 다른 형태의 생성자를 제공하여 인스턴스 생성 시 편의를 제공하거나 추가적인 구문을 수행하는 기능을 제공
    constructor(name:String) : this(name, 1997) {
        println("보조 생성자가 사용되었습니다.")
    }
}
```



## 9. 클래스의 상속

```kotlin
fun main() {
	var a = Animal("별이", 5, "개")
    var b = Dog("별이", 5)
    
    a.introduce()
    b.introduce()
    
    b.bark()
    
    var c = Cat("루이", 1)
    
    c.introduce()
    c.meow()
}

// 상속
// 이미 존재하는 클래스를 확장하여 새로운 속성이나 함수를 추가한 클래스를 만들때
// 여러개의 클래스 중 공통점을 뽑아 코드관리를 편하게 할때
// 수퍼 클래스 => 서브 클래스package
// open: 클래스를 상속할 수 있도록 해주는 키워드
open class Animal (var name:String, var age:Int, var type:String)
{
    fun introduce() {
        println("저는 ${type} ${name}이고, ${age}살 입니다.")
    }
}

// 서브 클래스는 수퍼 클래스에 존재하는 속성과 같은 이름의  속성을 가질 수 없음
// 서브 클래스가 생성될때 수퍼클래스의 생성자까지 호출해야함
class Dog (name:String, age:Int) : Animal (name, age, "개")
{
    fun bark() {
        println("멍멍")
    }
}

class Cat (name:String, age:Int) : Animal (name, age, "고양이")
{
    fun meow() {
        println("야옹")
    }
}
```



## 10. 오버라이딩과 추상화

```kotlin
fun main() {
    var t = Tiger()
    t.eat()
}

// 오버라이딩: 서브클래스에서 수퍼클래스에 있는 같은 이름과 형태로된 함수의 내용을 다시 구현하는 것
// 수퍼클래스에서 open, 서브클래스에서 override 키워드 필요
open class Animal {
    open fun eat() {
        println("음식을 먹습니다")
    }
}

class Tiger: Animal() {
    override fun eat() {
        println("고기를 먹습니다")
    }
}
```

```kotlin
fun main() {
    var r = Rabbit()
    r.eat()
    r.sniff()
}

// 추상화: 수퍼클래스에서는 함수의 구체적은 구현은 없고, 서브클래스에 특정 함수가 있어야한다는 것만 명시
// 추상함수: 선언부만 있고 기능은 구현되지 않음
// 추상클래스: 추상함수를 포함하는 클래스, 미완성 클래스이기 때문에 단독으로 인스턴스를 만들 수 없고 서브클래스에서 상속받아 만들어야함
abstract class Animal {
    abstract fun eat()
    fun sniff() {
        println("킁킁")
    }
}

class Rabbit: Animal() {
    override fun eat() {
        println("당근을 먹습니다")
    }
}
```

```kotlin
fun main() {
    var d = Dog()
    d.run()
    d.eat()
}

// 인터페이스
// 생성자를 가질 수 없다.
// 구현부가 있는 함수 => open함수로 간주
// 구현부가 없는 함수 => abstract함수로 간주
// 별도의 키워드가 없어도 포함된 서브클래스에서 구현 및 재정의가 가능
interface Runner {
    fun run()
}

interface Eater {
    fun eat() {
        println("음식을 먹습니다")
    }
}

class Dog : Runner, Eater {
    override fun run() {
        println("우다다다 뜁니다")
    }
    
    override fun eat() {
        println("허겁지겁 먹습니다")
    }
}

// 여러개의 인터페이스나 클래스에서 같은 이름과 형태를 가진 함수를 구현하고 있다면 서브클래스에서는 혼선이 일어나지 않도록 반드시 오버라이딩하여 재구현 해주어야 한다!
```



## 11. 기본 프로젝트 구조

- 물리적 구조
  - 프로젝트: 코틀린으로 어플리케이션을 짤 때 관련한 모든 내용을 담는 큰 틀
  - 모듈: 하나의 프로젝트는 여러개의 모듈로 이루어져 있고,직접만들거나 라이브러리에서 가져와서 사용할 수 있다.
  - 폴더 및 파일: 코틀린 코드파일, 모듈과 관련된 설정 및 리소스 파일 등
- 논리적 구조
  - 패키지: 개발시에 소스코드의 '소속'을 지정하기 위한 논리적 단위
  - 코드 파일을 패키지에 넣는 방법
    - 코드 파일 맨 윗줄에 `package 패키지이름`을 적는다.
    - 같은 패키지 내에서는 변수, 함수, 클래스를 공유
    - 패키지가 다르면 import를 통해서 외부패키지를 가져올 수 있다.
  - 클래스와 파일명이 일치하지 않아도 된다.



## 12. 변수, 함수, 클래스의 접근범위와 접근제한자

```kotlin
// 스코프: 변수나 함수, 클래스 같은 멤버들을 서로 공유하여 사용할 수 있는 범위를 지정해둔 단위
// 패키지 내부, 클래스 내부, 함수 내부 등이 있다.
// 세가지 규칙
// 1. 스코프 외부에서는 스코프 내부의 멤버를 참조연산자로만 참조가 가능하다.
// 2. 동일 스코프 내에서는 멤버를 공유할 수 있다.
// 3. 하위 스코프에서는 상위 스코프의 멤버를 재정의할 수 있다.

val a = "패키지 스코프"

class B {
    val a = "클래스 스코프"
    fun print() {
        println(a)
    }
}

fun main() {
    val a = "함수 스코프"
    println(a)
    B().print()
}
```

- 접근 제한자: 스코프 외부에서 스코프 내부에 접근할 때 그 권한을 개발자가 제어할 수 있는 기능
  - public, internal, private, protected

-  패키지 스코프
  - public: 어떤 패키지에서도 접근 가능
  - internal: 같은 모듈 내에서만 접근 가능
  - private: 같은 파일 내에서만 접근 가능 

- 클래스 스코프
  - public: 클래스 외부에서 늘 접근 가능
  - private: 클래스 내부에서만 접근 가능
  - protected: 클래스 자신과 상속받은 클래스에서 접근 가능



## 13. 고차함수와 람다함수

```kotlin
// 고차함수: 함수를 클래스에서 만들어낸 인스턴스로 취급하는 방법
// 함수를 패러미터로 넘기거나 결과값으로 반환할 수 있는 방법이다.

fun main() {
	b(::a)
    
    // 람다함수: 함수를 람다식으로 표현(간단하게 표현할 수 있다)
    val c: (String)->Unit = { str -> println("$str 람다함수") } 
    // str은 String으로 받아온 값을 람다함수 내에서 사용할 변수 이름, 자료형이 자동으로 추론됨
    b(c)
    
    // 타입추론 기능을 이용해 좀 더 축약해서 기술할 수 있다.
    // val c = { str:String -> println("$str 람다함수") }
}

fun a (str:String) {
    println("$str 함수 a")
}

fun b (function: (String)->Unit) { // Unit: 반환값이 없는 경우
    function("b가 호출한")
}
```



## 14. 스코프 함수

```kotlin
// 람다함수
// 1. 여러줄의 구문을 수행가능, 이 경우 마지막 구문의 값을 반환
// 2. 패러미터가 없을수도 있다.
// 3. 패러미터가 하나뿐이라면 it 사용

// 스코프 함수: 함수형 언어의 특징을 좀 더 편리하게 사용할 수 있도록 기본 제공하는 함수들
// main함수와 별도의 스코프에서 인스턴스의 변수와 함수를 조작하므로 코드가 깔끔해진다.
// apply, run, with, also, let

// apply: 인스턴스를 생성한 후 변수에 담기 전에 초기화 과정을 수행할때 쓰임, 자기 자신을 반환
// run: 일반 람다한수처럼 인스턴스 대신에 마지막 결과값을 반환한다.
// with: run과 동일한 기능을 가지지만 인스턴스를 참조연산자 대신 패러미터로 받는다
// also: 처리가 끝나면 인스턴스를 반환(apply), but 패러미터로 인스턴스를 넘긴 것처럼 it을 통해서 인스턴스를 사용할 수 있다.
// let: 처리가 끝나면 최종값을 반환(run), but 패러미터로 인스턴스를 넘긴 것처럼 it을 통해서 인스턴스를 사용할 수 있다.
fun main() {
    
    var price = 5000 // run, apply: 인스턴스 내의 price 보다 main함수의 price변수를 우선시함 => 이럴 경우 also와 let으로 대체할 수 있다.
    
	var a = Book("디모의 코틀린", 10000).apply {
        name = "[초특가]" + name
        discount()
    }
    
    a.run {
        println("상품명: ${name}, 가격: ${price}원")
    }
    
    with(a){
        println("상품명: ${name}, 가격: ${price}원")
    }
    
    a.let {
        println("상품명: ${it.name}, 가격: ${it.price}원")
    }
}

class Book(var name: String, var price: Int)
{
    fun discount() {
        price -= 2000
    }
}
```



## 15. 오브젝트

```kotlin
fun main() {
    
    println(Counter.count)
    
    Counter.countUp()
    Counter.countUp()
    
 	println(Counter.count)
    
    Counter.clear()
    
    println(Counter.count)
    
}

// Object
// 인스턴스를 생성하지 않고 그 자체로 객체인 것
// 생성자를 사용하지 않음
// object로 선언된 객체는 최초사용시 자동으로 생성되며 코드 전체에서 공용으로 사용될 수 있으므로
// 프로그램이 종료될때까지 공통적으로 사용할 내용을 묶어 만드는 것이 좋다.
object Counter {
    var count = 0
    
    fun countUp() {
        count++
    }
    
    fun clear() {
        count = 0
    }
}
```

```kotlin
fun main() {
    
    var a = FoodPoll("짜장")
    var b = FoodPoll("짬뽕")
    
    a.vote()
    a.vote()
    
    b.vote()
    b.vote()
    b.vote()
    
    println("${a.name} : ${a.count}")
    println("${b.name} : ${b.count}")
    println("총계 : ${FoodPoll.total}")
    
}


// Companion Object
// class의 인스턴스 기능은 그대로 사용하면서 인스턴스 간의 공용으로 사용할 속성과 함수를 별도로 만드는 기능
// static 멤버와 유사하다
class FoodPoll (val name:String) {
    companion object {
        var total = 0
    }
    
    var count = 0
    
    fun vote() {
        total++
        count++
    }
}
```



## 16. 익명객체와 옵저버 패턴

```kotlin
fun main() {
    
    EventPrinter().start()
    
}

// observer: 이벤트가 일어나는 것을 감시
// 이벤트: 시스템 또는 루틴에 의해 발생하는 동작
// observer pattern: 이벤트가 발생할때마다 즉각적으로 처리할 수 있도록하는 프로그래밍 패턴
// => 두개의 클래스(이벤트 수신, 이벤트 발생 및 전달) 필요
// 이벤트 발생 클래스에서 자신의 이벤트를 받을 수 있는 interface를 만들어 공개(observer)
// 이벤트 수신 클래스에서 이를 구현하여 넘겨주면 interface만 알아도 이벤트를 넘겨줄 수 있다.
// 이 행위를 callback이라고 함

// observer
interface EventListener {
    fun onEvent(count: Int)
}

// 이벤트 발생 및 전달
class Counter(var listener: EventListener) {
    
    fun count() {
        for(i in 1..100) {
            if(i % 5 == 0) listener.onEvent(i)
        }
    }
}

// 이벤트 수신
class EventPrinter: EventListener {
    override fun onEvent(count: Int) {
        print("${count}-")
    }
    
    fun start() {
        val counter = Counter(this) 
        //    this: EventPrinter 자기 자신을 가르키지만, EventListener만 필요하므로 EventListener 구현부만 넘겨줌
        // 이를 객체지향의 다형성이라고 함
        counter.count()
    }
}
```

```kotlin
fun main() {
    
    EventPrinter().start()
    
}


interface EventListener {
    fun onEvent(count: Int)
}


class Counter(var listener: EventListener) {
    
    fun count() {
        for(i in 1..100) {
            if(i % 5 == 0) listener.onEvent(i)
        }
    }
}

// 익명 객체
// EventPrinter가 EventListener를 상속받지 않고 임시로 만든 별도의 EventListener 객체를 넘겨줄 수 있다.
// 이렇게하면 인터페이스를 구현한 객체를 코드 중간에도 즉시 생성하여 사용할 수 있다.
class EventPrinter {
    fun start() {
        val counter = Counter(object: EventListener {
            override fun onEvent(count: Int) {
                print("${count}-")
            }
        })
        counter.count()
    }
}
```



## 17. 클래스의 다형성

```kotlin
// 클래스의 다형성
// 서브클래스의 인스턴스를 수퍼클래스 인스턴스에 담는 행위를 상위 자료형으로 변환한다하여 Up-Casting이라고 한다.
// var a: Drink = Cola()
// 다시 하위 자료형으로 변환하는 것을 Down-Casting이라고 한다.(별도의 연산자 필요: as, is)
// as: 변수를 호환되는 자료형으로 변환해주는 캐스팅 연산자, 변환된 자료형을 반환도 해줌
// is: 변수가 자료형과 호환되는지 먼저 체크한 후 변환해주는 캐스팅 연산자

fun main() {
    
    var a = Drink()
    a.drink()
    
    var b: Drink = Cola()
    b.drink()
    
    // b.washDishes() :Drink 인스턴스이므로 washDishes 함수를 불러올 수 없다.
    if(b is Cola) // is는 조건문 안에서만 다운캐스팅
    {
        b.washDishes()
    }
    
    var c = b as Cola
    c.washDishes()
    b.washDishes() // as를 사용하면 반환값 뿐만 아니라 변수 자체도 다운캐스팅된다.
}

open class Drink {
    var name = "음료"
    
    open fun drink() {
        println("${name}을 마십니다")
    }
}

class Cola: Drink() {
    var type = "콜라"
    
    override fun drink() {
        println("${name}중에 ${type}을 마십니다")
    }
    
    fun washDishes() {
        println("${type}로 설거지를 합니다")
    }
}
```



## 18. 제너릭

- 두 클래스의 인스턴스를 공용으로 사용하는 하나의 함수에 패러미터로 받으려면 수퍼클래스인 클래스의 자료형으로 받으면 자동으로 캐스팅이 된다. 하지만 캐스팅 연산은 프로그램의 속도를 저하시킬 수 있다.
- 제너릭: 함수나 클래스를 선언할때 고정적인 자료형 대신 실제 자료형으로 대체되는 타입 패러미터를 받아 사용하는 방법
  - 이 타입 패러미터에 특정 자료형이 할당되면 제너릭을 사용하는 모든 코드는 할당된 자료형으로 대체되어 컴파일된다.
  - 특정한 수퍼클래스를 상속받은 클래스 타입으로만 제한하려면 :수퍼클래스명을 명시하면 된다.

```kotlin
fun main() {
    
	UsingGeneric(A()).doShouting()
    UsingGeneric(B()).doShouting()
    UsingGeneric(C()).doShouting()
    
    doShouting(B())
    
}

fun <T: A> doShouting(t: T) {
    t.shout()
}

open class A {
    open fun shout() {
        println("A가 소리칩니다")
    }
}

class B: A() { 
    override fun shout() {
        println("B가 소리칩니다")
    }
}

class C: A() {
    override fun shout() {
        println("C가 소리칩니다")
    }
}

class UsingGeneric<T: A>(val t: T){
    fun doShouting() {
        t.shout()
    }
}
```



## 19. 리스트

```kotlin
// 리스트
// 데이터를 모아 관리하는 Collection class의 서브클래스 중 가장 단순한 형태
// 여러개의 데이터를 원하는 순서로 넣어 관리하는 형태
// List: 생성 시에 넣은 객체를 대체,추가,삭제할 수 없음
// MutableList: 생성 시에 넣은 객체를 대체,추가,삭제가 가능함
// 리스트를 만들 때는 전용함수인 listOf(1,2,3) mutableListOf("A","B","C")와 같이 씀
// MutableList에서는 요소의 추가,삭제를 위한 함수 외에도 요소를 섞거나 정렬하는 등의 함수 사용, 특정 위치의 요소 대체도 가능

fun main() {
    
    val a = listOf("사과", "딸기", "배")
    println(a[1])
    
    for(fruit in a)
    {
        print("${fruit}:")
    }
    
    println()
    val b = mutableListOf(6, 3, 1)
    println(b)
    
    b.add(4)
    println(b)
    
    b.add(2, 8)
    println(b)
    
    b.removeAt(1)
    println(b)
    
    b.shuffle()
    println(b)
    
    b.sort()
    println(b)
}
```



## 20. 문자열을 다루는 법

``` kotlin
fun main() {
	   
    val test1 = "Test.Kotlin.String"
    
    println(test1.length)
    
    println(test1.toLowerCase())
    println(test1.toUpperCase())
    
    val test2 = test1.split(".")
    println(test2)
    
    println(test2.joinToString())
    println(test2.joinToString("-"))
    
    println(test1.substring(5..10))
    
}
```

```kotlin
fun main() {
	   
    val nullString: String? = null
    val emptyString = ""
    val blankString = " "
    val normalString = "A"
    
    println(nullString.isNullOrEmpty())
    println(emptyString.isNullOrEmpty())
    println(blankString.isNullOrEmpty())
    println(normalString.isNullOrEmpty())
    
    println()
    
    println(nullString.isNullOrBlank())
    println(emptyString.isNullOrBlank())
    println(blankString.isNullOrBlank())
    println(normalString.isNullOrBlank())
  
}
```

```kotlin
fun main() {
	   
	var test3 = "kotlin.kt"
    var test4 = "java.java"
    
    println(test3.startsWith("java"))
    println(test4.startsWith("java"))
    
    println(test3.endsWith(".kt"))
    println(test4.endsWith(".kt"))
    
    println(test3.contains("lin"))
    println(test4.contains("lin"))
    
}
```



## 21. null 값을 처리하는 방법? 동일한지를 확인하는 방법?

```kotlin
// null상태로 속성이나 함수를 쓰려고하면 null point exception이 발생하기 때문에
// nullable 변수를 사용할때는 null 체크를 해야 컴파일된다.

// null safe operator(?.): 참조연산자를 실행하기 전에 먼저 객체가 null인지 확인부터하고 객체가 null이라면 뒤따라오는 구문을 실행하지 않음
// elvis operator(?:): 객체가 null이 아니라면 그대로 사용하지만 null이라면 연산자 우측의 객체로 대체
// non-null assertion operator(!!.): 참조연산자를 사용할때 null여부를 컴파일시 확인하지 않도록하여 runtime시 null point exception를 의도적으로 발생시킴

fun main() {
    
    var a: String? = null
    
    println(a?.toUpperCase())
    
    println(a?:"default".toUpperCase())
    
    println(a!!.toUpperCase(0))
    
}
```

```kotlin
// null safe operator는 스코프 함수와 사용하면 더욱 편리하다

fun main() {
	// var a: String? = null
	var a: String? = "Kotlin Exam"
    
    // a가 null이라 스코프 함수 전체가 실행되지 않음
   	a?run.{
       println(toUpperCase())
       println(toUpperCase())
   	}
    
}
```

```kotlin
// 내용의 동일성: 메모리 상에 서로 다른 곳에 할당된 객체라고 해도 내용이 같다면 동일하다고 판단(==)
// 객체의 동일성: 서로 다른 변수가 메모리상에 같은 객체를 가르키고 있을때만 동일하다고 판단(===)
// 내용의 동일성은 자동으로 판단되는 것이 아닌 코틀린의 모든 클래스가 내부적으로 상속받는 
// Any라는 최상위 클래스의 equals()함수가 반환하는 Boolean 값으로 판단

fun main() {
	
    var a = Product("콜라", 1000)
    var b = Product("콜라", 1000)
    var c = a
    var d = Product("사이다", 1000)
    
    println(a == b)
    println(a === b)
    
    println(a == c)
    println(a === c)
    
    println(a == d)
    println(a === d)
}


// 커스텀 클래스를 만들때는 equals()를 상속받아 동일성을 확인해주는 구문을 별도로 구현해야함
class Product(val name: String, val price: Int){
    override fun equals(other: Any?): Boolean {
        if(other is Product)
        {
            return other.name == name && other.price == price
        } else {
            return false
        }
    }
}
```



## 22. 함수의 argument를 다루는 방법과 infix함수

```kotlin
// overloading: 같은 Scope안에서 같은 이름의 함수를 여러개 만들 수 있는 기능
// 이름이 같더라도 패러미터의 자료형, 개수가 다르면 서로 다른 함수로 동작 가능
// 패러미터의 이름만 다르게 붙고 자료형과 개수가 동일하다면 오버로딩 불가

fun main() {
	
    read(7)
    read("감사합니다")
    
}

fun read(x: Int){
    println("숫자 $x 입니다")
}

fun read(x: String){
    println(x)
}
```

```kotlin
// default arguments
// 패러미터를 받아야하는 함수이지만 별다른 패러미터가 없더라도 기본값으로 동작해야할때 사용

fun main() {
	
    deliveryItem("짬뽕")
    deliveryItem("책", 3)
    deliveryItem("노트북", 30, "학교")
    
    // named arguments
    // 패러미터의 순서와 상관없이 패러미터의 이름을 사용하여 직접 패러미터에 값을 할당하는 기능
    deliveryItem("선물", destination = "친구집")
    
}

fun deliveryItem(name: String, count: Int = 1, destination: String = "집") {
    println("${name}, ${count}개를 ${destination}에 배달하였습니다")
}
```

```kotlin
// variable number of argtments(vararg)
// 같은 자료형을 개수에 상관없이 패러미터로 받고 싶을 때 사용
// 다른 패러미터와 이용할때는 반드시 맨 마지막에 위치시켜야 한다.

fun main() {

   	sum(1, 2, 3, 4)
    
}

fun sum(vararg numbers: Int) {
    var sum = 0
    
    // vararg가 붙은 패러미터는 마치 배열처럼 for문으로 참조 가능
    for(n in numbers)
    {
        sum += n
    }
    
    print(sum)
}
```

```kotlin
// infix(function)
// 마치 연산자처럼 사용할 수 있는 함수

fun main() {

    println(6 multiply 4)
    
    println(6.multiply(4))
    
}

infix fun Int.multiply(x: Int): Int = this * x
```



## 23. 중첩클래스와 내부클래스

```kotlin
// 중첩클래스: 클래스 안에 클래스를 넣은 형식
// 하나의 클래스가 다른 클래스의 기능과 강하게 연관되어 있다는 의미를 전달하기 위해 만들어진 형식
// '외부클래스이름.중첩클래스이름' 으로 사용
// 형태만 내부에 존재할 뿐 실질적으로는 서로 내용을 직접 공유할 수 없는 별개의 클래스

// 내부클래스: 중첩클래스에 inner라는 키워드를 붙여서 만든 클래스
// 혼자서 객체를 만들 수 없고, 외부클래스에 객체가 있어야만 생성과 사용이 가능
// 외부클래스 객체 안에서 사용되므로 외부클래스의 속성이나 함수를 사용 가능

fun main() {

    Outer.Nested().introduce()
    
    val outer = Outer()
    val inner = outer.Inner()
    
    inner.introduceInner()
    inner.introduceOuter()
    
    outer.text = "Changed Outer Class"
    inner.introduceOuter()
    
}

class Outer {
    var text = "Outer Class"
    
    class Nested {
        fun introduce() {
            println("Nested Class")
        }
    }
    
    inner class Inner {
        var text = "Inner Class"
        
        fun introduceInner() {
            println(text)
        }
        
        // 내부, 외부 클래스에 같은 이름의 속성이나 함수가 있다면 'this@외부클래스명'으로 사용
        fun introduceOuter() {
            println(this@Outer.text)
        }
    }
}
```



## 24. Data Class와 Enum Class

```kotlin
// Data class: 데이터를 다루는 데에 최적화된 class, 5가지 기능을 내부적으로 자동생성
// 1. eqauls(): 내용의 동일성을 판단
// 2. hashcode(): 객체의 내용에서 고유한 코드를 생성
// 3. toString(): 포함된 속성을 보기쉽게 나타냄
// 4. copy(): 객체를 복사하여 똑같은 내용의 새 객체를 만듦, 생성자와 똑같은 형태의 패러미터를 주어 일부 속성 변경 가능
// 5. componentX(): 속성을 순서대로 반환
// 사용자가 직접 호출하기 위한 함수가 아닌 배열이나 리스트 등의 데이터 클래스에 객체가 담겨있을 때 이 내용을 자동으로 꺼내쓸 수 있는 기능을 지원하는 함수들

fun main() {

    val a = General("보영", 212)
    
    println(a == General("보영", 212))
   	println(a.hashCode())
    println(a)
    
    val b = Data("루다", 306)
    
    println(b == Data("루다", 306))
   	println(b.hashCode())
    println(b)
    
    println(b.copy())
    println(b.copy("아린"))
    println(b.copy(id = 618))
    
    var list = listOf(Data("보영", 212),
                     Data("루다", 306),
                     Data("아린", 618))
    
    for((a, b) in list)
    {
        println("${a}, ${b}")
    }
    
}

class General(val name: String, val id: Int)

data class Data(val name: String, val id: Int)
```

```kotlin
// Enum class: enumerated type, 즉, 열거형의 준말로 enum class 내에 상태를 구분하기 위한 객체들을 이름을 붙혀 여러개 생성해두고 그 중 하나의 상태를 선택하여 나타내기 위한 클래스
// 객체들은 관행적으로 상수를 나타낼 때 사용하는 대문자를 사용
// enum의 객체들은 생성자를 만들어 속성을 받도록 하면 객체를 선언할때 속성도 설정할 수 있다.
// 함수도 추가 가능한데, 객체의 선언이 끝나는 위치에 세미콜론을 기입

fun main() {
    
    // enum은 선언시에 만든 객체를 이름으로 참조하여 그대로 사용
    var state = State.SING
    println(state)
    
    state = State.SLEEP
    println(state.isSleeping())
    
    state = State.EAT
    println(state.message)

}

enum class State(val message: String) {
    SING("노래를 부릅니다"),
    EAT("밥을 먹습니다"),
    SLEEP("잠을 잡니다");
    
    fun isSleeping() = this == State.SLEEP
}
```



## 25. 컬렉션 2탄, Set과 Map

```kotlin
// Collection class 의 하위 클래스
// Set: 리스트와 달리 순서가 정렬되지 않으며 중복이 허용되지 않는 컬렉션
// 인덱스로 위치를 지정하여 객체를 참조할 수는 없으며 contains()로 set안에 객체가 존재하는 지를 확인하는 식으로 사용
// mutableSet이 존재

fun main() {
	
    val a = mutableSetOf("귤", "바나나", "키위")
    
    for(item in a)
    {
        println("${item}")
    }
    
    a.add("자몽")
    println(a)
    
    a.remove("바나나")
    println(a)
    
    println(a.contains("귤"))
    
}
```

```kotlin
// Collection class 의 하위 클래스
// Map: 객체를 넣을 때 그 객체를 찾아낼 수 있는 key를 쌍으로 넣어주는 컬렉션
// 객체의 위치가 아닌 고유한 key를 이용해 객체를 참조
// mutableMap이 존재

fun main() {
	
    val a = mutableMapOf("레드벨벳" to "음파음파",
                        "트와이스" to "FANCY",
                        "ITZY" to "ICY")
	
    for(entry in a)
    {
        println("${entry.key} : ${entry.value}")
    }
    
    a.put("오마이걸", "번지")
    println(a)
    
    a.remove("ITZY")
    println(a)
    
    println(a["레드벨벳"])
    
}
```



## 26. 컬렉션 함수, 첫번째 이야기!

```kotlin
// 컬렉션 함수: list, set, map과 같은 컬렉션 또는 배열에 일반함수 또는 람다함수 형태를 사용하여
// for 문 없이도 아이템을 순회하면 참조하거나, 조건을 걸고, 구조의 변경까지 가능한 여러가지 함수를 지칭

// forEach: 모든 아이템을 it이라는 변수로 순서대로 참조할 수 있음
// filter: it에 조건을 걸어주면 조건에 맞는 객체만 다시 컬렉션으로 만들어서 반환
// map: it에 수식을 적용하여 그 값을 변경하여 컬렉션으로 만들어서 반환
// any, all, none: it에 조건을 만들어서 조건과 비교하여 boolean값을 반환
// first(find): 일반함수로 사용하는 경우 첫번째 객체를 반환, 람다함수의 경우 조건을 걸어주면 조건에 맞는 첫번째 객체를 반환
// last(findLast): 일반함수로 사용하는 경우 마지막 객체를 반환, 람다함수의 경우 조건을 걸어주면 조건에 맞는 마지막 객체를 반환
// first, last 함수를 사용할때 조건에 맞는 객체가 없는 경우 NoSuchElementException 발생
// firstOrNull, lastOrNull 조건에 맞는 객체가 없는 경우 Null을 반환 
// count: 일반함수로 사용하는 경우 객체의 개수를 반환, 람다함수의 경우 조건에을 걸어주면 조건에 맞는 객체 개수를 반환

fun main() {
	
    val nameList = listOf("박수영", "김지수", "김다현", "신유나", "김지우")
    
    nameList.forEach{ print(it + " ") }
    println()
    
    println(nameList.filter{ it.startsWith("김") })
    
    println(nameList.map{ "이름 : " + it })
    
    println(nameList.any{ it == "김지연"})
    println(nameList.all{ it.length == 3})
    println(nameList.none{ it.startsWith("이") })
    
    println(nameList.first{ it.startsWith("김") })
    println(nameList.last{ it.startsWith("김") })
    println(nameList.count{ it.contains("지") })
    
}
```



## 27. 컬렉션 함수, 두번째 이야기!

```kotlin
// 컬렉션 함수: list, set, map과 같은 컬렉션 또는 배열에 일반함수 또는 람다함수 형태를 사용하여
// for 문 없이도 아이템을 순회하면 참조하거나, 조건을 걸고, 구조의 변경까지 가능한 여러가지 함수를 지칭

// associateBy: 객체에서 key를 따로 추출하여 map으로 만드는 함수
// groupBy: key가 같은 객체끼리 배열로 묶어 map으로 만드는 함수
// partition: 객체에 조건을 걸어 두개의 컬렉션으로 나누어 줌

// flatMap: 객체마다 만들어진 컬렉션을 합쳐서 반환하는 함수
// getOrElse: 인덱스 위치에 아이템이 있으면 아이템을 반환하고 아닌 경우 지정한 기본값을 반환하는 함수
// zip: 컬렉션 두 개의 아이템을 1:1로 매칭해서 새 컬렉션을 만들어 줌, 결과 컬렉션의 아이템 개수는 더 작은 컬렉션을 따라가게 됨

fun main() {
	
    data class Person(val name:String, val birthYear: Int)
    
    val personList = listOf(Person("유나", 1992),
                           Person("조이", 1996),
                           Person("츄", 1999),
                           Person("유나", 2003))
    
    println(personList.associateBy{ it.birthYear })
    println(personList.groupBy{ it.name })
    
    val (over98, under98) = personList.partition{ it.birthYear > 1998 }
    println(over98)
    println(under98)
    
    val numbers = listOf(-3, 7, 2, -10, 1)
    
    println(numbers.flatMap{ listOf(it * 10, it + 10) })
    
    println(numbers.getOrElse(1) { 50 })
    println(numbers.getOrElse(10) { 50 })
    
    val names = listOf("A", "B", "C", "D")
    
    println(names zip numbers)
    
}
```

