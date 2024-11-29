/**
 * Vue pour la page de Tracking
 * @author Marie POINT
 */
class StatsView {

  constructor() {
    let nodeParent = document.querySelector('#outer');
    this.div = document.createElement('div');
    this.createHeader();  // [<]    TRACKING
    this.createOptions(); // [Suivis]  [Cette séance]
    this.createMain();    // contenu principal de la page
    nodeParent.appendChild(this.div);
  }

  /************* Haut de page de TRACKING *************/


  createHeader() {
    //TODO à supprimer
    const  container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'flex-end';
    const refreshButton = document.createElement('button');
    refreshButton.textContent = '↻';
    refreshButton.className = 'btn btn-black justify-content-center';
    refreshButton.onclick = () => location.reload();
    container.appendChild(refreshButton);
    this.div.appendChild(container);
    ///////////////////// à supprimer


    const header = document.createElement('div');
    header.className = "bg-success text-black p-2";
    header.innerHTML = `
        <button class="btn btn-outline-dark" onclick="window.location.href='accueil.html';"><</button>
        <h1 class="col d-flex justify-content-center">TRACKING</h1>
    `;
    this.div.appendChild(header);
  }

  createOptions() {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = "d-flex justify-content-center w-100 mb-3";

    const suivisButton = document.createElement('button');
    suivisButton.id = "buttonSuivis"
    suivisButton.innerHTML = 'Suivis';
    suivisButton.className = "btn btn-warning w-100";
    suivisButton.style.borderRadius = '0';
    suivisButton.onclick = () => this.showSuivis();

    const cetteSeanceButton = document.createElement('button');
    cetteSeanceButton.id = "buttonCetteSeance"
    cetteSeanceButton.innerHTML = 'Cette séance';
    cetteSeanceButton.className = "btn btn-warning w-100";
    cetteSeanceButton.style.borderRadius = '0';
    cetteSeanceButton.onclick = () => this.showCetteSeance();

    optionsDiv.appendChild(suivisButton);
    optionsDiv.appendChild(cetteSeanceButton);
    this.div.appendChild(optionsDiv);

    this.buttonSuivis = this.div.querySelector('#buttonSuivis');
    this.buttonCetteSeance = this.div.querySelector('#buttonCetteSeance');
  }

  createMain() {
    this.mainDiv = document.createElement('div');
    this.mainDiv.className = "container";
    this.div.appendChild(this.mainDiv);
    //this.showSuivis();
    this.showCetteSeance()
  }

  /************* Contenu principal de la page TRACKING *************/

  /**
   * Vue pour la page de Suivis
   * @author Nicolas BASQUIN
   */
  showSuivis() {
    this.mainDiv.innerHTML = '';

    this.content = document.createElement('div');
    this.buttonsSlider = document.createElement('div');

    this.currentSession = document.createElement('button');
    this.lastMonth = document.createElement('button');
    this.lastSemester = document.createElement('button');
    this.allTime = document.createElement('button');

    this.currentSession.setAttribute('class', "btn btn-outline-secondary");
    this.lastMonth.setAttribute('class', "btn btn-outline-secondary");
    this.lastSemester.setAttribute('class', "btn btn-outline-secondary");
    this.allTime.setAttribute('class', "btn btn-outline-secondary");

    this.currentSession.innerHTML = "This session";
    this.lastMonth.innerHTML = "Last Month";
    this.lastSemester.innerHTML = "Last Semester";
    this.allTime.innerHTML = "All time";

    this.buttonsSlider.appendChild(this.currentSession);
    this.buttonsSlider.appendChild(this.lastMonth);
    this.buttonsSlider.appendChild(this.lastSemester);
    this.buttonsSlider.appendChild(this.allTime);

    this.buttonsSlider.style.overflowX = "auto";
    this.buttonsSlider.style.whiteSpace = "nowrap";


    this.content.appendChild(this.buttonsSlider);
    this.mainDiv.appendChild(this.content)
  }

  /**
   * Vue pour la page de suivis de la séance du jour
   * @author Marie POINT
   */
  showCetteSeance() {
    this.mainDiv.innerHTML = '';

    // Petite phrase
    const cetteSeanceTextDiv = document.createElement('div');
    const cetteSeanceText = document.createElement('p');
    cetteSeanceText.innerHTML = 'Les exercices d\'aujourd\'hui :';
    cetteSeanceTextDiv.appendChild(cetteSeanceText);
    this.mainDiv.appendChild(cetteSeanceTextDiv);

    // Boutons
    this.manyButtonsDiv = document.createElement('div');
    this.manyButtonsDiv.className = "text-center"
    this.manyButtonsDiv.innerHTML = `
    <!-- Bouton Ajouter un exercice -->
    <div class="d-flex justify-content-end m-2">
        <button id="addButton" class="btn btn-outline-success round-border">Ajouter un exercice</button>
    </div>
    
    <!-- Liste d'exercices -->
    <div id="activityForm" style="display: none;" class="m-2">
        <input type="text" id="addName" placeholder="Nom de l\'exercice" class="btn btn-outline-dark round-border m-1"/>
        <input type="number" id="addNumber1" placeholder="0" class="btn btn-outline-dark round-border m-1" style="width: 3rem"/>
        <span class="m-1">x</span>
        <input type="number" id="addNumber2" placeholder="0" class="btn btn-outline-dark round-border m-1" style="width: 3rem"/>
        <button id="confirm" class="btn btn-success round-border">Valider</button>
    </div>
    
    <div id="activitiesList"/>`

    this.mainDiv.appendChild(this.manyButtonsDiv);
    // Bas de page


    this.addButton = this.manyButtonsDiv.querySelector('#addButton');
    this.activityForm = this.manyButtonsDiv.querySelector('#activityForm');
    this.activitiesList = this.manyButtonsDiv.querySelector('#activitiesList');

    this.addName = this.manyButtonsDiv.querySelector('#addName');
    this.addNumber1 = this.manyButtonsDiv.querySelector('#addNumber1');
    this.addNumber2 = this.manyButtonsDiv.querySelector('#addNumber2');
    this.confirm = this.manyButtonsDiv.querySelector('#confirm');
  }

  createActivities(activities) {
    this.activitiesList.innerHTML = ''

    activities.forEach((activities) => {
      const activity = document.createElement('li');
      activity.className = "list-unstyled justify-content-between align-items-center m-2";

      activity.innerHTML = `
      <input  id=${activities.id}
              class="btn btn-outline-dark round-border m-1"
              readonly="readonly"
              value="${activities.name}">
              
      <input id="${activities.id}_number1"
              class="btn btn-outline-dark round-border"
              style="width: 3rem"
              readonly="readonly"
              value="${activities.number1}">
              
      <span class="m-1">x</span>
      
      <input id="${activities.id}_number2"
              class="btn btn-outline-dark round-border"
              style="width: 3rem"
              readonly="readonly"
              value="${activities.number2}">
        `
      this.activitiesList.appendChild(activity);
    });
  }



}


  