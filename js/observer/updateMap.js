/**
 * Observateur du modèle qui met à jour la carte et les lieux associés
 * @author Monique RIMBERT
 */
class UpdateMap extends Observer{
    constructor(view, model){
      super();
      this.map = view.div;
  
      this.pinnedSite = [];
      model.addObservers(this);

    }
  
    /**
     * 
     * @param {Array<Lieu>} lieu 
     * @param {Number} x 
     * @param {Number} y 
     */
    addButton(lieu, x, y){
  
      let button = document.createElement("a");
  
      button.href = "#";
  
      let dy = lieu.y + y;
      let dx = lieu.x + x;
  
      let top = dy + "px";
      let left = dx + "px";
  
      //button.classList.add("cercle-1");
      button.setAttribute("style",`background-image:url("img/pin_unselected.svg");
                                  background-position: bottom; 
                                  height:33px; 
                                  width:34px;
                                  /*border-radius:100%;*/
                                  position:absolute; 
                                  left:` + left + 
                                  ";top: " + top);
  
      this.map.appendChild(button);
      this.pinnedSite.push(button);
      console.log("Add lieu", lieu.name);
    }
  
    /**
     * 
     * @param {*} lieux 
     * @param {*} x 
     * @param {*} y 
     */
    updateLieux(lieux, xMap, yMap){
      this.pinnedSite.forEach((element) => element.remove());

      //let dh = this.map.getBoundingClientRect().height;
      //let dw = this.map.getBoundingClientRect().width;

      let dh = window.innerHeight;
      let dw = window.innerWidth;
  
      console.log("innerHeight=", dh, " innerWidth=", dw);
      lieux.forEach((object) => {
        if (Math.abs(object.x - xMap) >= 0 && Math.abs(object.x - xMap) <= dw && Math.abs(object.y - yMap) <= dh && Math.abs(object.y - yMap) >= 0)
          console.log("dy=", Math.abs(object.y - yMap), "  dx=", Math.abs(object.x - xMap));
          this.addButton(object, xMap, yMap);
      })
    }
  
    update(observable, object){
      let res = 'left '+observable.xMap + 'px top '+observable.yMap +'px;';
  
      this.map.setAttribute("style", 'background-position: '+ res);
      this.map.style.backgroundImage = 'url("img/map.webp")';
      this.map.style.height='100vh';
  
      this.updateLieux(observable.lieux, observable.xMap, observable.yMap)
    }
  }
  