# monster-slayer

Monster Slayer game

Inspired by Udemy Vue3 course


## Game Rules

Simple game to show off basic Vue.js functionality

### Player Abilities

Player attack damage: between 5-12 HP per attack
Player special attack: available every 3 turns
Player heal: available every turn

### Monster Abilities

Monster attack damage: between 8-15 HP per attack
can attack when player attacks or uses healing potion


## Win Conditions:

Win - player kills monster
Loss - monster kills player
Draw - player kills monster and monster kills player on same turn


## Vue Concepts

- Computed properties
- Dynamic Style binding / Interpolation: player and monster health status, battle log
- watch: monitor player/monster health to check win condition
- v-if: for conditional content (You lost | You won | It's a draw) - if winner is truthy, then Game is over
- v-for: to set battle log (loop on all messages in battle log to create list items on screen)
- v-bind: for dynamic html classes and styles

