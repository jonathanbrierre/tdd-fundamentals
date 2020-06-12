
const isAlive = (cell, neighbors) => (
  neighbors === 3 || cell === 1 && neighbors ===2 ? 1 : 0
)

window.game = {
  isAlive
};
