import { Button } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Animal } from '../interfaces/catalog.interface.ts';
import Spinner from './Spinner.tsx';

interface CatalogTableProps {
  catalog: Animal[];
  loading: boolean;
  onDelete: (id: number) => void;
  onEdit: (item: any) => void;
}

function CatalogTable({
  catalog,
  loading,
  onDelete,
  onEdit,
}: CatalogTableProps) {
  const columns = [
    'Delete',
    'Edit',
    'Name',
    'Species',
    'Family',
    'Place of Found',
    'Habitat',
    'Diet',
    'Weight (kg)',
    'Height (cm)',
    'Image',
  ];

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className="bg-blue-50 px-4 py-10">
          <div className="container-xl lg:container m-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-500 text-white">
                  <tr>
                    {columns.map((column: string) => (
                      <th
                        key={column}
                        className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {catalog.map((item: any) => (
                    <tr key={item.id}>
                      <td className="text-left py-3 px-4">
                        <Button onClick={() => onDelete(item.id)}>
                          <MdDelete />
                        </Button>
                      </td>
                      <td className="text-left py-3 px-4">
                        <Button onClick={() => onEdit(item)}>
                          <MdEdit color="primary" />
                        </Button>
                      </td>
                      <td className="text-left py-3 px-4">{item.name}</td>
                      <td className="text-left py-3 px-4">{item.species}</td>
                      <td className="text-left py-3 px-4">{item.family}</td>
                      <td className="text-left py-3 px-4">
                        {item.placeOfFound}
                      </td>
                      <td className="text-left py-3 px-4">{item.habitat}</td>
                      <td className="text-left py-3 px-4">{item.diet}</td>
                      <td className="text-left py-3 px-4">{item.weightKg}</td>
                      <td className="text-left py-3 px-4">{item.heightCm}</td>
                      <td className="text-left py-3 px-4">
                        {item.image.substring(0, 20) + '...'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CatalogTable;
