import { useAppSelector } from '../../hooks/redux';

function Colors() {
  // Attention, on ne veux jamais récupérer tous le state global
  // Ni le reducer complet !!!!!!!!!!!!! ⛔️⛔️⛔️⛔️⛔️⛔️
  // On va selectionner précisément chaque donnée que l'on souhaite
  // Quitte à faire plusieurs useSelector
  const firstColor = useAppSelector((state) => state.color.firstColor);
  const lastColor = useAppSelector((state) => state.color.lastColor);

  return (
    <div id="colors">
      <span style={{ color: firstColor }}>
        {firstColor}
      </span>
      -
      <span style={{ color: lastColor }}>
        {lastColor}
      </span>
    </div>
  );
}

export default Colors;
