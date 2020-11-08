const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
    it('tests default age is 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('constructor', () => {
    it('tests default hunger is 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
});

describe('constructor', () => {
    it('tests default fitness is 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increases the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
});

describe('growUp', () => {
    it('decreases the hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
});

describe('walk', () => {
    it('fitness maxes out at 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('Pet hunger should decrease by 3 when fed', () => {
        const pet = new Pet('fido');
        pet.hunger = 10
        pet.feed()

        expect(pet.hunger).toEqual(7);
    });
});

describe('constructor', () => {
    it('pet hunger should never go below 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 2
        pet.feed()
        expect(pet.hunger).toEqual(0)
    });
});

describe('checkUp', () => {
    it('if fitness is less than 3 AND hunger is more than 5 pet should say it is hungry and needs walk', () => {
        const pet = new Pet('fido');
        pet.hunger = 10
        pet.fitness = 1
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
    });
});

describe('checkUp', () => {
    it('if fitness is less than 3 but hunger is above fine pet should ask for walk', () => {
        const pet = new Pet('fido');
        pet.fitness = 1
        expect(pet.checkUp()).toEqual('I need a walk')
    });
});

describe('checkUp', () => {
    it('if hunger is more than 5 but fitness is more than 3 pet should say it is hungry', () => {
        const pet = new Pet('fido');
        pet.hunger = 7
        pet.fitness = 10;
        expect(pet.checkUp()).toEqual('I am hungry')
    });
});

describe('checkUp', () => {
    it('if hunger is less than 5 and fitness is more than 3 pet should say it is feeling great', () => {
        const pet = new Pet('fido');
        pet.fitness = 10
        pet.hunger = 0
        expect(pet.checkUp()).toEqual('I feel great!')
    });
});

describe('isAlive', () => {
    it('tells us pet is dead if it is over 30, too hungry and too unfit', () => {
        const pet = new Pet('fido');
        pet.fitness = -1;
        pet.hunger = 11;
        pet.age = 31;
        expect(pet.isAlive).toEqual(false)
    });
});

describe('feed_error', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Dave');

        pet.age = 31;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('pet_parent', () => {
    it('ensures that the parent pet has successfully inherited the child pet', () => {
        let Dave = new Pet('Dave');
        let Amelia = new Pet('Amelia');
        Dave.haveBaby(Amelia);
        expect(Dave.children).toEqual(Amelia);
    });
});
