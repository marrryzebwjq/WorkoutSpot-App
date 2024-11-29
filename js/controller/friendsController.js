/**
 * Controler pour la gestion de la liste d'amis
 * @author Elliot CALLET
 */
class FriendsController {
  constructor(model) {
      this.view = new FriendsView();
      this.model = model;

      // update
      this.updateFriends = new UpdateFriends(this.view, this.model);

      // Actions
      let actionAdd = (event) => {
          const name = this.view.input.value.trim();
          if (name) {
              this.model.addFriend(name);
              this.view.input.value = ''; // Clear input
          }
      };

      this.view.addButton.addEventListener('click', actionAdd);

      let actionRemove = (name) => {
            if (name) {
                this.model.removeFriend(name);
                this.view.input.value = ''; // Clear input
            }
        }


      this.view.friendList.addEventListener('click', (event) => {
          if (event.target.classList.contains('btn-delete')) {
              const name = event.target.dataset.name;
              actionRemove(name);
          }
      });
  }
}
