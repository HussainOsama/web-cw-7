


function hello() {

    var pets = ["Cats", "Lions", "Dogs", "dolphin"];
    pets.pop()
    pets.push("Ants")
    console.log(pets);
    pets[2] = "elephant"
    console.log(pets);

    var cat = { 
        name: "flufy", 
        age: 12, 
        kind: "tiger"
    }
    console.log(cat);
    cat.emoji = "😻"
    console.log(cat);
    console.log(cat.age);
}

hello()

