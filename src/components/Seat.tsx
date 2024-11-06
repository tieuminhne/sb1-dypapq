import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Player } from '../types';
import PlayerModal from './PlayerModal';

interface SeatProps {
  position: string;
  player: Player | null;
  onAddPlayer: (player: Player) => void;
  onRemovePlayer: () => void;
  onUpdatePlayer: (player: Player) => void;
}

const Seat: React.FC<SeatProps> = ({
  position,
  player,
  onAddPlayer,
  onRemovePlayer,
  onUpdatePlayer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
      >
        {player ? (
          <div className="text-center">
            <div className="text-white font-bold">{player.name}</div>
            <div className="text-xs text-gray-400">
              {player.vpip}/{player.pfr}
            </div>
          </div>
        ) : (
          <PlusIcon className="h-8 w-8 text-gray-400" />
        )}
      </div>

      <PlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        player={player}
        position={position}
        onAdd={onAddPlayer}
        onUpdate={onUpdatePlayer}
        onRemove={onRemovePlayer}
      />
    </>
  );
}

export default Seat;