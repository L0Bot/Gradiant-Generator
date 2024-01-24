import { AnyAction, Reducer } from '@reduxjs/toolkit';
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

export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION_TO_45_DEG = 'CHANGE_DIRECTION_TO_45_DEG';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

const colorReducer: Reducer<AppState> = (
  state = initialState, // initialState passé en paramètre par défaut
  action: AnyAction = { type: '@INIT' },
) => {
  switch (action.type) {
    case 'CHANGE_DIRECTION_TO_LEFT':
      // ... je fait une action
      return {
      // Je récupère l'ancien state
        ...state,
        // Je modifie la propriété direction
        direction: '270deg',
      };
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case CHANGE_DIRECTION_TO_45_DEG:
      return {
        ...state,
        direction: '45deg',
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload, // action.payload va contenir la valeur de la direction
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        // je récupère la valeur de mon action contenant dans la propriété payload
        firstColor: action.payload,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.payload,
      };
    default:
      return state;
  }
};

export default colorReducer;
