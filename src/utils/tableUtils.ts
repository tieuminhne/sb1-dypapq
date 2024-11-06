interface SeatPosition {
  x: number;
  y: number;
}

export const calculateSeatPosition = (index: number, totalSeats: number): SeatPosition => {
  const angleInRadians = ((2 * Math.PI) / totalSeats) * index - Math.PI / 2;
  const radius = 42; // Percentage from center
  
  return {
    x: 50 + radius * Math.cos(angleInRadians),
    y: 50 + radius * Math.sin(angleInRadians)
  };
};