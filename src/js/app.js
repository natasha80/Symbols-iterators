/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Лучник1',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник2',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  [Symbol.iterator]() {
    let currentPerson = 0;
    const persons = Object.values(this.members);
    return {
      next() {
        if (currentPerson <= this.members.length) {
          currentPerson += 1;
          return {
            value: persons[currentPerson - 1],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}