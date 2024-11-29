/**
 * Vue pour la gestion de la liste d'amis
 * @author Elliot CALLET
 */
class FriendsView {
    constructor() {
        this.div = document.createElement('div');

        this.div.innerHTML = `
            <div>
                <button class="btn btn-outline-dark" onclick="window.location.href='accueil.html'"> < </button>
            </div>
            <div class="container mt-4">
                <div class="row mb-3">
                    <div class="col-9">
                        <input type="text" id="friendInput" class="form-control" placeholder="Add a friend">
                    </div>
                    <div class="col-3">
                        <button id="addButton" class="btn btn-primary w-100">Add</button>
                    </div>
                </div>
                <ul id="friendList" class="list-group"></ul>
            </div>
        `;

        this.input = this.div.querySelector('#friendInput');
        this.addButton = this.div.querySelector('#addButton');
        this.friendList = this.div.querySelector('#friendList');

        let parentNode = document.querySelector('#outer');
        parentNode.appendChild(this.div);
    }

    renderFriendList(friends) {
        this.friendList.innerHTML = ''; // Clear the list
        friends.forEach((friend) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                ${friend}
                <button class="btn btn-danger btn-sm btn-delete" data-name="${friend}">Delete</button>
            `;
            this.friendList.appendChild(listItem);
        });
    }
}
