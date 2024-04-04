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

//change made from for loops to forEach() loop.

pokemonList.forEach(function(pokemon){
    console.log(pokemon.name + ' is ' + pokemon.height + ' tall ' + ' and is a ' + pokemon.type);
})

let pokemonRepository = (function () {
    let pokemonList = [
         {name:"Butterfree", height: 1.1, type: ["bug","safeguard"]},
         {name: "Mew", height: 0.4, type: ["cat","savage"]},
         {name: "Meganium", height: 1.8, type: ["monster","grass"]} 
    ];
    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
    };
})();


console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Mew' });