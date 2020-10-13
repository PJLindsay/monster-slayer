
// normal attack damage range
const maxPlayerDamage = 12
const minPlayerDamage = 6

const maxPlayerHitPoints = 100

// special attack damage range
const maxPlayerDamageSpecial = 25
const minPlayerDamageSpecial = 10

/* Monster Values */
const maxMonsterDamage = 15
const minMonsterDamage = 8

const maxMonsterHitPoints = 100

/*
**  helper methods
*/
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: maxPlayerHitPoints,
      monsterHealth: maxMonsterHitPoints,
      currentRound: 0,
      winner: null
    }
  },
  computed: {
    monsterHealthBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: '0%' }
      }
      return { width: this.monsterHealth + '%' }
    },
    playerHealthBarStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%' }
      }
      return { width: this.playerHealth + '%' }
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  watch: {
    /* check for win conditions: Player perspective
    ** NOTE: it is possible that both watchers will fire on same turn and
    ** we will calculate a DRAW twice (once for monster and once for player)
    */
   playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // DRAW
        this.winner = 'draw'
      } else if (value <= 0) {
        // PLAYER LOSES
        this.winner = 'monster'
      }
    },
    /* check for win conditions: Monster perspective
    ** NOTE: it is possible that both watchers will fire on same turn and
    ** we will calculate a DRAW twice (once for monster and once for player)
    */
   monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // DRAW
        this.winner = 'draw'
      } else if (value <= 0) {
        // MONSTER LOSES
        this.winner = 'player'
      }
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
      const attackDamage = getRandomValue(minPlayerDamage, maxPlayerDamage)
      this.monsterHealth -= attackDamage

      // Monster's counter-attack
      this.attackPlayer()
    },

    /*
    ** Monster attacking player
    */
    attackPlayer() {
      const attackDamage = getRandomValue(minPlayerDamage, maxPlayerDamage)
      this.playerHealth -= attackDamage
    },

    /*
    ** Player's self-heal ability (drink health potion)
    ** cannot heal higher than player's maximum HitPoints
    ** Monster can attack player when they use heal potion
    */
    healPlayer() {
      this.currentRound++
      const healValue = getRandomValue(8, 20)

      if (this.playerHealth + healValue > maxPlayerHitPoints) {
        this.playerHealth = maxPlayerHitPoints
      } else {
        this.playerHealth += healValue
      }

      // Monster gets to attack
      this.attackPlayer()
    },

    /*
    ** Player's special attack on monster
    */
    specialAttackMonster() {
      this.currentRound++
      const attackDamage = getRandomValue(minPlayerDamageSpecial, maxPlayerDamageSpecial)
      this.monsterHealth -= attackDamage

      // Monster's counter-attack
      this.attackPlayer()
    },

    /*
    ** Start Game: reset game status values
    */
    startGame() {
      this.playerHealth = maxPlayerHitPoints
      this.monsterHealth = maxMonsterHitPoints
      this.winner = null
      this.currentRound = 0
    },

    surrender() {
      this.winner = 'monster'
    }

  }
})

app.mount('#game')