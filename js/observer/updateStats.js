/**
 * Classe update pour le Tracking
 * @author Marie POINT
 */
class UpdateStats extends Observer {
  constructor(view, model) {
    super();
    this.view = view;
    model.addObservers(this);
    //appel initial pour le par défaut
    //this.view.renderFriendList(model.friends);
    this.view.createActivities(model.stats);
  }

  update(model, object) {
    //this.view.renderFriendList(model.friends);
    this.view.createActivities(model.stats);
    //this.view.count.textContent = observable.compteur
    //this.view.buttonminus.disabled = observable.disabledminus
    //this.view.buttonplus.disabled  = observable.disabledplus
  }
}