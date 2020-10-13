
// normal attack damage range
const maxPlayerDamage = 12
const minPlayerDamage = 6

// special attack damage range
const maxPlayerDamageSpecial = 25
const minPlayerDamageSpecial = 10

const maxMonsterDamage = 15
const minMonsterDamage = 8

/*
**  helper methods
*/
function getRandomDamageValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    }
  },
  computed: {
    monsterHealthBarStyle() {
      return { width: this.monsterHealth + '%' }
    },
    playerHealthBarStyle() {
      return { width: this.playerHealth + '%' }
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  methods: {
    /*
    ** Player attacking monster
    ** any time player attacks monster, monster will counter-attack
    ** attack damage between 5-12 HP
    */
    attackMonster() {
      this.currentRound++
      const attackDamage = getRandomDamageValue(minPlayerDamage, maxPlayerDamage)
      this.monsterHealth -= attackDamage

      // Monster's counter-attack
      this.attackPlayer()
    },

    /*
    ** Monster attacking player
    */
    attackPlayer() {
      const attackDamage = getRandomDamageValue(minPlayerDamage, maxPlayerDamage)
      this.playerHealth -= attackDamage
    },

    /*
    ** Player's special attack on monster
    */
    specialAttackMonster() {
      this.currentRound++
      const attackDamage = getRandomDamageValue(minPlayerDamageSpecial, maxPlayerDamageSpecial)
      this.monsterHealth -= attackDamage

      // Monster's counter-attack
      this.attackPlayer()
    },

  }
})

app.mount('#game')