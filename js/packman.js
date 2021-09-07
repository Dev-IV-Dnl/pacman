/**
 * 0 = mur
 * 1 = sol
 * 2 = bonbon
 */

let conteneur = document.querySelector('.conteneur');
let grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let pacman = {
    x: 2,
    y: 2,
    direction: 0
}

// for (let i = 0; i < grille.length; i++) {
//     for (let j = 0; j < grille[i].length; j++) {


//     }
// }

function afficheGrille() {
    for (let y in grille) {
        for (let x in grille[y]) {

            let elementGrille = document.createElement('div'); // ici je crée la variable de création de div car je n'ai pas besoin de la mettre dans les if

            elementGrille.style.gridArea = (+y + 1) + '/' + (+x + 1);

            // ici j'établis mes différentes conditions afin de créer un mur, un sol ou un bonbon
            if (grille[y][x] == 0) {
                elementGrille.classList.add('mur');
            }
            else if (grille[y][x] == 1) {
                elementGrille.classList.add('sol');
            }
            else if (grille[y][x] == 2) {

                elementGrille.classList.add('bonbon');
            }
            conteneur.appendChild(elementGrille); // ici je crée l'enfant de conteneur à partir de la variable : elementGrille que j'ai créé plus haut.
        }
    }
}

function affichePacman() {
    let elementPacman = document.createElement('div');
    elementPacman.classList.add('pacman');
    conteneur.appendChild(elementPacman);
    elementPacman.style.gridArea = (+pacman.y) + '/' + (+pacman.x);
}

function mangeBonbon() {
    if (grille[pacman.y - 1][pacman.x - 1] == 2) {
        grille[pacman.y - 1][pacman.x - 1] = 1;
    }
}

function tourDeJeu() {
    afficheGrille();
    affichePacman();
    deplacePacman();
}

function deplacePacman() {
    if (pacman.direction == 0) {
        pacman.x++;
        if (grille[pacman.y - 1][pacman.x - 1] == 0) {
            pacman.y++;
        }

    } else if (pacman.direction == 1) {
        pacman.y--;
    } else if (pacman.direction == 2) {
        pacman.x--;
    } else if (pacman.direction == 3) {
        pacman.y++;
    }

}

window.addEventListener('load', () => {
    setInterval(tourDeJeu, 500);
    // setTimeout(tourDeJeu, 500);
});
