class Profile {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.seances = [];
    }
    ajouterSeance(seance) {
        this.seances.push(seance);
    }
}

class Seance {
    constructor(id_profile, date) {
        this.id_profile = id_profile;
        this.date = date;
        this.exercices = [];
    }
    ajouterExercice(exercice) {
        this.exercices.push(exercice);
    }
}

class Exercice {
    constructor(id_ex, rep) {
        this.id_ex = id_ex;
        this.rep = rep;
    }
}

class Lieu {
    constructor(name, x, y, description = "", pic_horaire = null) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.description = description;
        this.pic_horaire = pic_horaire;
    }
}

class AccueilModel extends Observable {
    /**
     * Contient sous forme json les lieux qui seront indiqués sur la carte
     * @author Monique RIMBERT
     */
    static data = `{
    "elements":[
        {
            "x":1070,
            "y":200,
            "name":"Sports enfants",
            "description":"lorem ipsum",
            "affluence":0.001
        },
        {
            "x":535,
            "y":840,
            "name":"Hippodrome",
            "description":"lorem ipsum",
            "affluence":0.999
        },
        {
            "x":1465,
            "y":290,
            "name":"Parks v2",
            "description":"lorem ipsum",
            "affluence":0.1569
        },
        {
            "x":1695,
            "y":970,
            "name":"Minigolf",
            "description":"lorem ipsum",
            "affluence":0.0214
        },
        {
            "x":310,
            "y":390,
            "name":"Parc de la rivière",
            "description":"lorem ipsum",
            "affluence":0.156
        },
        {
            "x":700,
            "y":900,
            "name":"PARKS",
            "description":"des barres etc.",
            "affluence":0.548
        },
        {
            "x":975,
            "y":369,
            "name":"Jardin des plantes",
            "description":"des trucs",
            "affluence":0.111
        }
    ]
}`;
    constructor(){
        super();
        this.isLieuxToggled = false;
        this.profiles = [
            new Profile(1, 'John'),
            new Profile(2, 'Jake')
        ];


        /**
         *  RELATIF A LA CARTE 
         * */
        this.isMapMoving = false;

        this.imageMap = new Image();
        this.imageMap.src = "img/map.webp";
        
        this.xMap = 0;
        this.yMap = 0;

        this.lieux = [];
        this.getLieux();
    }

    /**
     * Remplie le tableau des lieux à partir des données json
     * @author Monique RIMBERT
     */
    getLieux(){
        if (this.lieux.length < 1) {
            let reader = JSON.parse(AccueilModel.data)

            reader.elements.forEach((lieu) => this.lieux.push(new Lieu(lieu.name, lieu.x, lieu.y, lieu.description, lieu.affluence)));
        }

        //console.log(this.lieux);
        return this.lieux
    }

    /**
     * Place l'image de la carte aux coordonnés entrées
     * @author Monique RIMBERT
     * @param {Number} x Coordonnée sur l'axe horizontale
     * @param {Number} y Coordonnée sur l'axe horizontale
     */
    setMapOrigin(x, y) {
        this.xMap = x%this.imageMap.width;
        this.yMap = y%this.imageMap.height;

        console.log("accueilModel.js::setMapOrigin(x, y)::", this.xMap, this.yMap);
        super.setChanged();
        super.notifyObservers();
    }

    /**
     * Calcule les nouvelles coordoonées et déplace la map
     * @author Monique RIMBERT
     * @param {Number} deltaX Deplacement sur l'axe horizontale 
     * @param {Number} deltaY Deplacement sur l'axe verticale
     */
    moveMapOrigin(deltaX, deltaY) {
        let x = this.xMap + deltaX;
        let y = this.yMap + deltaY;

        if (this.isMapMoving){
            this.setMapOrigin(x, y);
        }
    }

    /**
     * Affecte l'attribut isMapMoving
     * @author Monique RIMBERT
     * @param {Boolean} b 
     */
    setIsMApMoving(b) {
        this.isMapMoving = b;
        super.setChanged();
        super.notifyObservers();
    }

    ajouterSeanceAProfil(id_profile, seance) {
        const profil = this.profiles.find(p => p.id === id_profile);
        if (profil) {
            profil.ajouterSeance(seance);
        } else {
            console.log(`Profil avec id ${id_profile} non trouvÃ©.`);
        }
    }

    ajouterExerciceASeance(seance, exercice) {
        seance.ajouterExercice(exercice);
    }

    toggleLieux() {
        this.isLieuxToggled = !this.isLieuxToggled;
        console.log(this.isLieuxToggled);
        super.setChanged();
        super.notifyObservers();
    }
}


