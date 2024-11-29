/**
 * Modèle pour le module de la liste d'amis
 * @author Elliot CALLET
 */
class FriendsModel extends Observable {
    constructor() {
        super();
        this.friends = ['Alice', 'Bob', 'Charlie'];
    }

    addFriend(name) {
        if (!this.friends.includes(name)) {
            this.friends.push(name);
            this.setChanged();
            this.notifyObservers();
        }
    }

    removeFriend(name) {
        this.friends = this.friends.filter((friend) => friend !== name);
        this.setChanged();
        this.notifyObservers();
    }
}
