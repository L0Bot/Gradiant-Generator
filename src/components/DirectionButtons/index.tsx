import { useAppDispatch } from '../../hooks/redux';
import { changeDirection } from '../../store/reducers/color';
import { TDirection } from '../../utils/color';

function DirectionButtons() {
  const dispatch = useAppDispatch();

  const handleClickBtn = (direction: TDirection) => {
    dispatch(changeDirection(direction));
  };

  const handleClickBtnCurry = (direction: TDirection) => () => {
    dispatch(changeDirection(direction));
  };

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        // pour éviter de créer une fonction par bouton
        // on lui passe une fonction fléché qui exécutera notre fonction
        // ainsi on va pouvoir lui passer des paramètres
        onClick={handleClickBtnCurry('45deg')}
      >
        45deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickBtn('90deg')}
      >
        90deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickBtn('135deg')}
      >
        135deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickBtn('225deg')}
      >
        225deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickBtn('270deg')}
      >
        270deg
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClickBtn('315deg')}
      >
        315deg
      </button>
    </div>
  );
}

export default DirectionButtons;
