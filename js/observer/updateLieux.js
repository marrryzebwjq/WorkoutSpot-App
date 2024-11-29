class UpdateLieux extends Observer {
    
    constructor(view, model) {
        super();
        this.view = view;
        model.addObservers(this);
    }

    update(model, object) {
        if (model.isLieuxToggled){
            this.view.lieux.style.backgroundColor = "red";
        }
        else {
            this.view.lieux.style.backgroundColor = "black";
        }
    }
}