import { useAppSelector } from '../../hooks/redux';

function NbColors() {
  // state === state global de mon redux
  // Pour récupère les données depuis le store, on va utiliser le hook useSelector
  // Il va permettre d'aller chercher depuis le state global de redux
  // les informations que l'on souhaite
  const nbColors = useAppSelector((state) => {
    console.log(state);
    return state.color.nbColors;
  });

  return (
    <div id="nbColors">
      {`${nbColors} couleur(s) générée(s)`}
    </div>
  );
}

export default NbColors;
