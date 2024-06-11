import { Button } from '@mui/material';
import { forwardRef } from 'react';
import { Animal } from '../interfaces/catalog.interface.ts';

interface AnimalFormDialogProps {
  onCancel: () => void;
  animal: Animal | any;
}

const ItemDetails = forwardRef<HTMLDialogElement, AnimalFormDialogProps>(
  ({ animal, onCancel }, ref) => {
    const controlValue = [
      'name',
      'species',
      'family',
      'habitat',
      'placeOfFound',
      'diet',
      'description',
      'weightKg',
      'heightCm',
    ];

    return (
      <dialog
        ref={ref}
        className="modal bg-white rounded-lg p-6 w-full max-w-2xl"
        id="modal">
        <div className="flex flex-wrap -mx-3 mb-6">
          {controlValue.map((el: string) => (
            <div key={el} className="w-full md:w-1/2 px-3 mt-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name">
                {el}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                value={animal[el]}
                disabled
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Button variant="contained" onClick={onCancel}>
            <i className="bi bi-plus-square"></i> Ok
          </Button>
        </div>
      </dialog>
    );
  }
);

export default ItemDetails;
