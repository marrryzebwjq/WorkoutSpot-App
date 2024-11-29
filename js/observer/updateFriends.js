/**
 * Classe update pour la gestion de la liste d'amis
 * @author Elliot CALLET
 */

class UpdateFriends extends Observer {
  constructor(view, model) {
    super();
    this.view = view;
    model.addObservers(this);
    // appel initial pour afficher la liste d'amis par défaut
    this.view.renderFriendList(model.friends);
  }

  update(model, object) {
    this.view.renderFriendList(model.friends);
  }
}