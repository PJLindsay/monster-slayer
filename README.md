# monster-slayer

Monster Slayer game - showcase basic Vue.js functionality

## Game Rules

### Player Abilities

- Player attack damage - (5-12 HP) each round
- Player heal: available (8-20 HP) each round
- Player special attack - (10- 25 HP) every 3rd round

### Monster Abilities

Monster attack damage: between 8-15 HP per attack
can attack when player attacks or uses healing potion


## Win Conditions:

- Win: player kills monster
- Loss: monster kills player
- Draw: player kills monster and monster kills player on same turn


## Vue Concepts

- Computed properties
- Dynamic Style binding / Interpolation: player and monster health status, battle log
- watch: monitor player/monster health to check win condition
- v-if: for conditional content (You lost | You won | It's a draw) - if winner is truthy, then Game is over
- v-for: to set battle log (loop on all messages in battle log to create list items on screen)
- v-bind: for dynamic html classes and styles

