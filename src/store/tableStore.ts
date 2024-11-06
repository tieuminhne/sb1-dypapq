import { create } from 'zustand';
import { Player, Table } from '../types';

interface TableState {
  tables: Table[];
  addPlayer: (tableId: number, seatId: number, player: Player) => void;
  removePlayer: (tableId: number, seatId: number) => void;
  updatePlayer: (tableId: number, seatId: number, player: Player) => void;
}

const initialTables: Table[] = Array(4).fill(null).map((_, tableIndex) => ({
  id: tableIndex,
  seats: Array(8).fill(null).map((_, seatIndex) => ({
    id: seatIndex,
    position: ['BTN', 'SB', 'BB', 'UTG', 'MP', 'HJ', 'CO', 'BTN'][seatIndex],
    player: null
  }))
}));

export const useTableStore = create<TableState>((set) => ({
  tables: initialTables,
  addPlayer: (tableId, seatId, player) =>
    set((state) => ({
      tables: state.tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              seats: table.seats.map((seat) =>
                seat.id === seatId ? { ...seat, player } : seat
              ),
            }
          : table
      ),
    })),
  removePlayer: (tableId, seatId) =>
    set((state) => ({
      tables: state.tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              seats: table.seats.map((seat) =>
                seat.id === seatId ? { ...seat, player: null } : seat
              ),
            }
          : table
      ),
    })),
  updatePlayer: (tableId, seatId, player) =>
    set((state) => ({
      tables: state.tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              seats: table.seats.map((seat) =>
                seat.id === seatId ? { ...seat, player } : seat
              ),
            }
          : table
      ),
    })),
}));