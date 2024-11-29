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
    this.div.appendChild(header);

    const returnButton = document.createElement('button');
    returnButton.innerHTML = '<';
    returnButton.className = "btn btn-outline-dark";
    returnButton.setAttribute('onclick', "window.location.href='accueil.html';");
    header.appendChild(returnButton);

    const title = document.createElement('h1');
    title.className = "col d-flex justify-content-center"
    title.innerHTML = 'TRACKING';
    header.appendChild(title);
  }

  createOptions() {
    const optionsDiv = document.createElement('div');
    optionsDiv.className = "d-flex justify-content-center w-100 mb-3";

    const suivisButton = document.createElement('button');
    suivisButton.innerHTML = 'Suivis';
    suivisButton.className = "btn btn-warning w-100";
    suivisButton.style.borderRadius = '0';
    suivisButton.onclick = () => this.showSuivis();

    const cetteSeanceButton = document.createElement('button');
    cetteSeanceButton.innerHTML = 'Cette séance';
    cetteSeanceButton.className = "btn btn-warning w-100";
    cetteSeanceButton.style.borderRadius = '0';
    cetteSeanceButton.onclick = () => this.showCetteSeance();

    optionsDiv.appendChild(suivisButton);
    optionsDiv.appendChild(cetteSeanceButton);
    this.div.appendChild(optionsDiv);
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


    //TODO à supprimer ou modifier le texte
    const cetteSeanceTextDiv = document.createElement('div');
    const cetteSeanceText = document.createElement('p');
    cetteSeanceText.innerHTML = 'Ajoutez les activités de la séance actuelle.';
    cetteSeanceTextDiv.appendChild(cetteSeanceText);
    this.mainDiv.appendChild(cetteSeanceTextDiv);


    //TODO les boutons avec toutes les activités
    this.manyButtonsDiv = document.createElement('div');
    this.manyButtonsDiv.className = "text-center"

    //this.createActivity();
    //this.createActivity();
    //this.createActivity();
    this.addActivity();
    //TODO faut que quand on clique sur le bouton cette scéance, ça active create activity (observer)

    this.mainDiv.appendChild(this.manyButtonsDiv);
    //bas de page
  }

/*
  createActivity() {

    this.activitiesList = document.createElement('li');
    this.activitiesList.className = 'list-group-item d-flex justify-content-between align-items-center';

    this.activityDiv = document.createElement('div');
    this.activityDiv.className = "m-2";
    //text
    this.activityText = document.createElement('input');
    this.activityText.className = "btn btn-outline-dark round-border m-1";
    this.activityText.value = "push up";
    this.activityDiv.appendChild(this.activityText);
    //number
    this.actvNb = document.createElement('input');
    this.actvNb.className = "btn btn-outline-dark round-border";
    this.actvNb.value = "3";
    this.actvNb.style.width = "3rem";
    this.activityDiv.appendChild(this.actvNb);
    //text
    this.x = document.createElement('span');
    this.x.className = "m-1";
    this.x.innerHTML = "x";
    this.activityDiv.appendChild(this.x);
    //number
    this.actvNb2 = document.createElement('input');
    this.actvNb2.className = "btn btn-outline-dark round-border";
    this.actvNb2.value = "3";
    this.actvNb2.style.width = "3rem";
    this.activityDiv.appendChild(this.actvNb2);
    //
    this.activitiesList.appendChild(this.activityDiv);
    this.manyButtonsDiv.appendChild(this.activitiesList);

  }
*/

  createActivities(activities) {
    this.activitiesList = document.createElement('div');

    activities.forEach((activities) => {
      const activity = document.createElement('li');
      activity.className = "list-unstyled justify-content-between align-items-center m-2";

      //text
      const name = document.createElement('input');
      activity.appendChild(name);
      Object.assign(name, {
        id : `${activities.id}`,
        className : "btn btn-outline-dark round-border m-1",
        value : activities.name,
      });
      //number
      let num = document.createElement('input');
      Object.assign(num, {
        className : "btn btn-outline-dark round-border",
        id : `${activities.id}_number`,
        value : activities.number1,
      });
      num.style.width = "3rem";
      activity.appendChild(num);

      //text
      const x = document.createElement('span');
      x.className = "m-1";
      x.innerHTML = "x";
      activity.appendChild(x);
      //number
      const num2 = document.createElement('input');
      Object.assign(num2, {
        className : "btn btn-outline-dark round-border",
        id : `${activities.id}_number2`,
        value : activities.number2,
      });
      num2.style.width = "3rem";
      activity.appendChild(num2);
      //delete
      const del = document.createElement('button');
      Object.assign(del, {
        id : `${activities.id}_delete`,
        className : "btn btn-danger btn-sm btn-delete m-2",
        innerHTML : "🗑️",
      });
      del.setAttribute('data-name', activities.name);
      activity.appendChild(del);
      //
      this.activitiesList.appendChild(activity);
    });//end for
    this.manyButtonsDiv.appendChild(this.activitiesList);
  }



  addActivity() {
    //Button add
    const addDiv = document.createElement('div');
    addDiv.className = "m-2";

    const add = document.createElement('button');
    add.className = "btn btn-outline-dark round-border";
    add.innerHTML = "Add activity";
    addDiv.appendChild(add);

    this.manyButtonsDiv.appendChild(addDiv);


  }

}


  