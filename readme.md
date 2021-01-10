# X React Book Advisor
# X React Book Advisor

En la rama 'classsyntax' se utiliza la sintaxis **class properties** por la que:
+ las propiedades de la clase no necesitan declararse dentro de un constructor
+ las arrow functions se contextualizan correctamente por defecto

Dentro del bloque de la clase, los miembros (activos y pasivos, las arrow functions y las properties) son como variables normales pero que no se anteceden de const o let.
Para referirse a estos miembros cabe de todos modos usar **this**.

Para ello, se instala @babel/plugin-proposal-class-properties

```javascript
yarn add @babel/plugin-proposal-class-properties -D 
```

Y se aprovecha esta descarga añadiendo una nueva regla (rule) en el fichero webpack.config.js

```javascript
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
    }
}
```

Ejemplo de clases ES6 estándar:
```javascript
class Person{
    constructor(name) {
        this.name = name
        this.sayHi = this.sayHi.bind(this) // to set proper context to Person
    }
    sayHi(){
        return `Hi, I'm ${this.name}`
    }
}
```
Así es necesario bind() si se quiere evitar error al hacer lo siguiente:
```javascript
const genius = new Person('Xavier')
const greet = genius.sayHi
console.log(greet()) 
```



Ejemplo de clases ES6 usando la sintaxis 'class properties':
```javascript
class Person{
    name = 'Xavier'
    sayHi = () => { // the context is always Person
        return `Hi, I'm ${this.name}`
    }
}
```
Así no es preciso bind() para ejecutar la función greet() anterior