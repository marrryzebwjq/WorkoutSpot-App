

class AccueilController {

  constructor(model){

      this.view = new AccueilView();
      this.model = model;

      // update
      this.updateMap = new UpdateMap(this.view, this.model);
      this.updateLieux = new UpdateLieux(this.view, this.model);

      //  action
      let actionLieux = (event) => {
        this.model.toggleLieux();
      }

      this.view.lieux.addEventListener('click', actionLieux);

      /* ACTIONS SUR LA MAP */
      let x = 0, y = 0;         //Coordonnees de la souris

      this.view.div.addEventListener("mousedown", (event) => {
        this.model.setIsMApMoving(true);
        x = event.clientX;
        y = event.clientY;
      });
      
      this.view.div.addEventListener("mousemove", (event) => {
        this.model.moveMapOrigin(event.clientX - x, event.clientY - y);
        x = event.clientX;
        y = event.clientY;
      });
      
      this.view.div.addEventListener("mouseup", (event) => {
        this.model.setIsMApMoving(false);
        x = event.clientX;
        y = event.clientY;
      });

      this.updateMap.updateLieux(model.lieux, model.xMap, model.yMap);

  }
}


