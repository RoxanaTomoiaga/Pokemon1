let pokemonList = [
    {name:"Butterfree", height: 1.1, type: ["bug","safeguard"]},
    {name: "Mew", height: 0.4, type: ["cat","savage"]},
    {name: "Meganium", height: 1.8, type: ["monster","grass"]} 
];
//writing on my document 
document.write('Butterfree', ' (height: 1.1)');
document.write('<br>');
document.write('Mew', ' (height: 0.4)');
document.write('<br>');
document.write('Meganium',' (height: 1.8)');

//loops for my pokemon.

for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.1 && pokemonList[i].height >= 1.8) {
        console.log(pokemonList[i].name + ' (Wow, that\'s big!)');
    } else if (pokemonList[i].height >=1.1){
        console.log(pokemonList[i].name + ' (It\s a medium pokemon)');
    } else {
        console.log(pokemonList[i].name + ' ( It\'s a small pokemon)');
    }
}