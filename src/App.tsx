import React from 'react';
import PokerTable from './components/PokerTable';
import { useTableStore } from './store/tableStore';

function App() {
  const { tables } = useTableStore();

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Poker Table Management
        </h1>
        <div className="grid grid-cols-2 gap-16">
          {tables.map((table) => (
            <PokerTable key={table.id} table={table} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;