let gagner = 0;
let perdu = 0;
//choix de l'ordinateur
const choix = ["papier", "caillou", "ciseau"];
//const qui servira à mettre dans le cache de la mémoire (cacher le DOM)
const statueDuJeux = document.getElementById("statueDuJeux");
const score = document.getElementById("score");
const papier = document.getElementById("papier");
const caillou = document.getElementById("caillou");
const ciseaux = document.getElementById("ciseaux");

//Création d'une fonction pour lancer la partie
function startPartie(choixJoueur) {
  //const qui sélectionne aléatoirement le choix de l'ordinateur
  const choixOrdinateur = choix[Math.floor(Math.random() * choix.length)];

  console.log(` moi : ${choixJoueur} || ordinateur : ${choixOrdinateur} `);
  // Condition qui va vérifier les victoires ou défaites
  //choixJoueur + "_" + choixOrdinateur fusionne les 2 chaînes de caractères
  switch (choixJoueur + "_" + choixOrdinateur) {
    //Les choix de l'ordinateur
    //À droite, c'est le choix du joueur à gauche le choix de l'ordinateur.
    case "papier_ciseaux":
    case "caillou_papier":
    case "ciseaux_caillou":
      //Si je perds, j'incrémente perdu de 1
      perdu += 1;
      statueDuJeux.innerHTML = `moi: ${choixJoueur} || Ordinateur: ${choixOrdinateur} Ordinateur gagne `;
      break;
    //les choix de du joueur
    case "papier_caillou":
    case "caillou_ciseaux":
    case "ciseaux_papier":
      //Si je gagne, j'incrémente perdu de 1
      gagner += 1;
      statueDuJeux.innerHTML = `moi: ${choixJoueur} || Ordinateur: ${choixOrdinateur} Joueur gagne `;
      break;
    //egaliter
    case "papier_papier":
    case "caillou_caillou":
    case "ciseaux_ciseaux":
      statueDuJeux.innerHTML = `moi: ${choixJoueur} || Ordinateur: ${choixOrdinateur} Egaliter `;
      break;
    default:
      break;
  }
  //mise a jour du score
  score.innerHTML = `moi: ${gagner}  || Ordinateur: ${perdu} `;
}

papier.addEventListener("click", (e) => startPartie("papier"));
caillou.addEventListener("click", (e) => startPartie("caillou"));
ciseaux.addEventListener("click", (e) => startPartie("ciseaux"));
