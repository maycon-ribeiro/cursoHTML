const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

// formato não válido => console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// Outro formato inválido => console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))