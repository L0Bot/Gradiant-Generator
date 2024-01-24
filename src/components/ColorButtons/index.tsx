import { useAppDispatch } from '../../hooks/redux';
import { changeFirstColor, changeLastColor } from '../../store/reducers/color';
import { randomHexColor } from '../../utils/color';

function ColorButtons() {
  // Je récupère la fonction qui va me permettre de dispatch des actions
  const dispatch = useAppDispatch();

  // Quand je click sur mon bouton random first
  const handleClickRandomFirst = () => {
    // Je génère une couleur aléatoire
    const randomColor = randomHexColor();
    // J'emet mon action / intention de changement de couleur
    dispatch(changeFirstColor(randomColor));
  };
  const handleClickRandomLast = () => {
    // Je génère une couleur aléatoire
    const randomColor = randomHexColor();
    // J'emet mon action / intention de changement de couleur
    dispatch(changeLastColor(randomColor));
  };
  const handleClickRandomAll = () => {
    handleClickRandomFirst();
    handleClickRandomLast();
  };
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={handleClickRandomFirst}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={handleClickRandomAll}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={handleClickRandomLast}
      >
        Random Last
      </button>
    </div>
  );
}

export default ColorButtons;
