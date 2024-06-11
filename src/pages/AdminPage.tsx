import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogTable from '../components/CatalogTable.tsx';
import CreateItem from '../components/CreateItem.tsx';
import {
  createOrUpdateItem,
  deleteItem,
  getCatalog,
} from '../service/global.service.ts';

function AdminPage() {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [editingItem, setEditingItem] = useState<any>(null);

  const toggleModal = (show: boolean) => {
    if (modalRef.current) {
      show ? modalRef.current.showModal() : modalRef.current.close();
    }
  };

  useEffect(() => {
    getCatalog('', dispatch);
  }, [dispatch]);

  const { loading, animal } = useSelector((state: any) => state.catalog);

  const handleCreateOrUpdateItem = async (values: any) => {
    try {
      await createOrUpdateItem(values, editingItem, dispatch);
      await getCatalog('', dispatch);
      toggleModal(false);
    } catch (error) {
      console.log('Error posting data', error);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteItem(id, dispatch);
      await getCatalog('', dispatch);
    } catch (error) {
      console.log('Error deleting data', error);
    }
  };

  const handleEditItem = (item: any) => {
    setEditingItem(item);
    toggleModal(true);
  };

  return (
    <>
      <div className="flex justify-end items-center space-x-4 mt-4 mr-4 mb-4">
        <Button
          onClick={() => {
            setEditingItem(null);
            toggleModal(true);
          }}
          variant="contained">
          <i className="bi bi-plus-square"></i> Add New Article
        </Button>
      </div>
      <CreateItem
        ref={modalRef}
        onSubmit={handleCreateOrUpdateItem}
        onCancel={() => toggleModal(false)}
        editingItem={editingItem}
      />
      <CatalogTable
        catalog={animal}
        loading={loading}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
      />
    </>
  );
}

export default AdminPage;
