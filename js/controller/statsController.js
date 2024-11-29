/**
 * Controller pour le Tracking
 * @author Marie POINT
 */
class StatsController {

  constructor(model){
      this.view = new StatsView();
      this.model = model;


      // update
      let updateStats = new UpdateStats(this.view, this.model);
      this.model.addObservers(updateStats);

      // action
      this.view.buttonSuivis.addEventListener('click', () => model.reloadView());
      this.view.buttonCetteSeance.addEventListener('click', () => model.reloadView());


      this.view.addButton.addEventListener('click', () => displayForm());
      this.view.confirm.addEventListener('click', () => confirm());




      let displayForm = () => {
          this.view.activityForm.style.display = 'block';
          this.view.addButton.style.display = 'none';
      }

      let confirm = () => {
          //input
          const name = this.view.addName.value;
          const number1 = this.view.addNumber1.value;
          const number2 = this.view.addNumber2.value;

          //ajout dans le modèle
          this.model.addActivity(name, number1, number2);

          //fin
          this.view.activityForm.style.display = 'none';
          this.view.addButton.style.display = 'block';
          this.view.addName.value = '';
          this.view.addNumber1.value = '';
          this.view.addNumber2.value = '';

      }


  }
}
