class Key {
    private signature: string = Math.random().toString(36).substring(2);

    getSignature(): string {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Ви увійшли до будинку");;
        } else {
            console.log("Двері зачинені. Ви не можете увійти.");
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинені.");
        } else {
            console.log("Двері не відчинені. Ключ не підходить.");
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };


// В класі Key constructor використовувати не потрібно
// class Key {
//   private signature: .....
//  }
// В класі Person для властивості Key використайте скорочену ініціалізацію
// class Person {
//    constructor(private key: Key) { }
// }
// В класі House для властивості Key використайте скорочену ініціалізацію
// Властивості door і tenants оголосіть до конструктора, вкажіть початкове значення, модифікатори доступу і типізуйте їх.
// В класі MyHouse constructor і super використовувати не потрібно, так як нових властивостей додавати не будемо.