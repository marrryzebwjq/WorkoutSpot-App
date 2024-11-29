/**
 * Modèle pour le module de Tracking
 * @author Marie POINT
 */
class StatsModel extends Observable {
    constructor() {
        super();
        //this.stats = ['a', 'b', 'c'];
        this.exercices = ['dips', 'jumping jacks', 'pull up', 'push up', 'squats']
        this.stats = [{
            name : 'push up',
            number1 : 0,
            number2 : 0,
            id : 'push up' },
            {
            name : 'dips',
            number1 : 20,
            number2 : 10,
            id : 'dips' },
            {
            name : 'jumping jack',
            number1 : 2,
            number2 : 5,
            id : 'jumping jack' },]

    }

    reloadView(){
        this.setChanged();
        this.notifyObservers();
    }

    addActivity(name, number1, number2) {
        this.stats.unshift({ name:name, //comme push mais ça met en haut de la liste
            number1:number1,
            number2:number2,
            id:name});
        this.setChanged();
        this.notifyObservers();
    }


}
