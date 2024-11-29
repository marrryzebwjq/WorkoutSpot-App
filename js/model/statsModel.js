/**
 * Modèle pour le module de Tracking
 * @author Marie POINT
 */
class StatsModel extends Observable {
    constructor() {
        super();
        //this.stats = ['a', 'b', 'c'];
        this.stats = [{
            name : 'push up',
            number1 : 0,
            number2 : 0,
            id: 'push up' },
            {
            name : 'dips',
            number1 : 20,
            number2 : 10,
            id: 'dips' },
            {
            name : 'jumping jack',
            number1 : 2,
            number2 : 5,
            id: 'jumping jack' },]

    }

    addActivity(activity) {
        //Ajoute des boutons pour créer une activité
        if (!this.stats.includes(activity)) {
            this.stats.push(activity);
            this.setChanged();
            this.notifyObservers();
        }
    }
    setActivity(activity) {
        //param = "nom", nombre, nombre
        //ajoute/modifie dans la liste d'activités
    }
    removeActivity(activity) {
        this.stats = this.stats.filter((activity) => activity !== name);
        this.setChanged();
        this.notifyObservers();
    }
}
