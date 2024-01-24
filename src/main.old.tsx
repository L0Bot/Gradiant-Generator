// == Imports
import {
  generateSpanColor, randomHexColor,
} from './utils/color';
import './styles/index.scss';
import store from './store';
import {
  changeDirection,
  changeFirstColor,
  changeLastColor,
} from './store/reducers/color';

// getState va nous permettre de récupérer nos données dans le store
// console.log(store.getState());

// store.subscribe va nous permettre d'effectuer une action (exécuter une fonction)
// à chaque fois que le store est mis à jour
// store.subscribe(() => {
//   console.log('Store updated');
// });

// store.dispatch va nous permettre d'emettre des actions / intentions
// ses actions vont passer dans mes reducers
// store.dispatch({
//   type: 'CHANGE_DIRECTION_TO_LEFT',
// });

// interface AppState {
//   firstColor: TColor;
//   lastColor: TColor;
//   direction: TDirection;
//   nbColors: number;
// }
// // == State
// const state: AppState = {
//   firstColor: '#e367a4',
//   lastColor: '#48b1f3',
//   direction: '90deg',
//   nbColors: 0,
// };

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState().color;

  document.getElementById('nbColors')!.innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState().color;

  document.getElementById('gradient')!.style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState().color;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors')!.innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// Je vais m'abonner au modification de mon store
store.subscribe(() => {
  // à chaque modification de donnée
  // je vais relancer mes fonctions de rendu
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')!
  .addEventListener('click', () => {
    const firstColor = randomHexColor();

    // Au lieu de dispatch un objet à la main, on va utiliser des actions creators
    // ce sont des fonctions qui retourne un objet d'action (avec type et payload au besoin)
    store.dispatch(
      changeFirstColor(firstColor),
    );
    const lastColor = randomHexColor();
    store.dispatch(
      changeLastColor(lastColor),
    );
  });

document.getElementById('randFirst')!
  .addEventListener('click', () => {
    const firstColor = randomHexColor();
    store.dispatch(
      changeFirstColor(firstColor),
    );
  });

document.getElementById('randLast')!
  .addEventListener('click', () => {
    const lastColor = randomHexColor();
    store.dispatch(
      changeLastColor(lastColor),
    );
  });

document.getElementById('to45deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('45deg'));
  });

document.getElementById('to135deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('135deg'));
  });

document.getElementById('to225deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('225deg'));
  });

document.getElementById('to315deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('315deg'));
  });

document.getElementById('to270deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('270deg'));
  });

document.getElementById('to90deg')!
  .addEventListener('click', () => {
    store.dispatch(changeDirection('90deg'));
  });
