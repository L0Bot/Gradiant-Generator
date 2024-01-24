// Utilisation des templates literal pour un meilleur typage
export type TColor = `#${string}`;
export type TDirection = `${string}deg`;
export function randomHexColor(): TColor {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}
export function generateSpanColor(color: TColor) {
  return `
    <span style="color:${color}">${color}</span>
  `;
}
