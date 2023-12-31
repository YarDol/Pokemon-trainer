import React from 'react';
import { Select, SelectProps } from '../stories/Select';

const TeamModal: React.FC<{ savedPokemons: any[]; firstName: string; lastName: string; onClose: () => void }> = ({
  savedPokemons,
  firstName,
  lastName,
  onClose,
}) => {
  const handleConfirmation = () => {
    alert('Best of luck on your journey! And may the odds be ever in your favor.');
    onClose();
  };

  const selectOptions = savedPokemons.slice(0, 4).map((pokemon: any, index: number) => ({
    value: pokemon.name,
    label: pokemon.name,
  }));

  const selectProps: SelectProps = {
    id: 'select-team-modal',
    label: 'Pokemons:',
    assistiveText: 'Select a Pokemon',
    options: selectOptions,
    ariaDescribedBy: 'select-team-modal-at',
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent border-none outline-none z-20 text-lg"
        >
          X
        </button>
        <h2 className="text-2xl mb-4 p-2">Team Summary</h2>
        <div className="mb-4 m-2">
          <p>
            {firstName} {lastName} Team
          </p>
          <hr />
          <Select {...selectProps} />
        </div>
        <button
          onClick={handleConfirmation}
          className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded inline-block"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TeamModal;
