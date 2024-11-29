class AccueilView {

    constructor(){
  
      this.div = document.createElement('div');
      this.div.innerHTML = `
      <style>
        $grid-row-columns: height !default;
          #lieux {
              width: 100%;
              height: 100px;
              background-color: lightblue;
              transition: height 0.3s ease;
          }
      </style>
  
      <!-- Champ input en haut -->
      <div class="container mt-4">
          <div class="row justify-content-center">
              <div class="col-6">
                  <input id="input" type="text" class="form-control" placeholder="Rechercher un lieux, ville, commune...">
              </div>
          </div>
      </div>

      <!-- Bouton liste d'amis -->
      <div class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-6 text-center">
                  <button id="friendList" class="btn btn-primary" onclick="window.location.href='friendList.html'">Liste d'amis</button>
              </div>
          </div>
      </div>
  
      <!-- Bouton au milieu pour rediriger dans une nouvelle page -->
      <div class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-6 text-center">
                  <button id="suiviSeances" class="btn btn-primary" onclick="window.location.href='stats.html'">Track</button>
              </div>
          </div>
      </div>
  
      <!-- Div cliquable en bas qui glisse -->
      <div class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-6 text-center">
                  <div id="lieuxClickable" class="d-flex justify-content-center align-items-center">
                      Cliquez pour agrandir
                  </div>
              </div>
          </div>
      </div>
  
  
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>
  
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
          HALLO
        </div>
      </div>
      `;
  
      let nodeParent = document.querySelector('#outer');
      this.div.style.backgroundImage='url("img/map.webp")';
      this.div.style.height='100vh';
      nodeParent.appendChild(this.div);
  
      this.input = this.div.querySelector('input');
      this.buttonSuivi  = this.div.querySelector('suiviSeances');
      this.lieux = document.getElementById('lieuxClickable');
  
    }
  }