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
```

