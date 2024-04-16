function sayHello(){
    console.log('Привет');
}

let user = {
    name: "Василий Иванович",
    age: 35
  };
let toJson = JSON.stringify(user);
alert(toJson);
let fromJson = JSON.parse(toJson);
alert(fromJson);