const model = new AccueilModel();
const nouvelleSeance = new Seance(1, '2024-10-23');
model.ajouterSeanceAProfil(1, nouvelleSeance);
const exercice1 = new Exercice('Ex1', 15);
model.ajouterExerciceASeance(nouvelleSeance, exercice1);
console.log(model.profiles);

let controler = new AccueilController(model);