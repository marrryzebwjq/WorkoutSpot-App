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
      this.view.add.addEventListener('click', () => model.addActivity());





      let actionAdd = (event) => {
          const name = this.view.input.value.trim();
          if (name) {
              this.model.addFriend(name);
              this.view.input.value = ''; // Clear input
          }
      };
      let actionRemove = (name) => {
          if (name) {
              this.model.removeFriend(name);
              this.view.input.value = ''; // Clear input
          }
      };

      this.view.add.addEventListener('click', actionAdd);
      this.view.activitiesList.addEventListener('click', (event) => {
          if (event.target.classList.contains('btn-delete')) {
              const name = event.target.dataset.name;
              actionRemove(name);
          }
      });
  }
}
