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
    x: 5,
    y: 5,
    direction: 0
}

let tabFantome = [
    {
        x: 5,
        y: 11,
        direction: 0
    },
    {
        x: 5,
        y: 15,
        direction: 1
    },
    {
        x: 9,
        y: 17,
        direction: 2
    },
    {
        x: 13,
        y: 17,
        direction: 1
    }
]

// for (let i = 0; i < grille.length; i++) {
//     for (let j = 0; j < grille[i].length; j++) {


//     }
// }

function afficheGrille() {
    conteneur.innerHTML = "";
    let compteBonbon = 0;
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
                compteBonbon++;
                elementGrille.classList.add('bonbon');
            }
            conteneur.appendChild(elementGrille); // ici je crée l'enfant de conteneur à partir de la variable : elementGrille que j'ai créé plus haut.
        }
    }
    if (compteBonbon == 0) {
        clearInterval(numInterval);
        alert('Vous avez gagné !');
    }
}

function affichePacman() {
    let elementPacman = document.createElement('div');
    conteneur.appendChild(elementPacman);
    elementPacman.style.gridArea = (+pacman.y) + '/' + (+pacman.x);
    if (pacman.direction == 0) {
        elementPacman.classList.add('pacmanDroite');
    } else if (pacman.direction == 1) {
        elementPacman.classList.add('pacmanBas');
    } else if (pacman.direction == 2) {
        elementPacman.classList.add('pacmanGauche');
    } else if (pacman.direction == 3) {
        elementPacman.classList.add('pacmanHaut');
    }
}

function afficheFantomes() {
    for (let i in tabFantome) {
        let elementFantome = document.createElement('div');
        conteneur.appendChild(elementFantome);
        elementFantome.style.gridArea = (tabFantome[i].y) + '/' + (tabFantome[i].x);
        elementFantome.classList.add('fantome' + (i));
    }
}

function mangeBonbon() {
    if (grille[pacman.y - 1][pacman.x - 1] == 2) {
        grille[pacman.y - 1][pacman.x - 1] = 1;
    }
}

function tourDeJeu() {
    mangeBonbon();
    afficheGrille();
    console.log(afficheGrille());
    deplacePacman();
    deplaceFantomes();
    mort();
    affichePacman();
    afficheFantomes();
}

function clavier(e) {
    // console.log(e);
    if (e.key == 'ArrowDown') {
        pacman.direction = 1;
    }
    if (e.key == 'ArrowUp') {
        pacman.direction = 3;
    }
    if (e.key == 'ArrowRight') {
        pacman.direction = 0;
    }
    if (e.key == 'ArrowLeft') {
        pacman.direction = 2;
    }
}

function deplacePacman() {

    if (pacman.direction == 0 && !grille[pacman.y - 1][pacman.x] == 0) {
        pacman.x++;
    }

    if (pacman.direction == 1 && !grille[pacman.y][pacman.x - 1] == 0) {
        pacman.y++;
    }

    if (pacman.direction == 2 && !grille[pacman.y - 1][pacman.x - 2] == 0) {
        pacman.x--;
    }

    if (pacman.direction == 3 && !grille[pacman.y - 2][pacman.x - 1] == 0) {
        pacman.y--;
    }
}

function deplaceFantomes() {
    for(let i in tabFantome) {
        if (tabFantome[i].direction == 0 && !grille[tabFantome[i].y - 1][tabFantome[i].x] == 0) {
            tabFantome[i].x++;
        }

        else if (tabFantome[i].direction == 1 && !grille[tabFantome[i].y][tabFantome[i].x - 1] == 0) {
            tabFantome[i].y++;
        }

        else if (tabFantome[i].direction == 2 && !grille[tabFantome[i].y - 1][tabFantome[i].x - 2] == 0) {
            tabFantome[i].x--;
        }

        else if (tabFantome[i].direction == 3 && !grille[tabFantome[i].y - 2][tabFantome[i].x - 1] == 0) {
            tabFantome[i].y--;
        } else {
            tabFantome[i].direction = Math.floor(Math.random() * 4);
        }
    }
}

function mort() {
    for(let i in tabFantome) {
        if(pacman.y-1==tabFantome[i].y-1 && pacman.x-1==tabFantome[i].x-1) {
            if((pacman.direction==0 && tabFantome[i].direction==2) || (pacman.direction==2 && tabFantome[i].direction==0) || (pacman.direction==1 && tabFantome[i].direction==3) || (pacman.direction==3 && tabFantome[i].direction==1)) {
                tabFantome[i].y=tabFantome[i].y;
                tabFantome[i].x=tabFantome[i].x;
            }
            alert('Vous avez perdu !');
            clearInterval(numInterval);
        }
    }
}

let numInterval = 0;
window.addEventListener('load', () => {
    numInterval = setInterval(tourDeJeu, 200);
    // setTimeout(tourDeJeu, 500);
    document.body.addEventListener('keydown', clavier);
});
