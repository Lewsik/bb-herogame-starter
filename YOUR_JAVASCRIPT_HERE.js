// Write your JS here

const hero = {
    name: 'Panda',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2,
    }
}
const inn = document.getElementById("inn")
const dagger = document.getElementById("dagger")
const bag = document.getElementById("bag")
const weapon = {type: 'dagger',
                damage: 2}
const spear = {type: 'weapon2',
                damage: 3}

// create form that allows user to change hero name:


// when inn is clicked, health replenishes:
inn.addEventListener('click', function() {
    rest(hero)
    displayStats()
})

// when dagger is clicked it adds weapon object to inventory array:
dagger.addEventListener('click', function() {
    pickUpItem(hero, weapon)
    displayStats()
})

// when bag is clicked it equips hero with the first elem from
// inventory arr:
bag.addEventListener('click', function() {
    equipWeapon(hero)
    displayStats()
})

// when 'hero' 'rests' health is replenished:
function rest(hero) {
    //if 'health' was already replenished an alert pops:
    if(hero.health === 10) {
        alert('Your health was already at max!')
    }
    hero.health = 10
    return hero
}

// when hero picks up a weapon, it's added to inventory:
function pickUpItem(hero, newItem) {
    hero.inventory.push(newItem)
}

// assigns weapon to the first elem of inventory:
function equipWeapon(hero) {
    // if inventory is empty, function should do nothing:
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0]
    }
}

// display hero's name, health, weapon type, weapon damage at page:
function displayStats() {
    const paragraph = document.querySelector("#stats p")
    const heroStats = 'Character name: ' + hero.name + '\n'
                    + 'Health: ' + hero.health + '\n'
                    + 'Weapon type: ' + hero.weapon.type + '\n'
                    + 'Weapon damage: ' + hero.weapon.damage + '\n'
    paragraph.innerText = heroStats
}


// call at the en of script:
displayStats()

