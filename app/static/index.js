// http://wc3.3dn.ru/publ/dota2/raznoe_dota_2/icons_heroes_dota_2/52-1-0-676
// https://liquipedia.net/dota2/Void_Spirit
// https://dota2.fandom.com/wiki/Heroes
const HEROES = {
  // |--------------------------------------------------  Radiant  --------------------------------------------------|
  // Strength
  Earthshaker: 'http://wc3.3dn.ru/Dota2/Heroes/Earthshaker.jpg',
  Sven: 'http://wc3.3dn.ru/Dota2/Heroes/Sven.jpg',
  Tiny: 'http://wc3.3dn.ru/Dota2/Heroes/Tiny.jpg',
  Kunkka: 'http://wc3.3dn.ru/Dota2/Heroes/Kunkka.jpg',
  Beastmaster: 'http://wc3.3dn.ru/Dota2/Heroes/Beastmaster.jpg',
  'Dragon Knight': 'http://wc3.3dn.ru/Dota2/Heroes/Dragon_Knight.jpg',
  Clockwerk: 'http://wc3.3dn.ru/Dota2/Heroes/Clockwerk.jpg',
  Omniknight: 'http://wc3.3dn.ru/Dota2/Heroes/Omniknight.png',
  Huskar: 'http://wc3.3dn.ru/Dota2/Heroes/Huskar.jpg',
  Alchemist: 'http://wc3.3dn.ru/Dota2/Heroes/Alchemist.jpg',
  Brewmaster: 'http://wc3.3dn.ru/Dota2/Heroes/Panda.jpg',
  'Treant Protector': 'http://wc3.3dn.ru/Dota2/Heroes/Treant_Protector.jpg',
  Io: 'http://wc3.3dn.ru/Dota2/Heroes/Guardian_wisp.png',
  'Centaur Warrunner': 'http://wc3.3dn.ru/Dota2/Heroes/Centaur.png',
  Timbersaw: 'http://wc3.3dn.ru/Dota2/Heroes/Goblin_shredder.png',
  Bristleback: 'http://wc3.3dn.ru/Dota2/Heroes/Bristleback.png',
  Tusk: 'http://wc3.3dn.ru/Dota2/Heroes/Tuskar.png',
  'Elder Titan': 'http://wc3.3dn.ru/Dota2/Heroes/Elder_titan.png',
  'Legion Commander': 'http://wc3.3dn.ru/Dota2/Heroes/Legion_Commander.png',
  'Earth Spirit': 'http://wc3.3dn.ru/Dota2/Heroes/Earth_spirit.png',
  Phoenix: 'http://wc3.3dn.ru/Dota2/Heroes/Phoenix.png',
  Marci: 'static/img/Marci.png',
  Mars: 'static/img/Mars.png',
  Dawnbreaker: 'static/img/Dawnbreaker.png',
  Snapfire: 'static/img/Snapfire.png',

  // Agility
  'Anti-Mage': 'http://wc3.3dn.ru/Dota2/Heroes/Antimage.jpg',
  'Drow Ranger': 'http://wc3.3dn.ru/Dota2/Heroes/Drow_Ranger.jpg',
  Juggernaut: 'http://wc3.3dn.ru/Dota2/Heroes/Juggernaut.jpg',
  Mirana: 'http://wc3.3dn.ru/Dota2/Heroes/Mirana.jpg',
  Morphling: 'http://wc3.3dn.ru/Dota2/Heroes/Morhling.jpg',
  'Phantom Lancer': 'http://wc3.3dn.ru/Dota2/Heroes/Phantom_Lancer.jpg',
  'Vengeful Spirit': 'http://wc3.3dn.ru/Dota2/Heroes/Vengeful_Spirit.jpg',
  Riki: 'http://wc3.3dn.ru/Dota2/Heroes/Rikimaru.jpg',
  Sniper: 'http://wc3.3dn.ru/Dota2/Heroes/Sniper.jpg',
  'Templar Assassin': 'http://wc3.3dn.ru/Dota2/Heroes/Templar_assassin.png',
  Luna: 'http://wc3.3dn.ru/Dota2/Heroes/Luna.png',
  'Bounty Hunter': 'http://wc3.3dn.ru/Dota2/Heroes/Bounty_Hunter.jpg',
  Ursa: 'http://wc3.3dn.ru/Dota2/Heroes/Ursa.jpg',
  Gyrocopter: 'http://wc3.3dn.ru/Dota2/Heroes/Gyrocopter.png',
  'Lone Druid': 'http://wc3.3dn.ru/Dota2/Heroes/Lone_Druid.jpg',
  'Naga Siren': 'http://wc3.3dn.ru/Dota2/Heroes/Naga_sirena.png',
  'Troll Warlord': 'http://wc3.3dn.ru/Dota2/Heroes/Troll_warlord.png',
  'Ember Spirit': 'http://wc3.3dn.ru/Dota2/Heroes/Ember_spirit.png',
  'Arc Warden': 'http://wc3.3dn.ru/Dota2/Heroes/Arc_warden.png',
  Hoodwink: 'static/img/Hoodwink.png',
  'Monkey King': 'static/img/Monkey_King.png',
  Pangolier: 'static/img/Pangolier.png',

  // Intelligence
  'Crystal Maiden': 'http://wc3.3dn.ru/Dota2/Heroes/Crystal_Maiden.jpg',
  Puck: 'http://wc3.3dn.ru/Dota2/Heroes/Puck.jpg',
  'Storm Spirit': 'http://wc3.3dn.ru/Dota2/Heroes/Storm_spirit.png',
  Windranger: 'http://wc3.3dn.ru/Dota2/Heroes/Windrunner.jpg',
  Zeus: 'http://wc3.3dn.ru/Dota2/Heroes/Zeus.jpg',
  Lina: 'http://wc3.3dn.ru/Dota2/Heroes/Lina.jpg',
  'Shadow Shaman': 'http://wc3.3dn.ru/Dota2/Heroes/Shadow_Shaman.jpg',
  Tinker: 'http://wc3.3dn.ru/Dota2/Heroes/Tinker.jpg',
  "Nature's Prophet": 'http://wc3.3dn.ru/Dota2/Heroes/Furion.jpg',
  Enchantress: 'http://wc3.3dn.ru/Dota2/Heroes/Enchantress.jpg',
  Jakiro: 'http://wc3.3dn.ru/Dota2/Heroes/Jakiro.jpg',
  Chen: 'http://wc3.3dn.ru/Dota2/Heroes/Chen.jpg',
  Silencer: 'http://wc3.3dn.ru/Dota2/Heroes/Silencer.jpg',
  'Ogre Magi': 'http://wc3.3dn.ru/Dota2/Heroes/Ogre_Magi.jpg',
  Rubick: 'http://wc3.3dn.ru/Dota2/Heroes/Rubick.png',
  Disruptor: 'http://wc3.3dn.ru/Dota2/Heroes/Disruptor.png',
  'Keeper of the Light':
    'http://wc3.3dn.ru/Dota2/Heroes/Keeper_of_the_Light.png',
  'Skywrath Mage': 'http://wc3.3dn.ru/Dota2/Heroes/Skywrath.png',
  Oracle: 'http://wc3.3dn.ru/Dota2/Heroes/Oracle.png',
  Techies: 'http://wc3.3dn.ru/Dota2/Heroes/Techies.png',
  'Dark Willow': 'static/img/Dark_Willow.png',
  'Void Spirit': 'static/img/Void_Spirit.png',

  // |--------------------------------------------------  Dire  --------------------------------------------------|
  // Strength
  Axe: 'http://wc3.3dn.ru/Dota2/Heroes/Axe.jpg',
  Pudge: 'http://wc3.3dn.ru/Dota2/Heroes/Pudge.png',
  'Sand King': 'http://wc3.3dn.ru/Dota2/Heroes/Sand_King.jpg',
  Slardar: 'http://wc3.3dn.ru/Dota2/Heroes/Slardar.jpg',
  Tidehunter: 'http://wc3.3dn.ru/Dota2/Heroes/Tidehunter.jpg',
  'Wraith King': 'http://wc3.3dn.ru/Dota2/Heroes/Skeleton_king.png',
  Lifestealer: 'http://wc3.3dn.ru/Dota2/Heroes/Lifestealer.jpg',
  'Night Stalker': 'http://wc3.3dn.ru/Dota2/Heroes/Balanar.jpg',
  Doom: 'http://wc3.3dn.ru/Dota2/Heroes/Doom_Bringer.jpg',
  'Spirit Breaker': 'http://wc3.3dn.ru/Dota2/Heroes/Barathrum.jpg',
  Lycan: 'http://wc3.3dn.ru/Dota2/Heroes/Lycanthrope.jpg',
  'Chaos Knight': 'http://wc3.3dn.ru/Dota2/Heroes/Chaos_Knight.png',
  Undying: 'http://wc3.3dn.ru/Dota2/Heroes/Undying.png',
  Magnus: 'http://wc3.3dn.ru/Dota2/Heroes/Magnataur.png',
  Abaddon: 'http://wc3.3dn.ru/Dota2/Heroes/Abaddon.png',
  Underlord: 'static/img/Underlord.png',

  // Agility
  Bloodseeker: 'http://wc3.3dn.ru/Dota2/Heroes/Bloodseeker.jpg',
  'Shadow Fiend': 'http://wc3.3dn.ru/Dota2/Heroes/Shadow_Fiend.jpg',
  Razor: 'http://wc3.3dn.ru/Dota2/Heroes/Razor.jpg',
  Venomancer: 'http://wc3.3dn.ru/Dota2/Heroes/Venomancer.png',
  'Faceless Void': 'http://wc3.3dn.ru/Dota2/Heroes/Faceless_Void.jpg',
  'Phantom Assassin': 'http://wc3.3dn.ru/Dota2/Heroes/Phantom_assassin.png',
  Viper: 'http://wc3.3dn.ru/Dota2/Heroes/Viper.jpg',
  Clinkz: 'http://wc3.3dn.ru/Dota2/Heroes/Clinkz.jpg',
  Broodmother: 'http://wc3.3dn.ru/Dota2/Heroes/BroodMother.jpg',
  Weaver: 'http://wc3.3dn.ru/Dota2/Heroes/Nerubian_Weaver.jpg',
  Spectre: 'http://wc3.3dn.ru/Dota2/Heroes/Spectre.jpg',
  Meepo: 'http://wc3.3dn.ru/Dota2/Heroes/Meepo.png',
  'Nyx Assassin': 'http://wc3.3dn.ru/Dota2/Heroes/Nyx_assassin.png',
  Slark: 'http://wc3.3dn.ru/Dota2/Heroes/Slark.png',
  Medusa: 'http://wc3.3dn.ru/Dota2/Heroes/Medusa.png',
  Terrorblade: 'http://wc3.3dn.ru/Dota2/Heroes/Terrorblade.png',

  // Intelligence
  Bane: 'http://wc3.3dn.ru/Dota2/Heroes/Bane.jpg',
  Lich: 'http://wc3.3dn.ru/Dota2/Heroes/Lich.jpg',
  Lion: 'http://wc3.3dn.ru/Dota2/Heroes/Lion.jpg',
  'Witch Doctor': 'http://wc3.3dn.ru/Dota2/Heroes/Witch_Doctor.jpg',
  Enigma: 'http://wc3.3dn.ru/Dota2/Heroes/Enigma.jpg',
  Necrophos: 'http://wc3.3dn.ru/Dota2/Heroes/Necrolyte.jpg',
  Warlock: 'http://wc3.3dn.ru/Dota2/Heroes/Warlock.jpg',
  'Queen of Pain': 'http://wc3.3dn.ru/Dota2/Heroes/Queen_of_Pain.jpg',
  'Death Prophet': 'http://wc3.3dn.ru/Dota2/Heroes/Death_Prophet.jpg',
  Pugna: 'http://wc3.3dn.ru/Dota2/Heroes/Pugna.jpg',
  Dazzle: 'http://wc3.3dn.ru/Dota2/Heroes/Dazzle.jpg',
  Leshrac: 'http://wc3.3dn.ru/Dota2/Heroes/Leshrac.jpg',
  'Dark Seer': 'http://wc3.3dn.ru/Dota2/Heroes/Dark_Seer.jpg',
  Batrider: 'http://wc3.3dn.ru/Dota2/Heroes/Batrider.jpg',
  'Ancient Apparition': 'http://wc3.3dn.ru/Dota2/Heroes/Ancient_Apparition.jpg',
  Invoker: 'http://wc3.3dn.ru/Dota2/Heroes/Invoker.jpg',
  'Outworld Destroyer': 'http://wc3.3dn.ru/Dota2/Heroes/Destroyer.jpg',
  'Shadow Demon': 'http://wc3.3dn.ru/Dota2/Heroes/Shadow_Demon.jpg',
  Visage: 'http://wc3.3dn.ru/Dota2/Heroes/Visage.png',
  'Winter Wyvern': 'http://wc3.3dn.ru/Dota2/Heroes/Winter_Wyvern.png',
  Grimstroke: 'static/img/Grimstroke.png',
}

function onsubmitHandler() {
  const form = document.getElementById('form')

  let url = '/?'
  for (let elem of form.elements) {
    if (elem.type != 'button' && elem.value != '') {
      url += `${elem.name}=${elem.value}&`
    }
  }
  url = url.slice(0, -1) // Delete last '&' char

  fetch(url).then(response => {
    window.location.href = url
  })
}

function onchangeHandler(e, inputName) {
  const img = document.querySelector(`.${inputName}`)

  if (HEROES.hasOwnProperty(e.value)) {
    img.src = HEROES[e.value]
  } else {
    img.src = 'static/img/alt.jpg'
  }
}

// After loading window Checks if inputs were filled
window.onload = function () {
  const inputs = document.querySelectorAll('.form-control')

  // console.log("Onload")
  for (let input of inputs) {
    // console.log(input.value)

    if (input.value !== '' && HEROES.hasOwnProperty(input.value)) {
      const img = document.querySelector(`.${input.name}`)
      img.src = HEROES[input.value]
    }
  }
}
