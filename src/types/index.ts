export interface Player {
  id: string;
  name: string;
  vpip: number;
  pfr: number;
  notes: string;
}

export interface Seat {
  id: number;
  position: string;
  player: Player | null;
}

export interface Table {
  id: number;
  seats: Seat[];
}