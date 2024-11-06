import React from 'react';
import Seat from './Seat';
import { Table } from '../types';
import { useTableStore } from '../store/tableStore';
import { calculateSeatPosition } from '../utils/tableUtils';

interface PokerTableProps {
  table: Table;
}

const PokerTable: React.FC<PokerTableProps> = ({ table }) => {
  const { addPlayer, removePlayer, updatePlayer } = useTableStore();

  return (
    <div className="relative w-96 h-96 bg-green-800 rounded-full border-8 border-brown-900">
      <div className="absolute inset-0">
        {table.seats.map((seat, index) => {
          const { x, y } = calculateSeatPosition(index, table.seats.length);

          return (
            <div
              key={seat.id}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Seat
                position={seat.position}
                player={seat.player}
                onAddPlayer={(player) => addPlayer(table.id, seat.id, player)}
                onRemovePlayer={() => removePlayer(table.id, seat.id)}
                onUpdatePlayer={(player) =>
                  updatePlayer(table.id, seat.id, player)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokerTable;