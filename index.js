var selectedChar;
var avaibleWeapons;



var weapons = [	
    {name: "4-Point Shuriken", slots: 3, category: "shuriken"},
    {name: "Boomerang", slots: 3, category: "shuriken"},
    {name: "Super Ball", slots: 0, category: "shuriken"},   
    {name: "Wind Slash", slots: 3, category: "shuriken"},
    {name: "Pinwheel", slots: 4, category: "shuriken"},
    {name: "Twin Viper", slots: 4, category: "shuriken"},
    {name: "Razor Ring", slots: 5, category: "shuriken"},
    {name: "Hawkeye", slots: 6, category: "shuriken"},
    {name: "Crystal Cross", slots: 6, category: "shuriken"},
    {name: "Spiral Shuriken", slots: 8, category: "shuriken"},
    {name: "Magic Shuriken", slots: 3, category: "shuriken"},    
    {name: "Oritsuru", slots: 8, category: "shuriken"},
    {name: "Rising Sun", slots: 4, category: "shuriken"},
    {name: "Conformer", slots: 8, category: "shuriken"},
    {name: "Buster Sword", slots: 2, category: "sword"},
    {name: "Hard Edge", slots: 4, category: "sword"}
]


    
var chars = [
	{name: "cloud", category: "sword" },
	{name: "barret", category: "prosthesis"},
	{name: "tifa", category: "knucles"},
	{name: "aerith", category: "staff"},
	{name: "red", category: "feather"},
	{name: "yuffie", category: "shuriken"},
	{name: "cait", category: "megaphone"},
	{name: "vincent", category: "gun"},
	{name: "cid", category: "spear"}
]
    
    
    
    
var shurikenWeapons = weapons.filter( weapon => weapon.category === chars.category)







function selectChar(nome){
	selectedChar = chars.filter( char => char.name === nome)
	avaibleWeapons = weapons.filter( weapon => weapon.category === selectedChar.category)
}