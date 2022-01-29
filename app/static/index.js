// http://wc3.3dn.ru/publ/dota2/raznoe_dota_2/icons_heroes_dota_2/52-1-0-676
// https://liquipedia.net/dota2/Void_Spirit
// https://dota2.fandom.com/wiki/Heroes
const HEROES_NAMES = {
  Earthshaker: ['шейкер', 'earthshaker'],
  Sven: ['свен', 'sven'],
  Tiny: ['тини', 'tiny'],
  Kunkka: ['кунка', 'kunkka'],
  Beastmaster: ['бист', 'бистмастер', 'beastmaster'],
  'Dragon Knight': ['дк', 'драгон кнайт', 'dragon knight'],
  Clockwerk: ['клок', 'клокверк', 'clockwerk'],
  Omniknight: ['омник', 'omniknight'],
  Huskar: ['хускар', 'хуск', 'huskar'],
  Alchemist: ['aлхимик', 'алхим','alchemist'],
  Brewmaster: ['панда', 'brewmaster'],
  'Treant Protector': ['трент', 'дерево', 'treant protector'],
  Io: ['ио', 'висп', 'io'],
  'Centaur Warrunner': ['кентавр', 'кент', 'centaur warrunner'],
  Timbersaw: ['тимбер', 'timbersaw'],
  Bristleback: ['брист', 'бристлбек', 'bristleback'],
  Tusk: ['туск', 'тускар', 'tusk'],
  'Elder Titan': ['титан', 'элдер титан', 'elder titan'],
  'Legion Commander': ['лега', 'легионка', 'legion commander'],
  'Earth Spirit': ['земеля', 'землепанда', 'earth spirit'],
  Phoenix: ['феникс', 'phoenix'],
  Marci: ['марси', 'marci'],
  Mars: ['марс', 'mars'],
  Dawnbreaker: ['дб', 'dawnbreaker'],
  Snapfire: ['бабка', 'snapfire'],

  // Agility
  'Anti-Mage': ['ам', 'антимаг', 'anti-mage'],
  'Drow Ranger': ['дровка', 'тракса', 'drow ranger'],
  Juggernaut: ['джага', 'джагер', 'juggernaut'],
  Mirana: ['мирана', 'mirana'],
  Morphling: ['морф', 'morhling'],
  'Phantom Lancer': ['пл', 'лансер', 'фантом лансер', 'phantom_Lancer'],
  'Vengeful Spirit': ['венга', 'vengeful_Spirit'],
  Riki: ['рики', 'rikimaru'],
  Sniper: ['снайпер', 'снайп', 'sniper'],
  'Templar Assassin': ['та', 'темпларка', 'ланая', 'templar assassin'],
  Luna: ['луна', 'luna'],
  'Bounty Hunter': ['бх', 'bounty hunter'],
  Ursa: ['урса', 'ursa'],
  Gyrocopter: ['гиро', 'гирокоптер', 'gyrocopter'],
  'Lone Druid': ['друид', 'lone druid'],
  'Naga Siren': ['нага', 'naga siren'],
  'Troll Warlord': ['тролль', 'troll warlord'],
  'Ember Spirit': ['эмбер', 'эмбер спирит', 'ember spirit'],
  'Arc Warden': ['арк', 'варден', 'арк варден', 'arc', 'arc warden'],
  Hoodwink: ['белка', 'худвик', 'hoodwink'],
  'Monkey King': ['мк', 'monkey king'],
  Pangolier: ['панго', 'панголиер', 'pangolier'],

  // Intelligence
  'Crystal Maiden': ['цм', 'цмка', 'кристалка', 'crystal maiden'],
  Puck: ['пак', 'puck'],
  'Storm Spirit': ['шторм', 'storm spirit'],
  Windranger: ['вр', 'windrunner'],
  Zeus: ['зевс', 'zeus'],
  Lina: ['лина', 'lina'],
  'Shadow Shaman': ['шд', 'демон', 'shadow shaman'],
  Tinker: ['тинкер', 'tinker'],
  "Nature's Prophet": ['фура', 'фурион', 'furion'],
  Enchantress: ['энча', 'коза', 'enchantress'],
  Jakiro: ['джакиро', 'jakiro'],
  Chen: ['чен', 'chen'],
  Silencer: ['сало', 'silencer'],
  'Ogre Magi': ['огр', 'огр маг', 'ogre magi'],
  Rubick: ['рубик', 'rubick'],
  Disruptor: ['дизраптор', 'disruptor'],
  'Keeper of the Light':
    ['котл', 'котел', 'keeper of the light'],
  'Skywrath Mage': ['петух', 'skywrath'],
  Oracle: ['оракл', 'оракул', 'oracle'],
  Techies: ['течис', 'минер', 'techies'],
  'Dark Willow': ['дс', 'дарксир', 'dark willow'],
  'Void Spirit': ['войд', 'воид', 'void spirit'],

  // |--------------------------------------------------  Dire  --------------------------------------------------|
  // Strength
  Axe: ['акс', 'axe'],
  Pudge: ['падж', 'пудж', 'pudge'],
  'Sand King': ['ск', 'сенд кинг', 'sand king'],
  Slardar: ['слардар', 'slardar'],
  Tidehunter: ['тайд', 'tidehunter'],
  'Wraith King': ['вк', 'wraith king', 'skeleton king'],
  Lifestealer: ['гуля', 'lifestealer'],
  'Night Stalker': ['баланар', 'night stalker', 'balanar'],
  Doom: ['дум', 'doom', 'doom bringer'],
  'Spirit Breaker': ['бара', 'spirit breaker', 'barathrum'],
  Lycan: ['ликан', 'lycan', 'lycanthrope'],
  'Chaos Knight': ['цк', 'чаос', 'chaos knight'],
  Undying: ['зомби', 'андаинг', 'undying'],
  Magnus: ['магнус', 'magnataur'],
  Abaddon: ['абадон', 'абаддон', 'abaddon'],
  Underlord: ['питлорд', 'underlord'],

  // Agility
  Bloodseeker: ['сикер', 'блуд', 'блудсикер', 'bloodseeker'],
  'Shadow Fiend': ['сф', 'shadow fiend'],
  Razor: ['разор', 'razor', 'razzor'],
  Venomancer: ['веник', 'веномансер', 'venomancer'],
  'Faceless Void': ['войд', 'воид', 'faceless void'],
  'Phantom Assassin': ['па', 'мортра', 'фантомка', 'phantom assassin'],
  Viper: ['вайпер', 'viper'],
  Clinkz: ['клинкз', 'clinkz'],
  Broodmother: ['бруда', 'broodmother'],
  Weaver: ['вивер', 'weaver'],
  Spectre: ['спектра', 'spectre'],
  Meepo: ['мипо', 'meepo'],
  'Nyx Assassin': ['никс', 'nyx assassin'],
  Slark: ['сларк', 'slark'],
  Medusa: ['медуза', 'medusa'],
  Terrorblade: ['тб', 'терор', 'terrorblade'],

  // Intelligence
  Bane: ['бейн', 'беин', 'bane'],
  Lich: ['лич', 'lich'],
  Lion: ['лион', 'lion'],
  'Witch Doctor': ['вич доктор', 'вд', 'witch doctor'],
  Enigma: ['энигма', 'enigma'],
  Necrophos: ['некр', 'necrophos'],
  Warlock: ['варлок', 'warlock'],
  'Queen of Pain': ['квопа', 'queen of pain'],
  'Death Prophet': ['банша', 'дп', 'death prophet'],
  Pugna: ['пугна', 'pugna'],
  Dazzle: ['дазл', 'dazzle'],
  Leshrac: ['лешрак', 'leshrac'],
  'Dark Seer': ['дс', 'дарксир', 'dark seer'],
  Batrider: ['батраидер', 'батрайдер', 'batrider'],
  'Ancient Apparition': ['аппарат', 'аа', 'aa', 'ancient apparition'],
  Invoker: ['инвок', 'инвокер', 'invoker'],
  'Outworld Destroyer': ['од', 'outworld destroyer'],
  'Shadow Demon': ['шд', 'демон', 'shadow demon'],
  Visage: ['визаж', 'visage'],
  'Winter Wyvern': ['виверна', 'winter wyvern'],
  Grimstroke: ['гримстрок', 'грим', 'grimstroke'],
}

const HEROES_LINKS = {
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
  const inputGroup = document.querySelector(`.${inputName}`)

  // If heroName exists change input to main name
  let heroInput = e.value.trim()
  let heroExists = false
  for (let heroName of Object.keys(HEROES_NAMES)) {
    if (HEROES_NAMES[heroName].includes(heroInput.toLowerCase())) {
        heroInput = heroName
        heroExists = true
        // Change text in the input
        const input = inputGroup.querySelector(`input`)
        input.value = heroInput
        break
    }
  }
  // Change image src
  const img = inputGroup.querySelector('img')
  if (heroExists) {
    img.src = HEROES_LINKS[heroInput]
  } else {
    img.src = 'static/img/alt.jpg'
  }
}

// After loading window Checks if inputs were filled
window.onload = function () {
  const inputs = document.querySelectorAll('.form-control')

  // Change img's src if it's a property of HEROES_LINKS
  for (let input of inputs) {
    if (input.value !== '' && HEROES_LINKS.hasOwnProperty(input.value)) {
      const img = document.querySelector(`.${input.name} img`)
      img.src = HEROES_LINKS[input.value]
    }
  }
}
