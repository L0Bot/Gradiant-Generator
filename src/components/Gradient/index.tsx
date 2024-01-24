import { useAppSelector } from '../../hooks/redux';

function Gradient() {
  const direction = useAppSelector((state) => state.color.direction);
  const firstColor = useAppSelector((state) => state.color.firstColor);
  const lastColor = useAppSelector((state) => state.color.lastColor);

  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})`,
      }}
    />
  );
}

export default Gradient;
