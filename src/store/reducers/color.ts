import { createAction, createReducer } from '@reduxjs/toolkit';
import { TColor, TDirection } from '../../utils/color';

interface AppState {
  firstColor: TColor;
  lastColor: TColor;
  direction: TDirection;
  nbColors: number;
}
// == State
const initialState: AppState = {
  firstColor: '#FF00FF',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// Avec redux toolkit, on va créer des actions.
// On passe en argument le type de l'action
// C'est ce que l'on appel un "action creator"
export const changeDirection = createAction<TDirection>('CHANGE_DIRECTION');
export const changeLastColor = createAction<TColor>('CHANGE_LAST_COLOR');
export const changeFirstColor = createAction<TColor>('CHANGE_FIRST_COLOR');

// { type: 'CHANGE_DIRECTION', payload: '45deg' }
// console.log(changeDirection('45deg'));

// On va créer notre reducer avec la fonction createReducer de redux toolkit
// elle prend deux arguments,
// - le premier est l'état initial
// - le deuxième une fonction de callback qui aura en paramètre un builder
// le builder nous permettra de gérer nos addCase
const colorReducer = createReducer(initialState, (builder) => {
  builder
    // dans le cas de l'action changeDirection (ici le addCase prend en paramètre l'action creator)
    .addCase(changeDirection, (state, action) => {
      // je modifie la propriété direction
      state.direction = action.payload;
    })
    .addCase(changeLastColor, (state, action) => {
      state.lastColor = action.payload;
      state.nbColors += 1;
    })
    .addCase(changeFirstColor, (state, action) => {
      state.firstColor = action.payload;
      state.nbColors += 1;
    });
});

export default colorReducer;
