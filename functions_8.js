/* 
Function() constructor
funções construtoras

* expressão new
* criar um novo objeto
* this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando."
    }
}

// instanciar um novo objeto
const Leo = new Person("Leo")
const Joao = new Person("João")

console.log(Leo.walk())
console.log(Joao.walk())
