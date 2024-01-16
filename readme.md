## Introdução

POC para entender e implementar como identificar as diferenças
entre dois objetos que compartilham os mesmos atributos.

## Solução

Basicamente precisamos capturar todas as chaves do tipo do objeto e após isso nós podemos
acessar as propriedades de cada objeto e verificar se há divergencias entre os valores, após isso nós adicionamos 
a respectiva chave em uma array e posteriormente podemos iterar pelos objetos apenas com essas chaves e assim saberemos
quais valores estavam antes e quais valores estão agora.

A complexidade maior se trata de no caso um atributo do objeto ser um outro objeto, nesse caso 
temos que lidar com a recursão e passar o objeto com a chave para dentro do método e passarmos também o "ancestor"
ou a chave que corresponde ao objeto e assim iterarmos novamente pelo objeto mas agora utilizando tanto a chave quanto o "ancestor".

## Get Started

```
npm i
npm run dev
```