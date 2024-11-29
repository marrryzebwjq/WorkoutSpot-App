
class StatsView {

    constructor(){
  
      this.div = document.createElement('div');
  
      this.head = document.createElement('div');
      this.return = document.createElement('button');
      this.title = document.createElement('p');

      this.return.innerHTML = '<';
      this.title.innerHTML = 'Tracking';

      this.head.appendChild(this.return);
      this.head.appendChild(this.title);

      this.content = document.createElement('div');
      this.buttonsSlider = document.createElement('div');

      this.currentSession = document.createElement('button');
      this.lastMonth = document.createElement('button');
      this.lastSemester = document.createElement('button');
      this.allTime = document.createElement('button');

      this.return.setAttribute('onclick', "window.location.href='accueil.html';");
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

      this.content.appendChild(this.buttonsSlider);

      this.div.appendChild(this.head);
      this.div.appendChild(this.content);

      let nodeParent = document.querySelector('#outer');
      nodeParent.appendChild(this.div);
    }
  }
  