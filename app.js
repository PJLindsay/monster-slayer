
const maxPlayerDamage = 12
const minPlayerDamage = 6

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
      monsterHealth: 100
    }
  },
  methods: {
    /*
    ** Player attacking monster
    ** any time player attacks monster, monster will counter-attack
    ** attack damage between 5-12 HP
    */
    attackMonster() {
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
    }
  }
})

app.mount('#game')