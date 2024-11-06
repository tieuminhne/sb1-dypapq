import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Player } from '../types';

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: Player | null;
  position: string;
  onAdd: (player: Player) => void;
  onUpdate: (player: Player) => void;
  onRemove: () => void;
}

const PlayerModal: React.FC<PlayerModalProps> = ({
  isOpen,
  onClose,
  player,
  position,
  onAdd,
  onUpdate,
  onRemove,
}) => {
  const [formData, setFormData] = useState<Player>(
    player || {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      vpip: 0,
      pfr: 0,
      notes: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">
            {player ? 'Edit Player' : 'Add Player'} - {position}
          </Dialog.Title>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    VPIP %
                  </label>
                  <input
                    type="number"
                    value={formData.vpip}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        vpip: Number(e.target.value),
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    PFR %
                  </label>
                  <input
                    type="number"
                    value={formData.pfr}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pfr: Number(e.target.value),
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-2">
                {player && (
                  <button
                    type="button"
                    onClick={() => {
                      onRemove();
                      onClose();
                    }}
                    className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200"
                  >
                    Remove
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  {player ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PlayerModal;