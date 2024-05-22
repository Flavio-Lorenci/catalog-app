import {useEffect, useRef, useState} from 'react';
import {Button} from '@mui/material';
import CreateItem from "../components/CreateItem.tsx";
import CatalogTable from "../components/CatalogTable.tsx";
import {createOrUpdateItem, deleteItem, fetchCatalog} from "../service/CatalogService.ts";

function AdminPage() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingItem, setEditingItem] = useState<any>(null);

    const toggleModal = (show: boolean) => {
        if (modalRef.current) {
            show ? modalRef.current.showModal() : modalRef.current.close();
        }
    }

    const getCatalog = async () => {
        setLoading(true);
        try {
            const data = await fetchCatalog('');
            setCatalog(data);
        } catch (error) {
            console.log('Error fetching data', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCatalog();
    }, []);

    const handleCreateOrUpdateItem = async (values: any) => {
        try {
            const updatedCatalog = await createOrUpdateItem(values, editingItem);
            setCatalog(updatedCatalog);
            toggleModal(false);
        } catch (error) {
            console.log('Error posting data', error);
        }
    };

    const handleDeleteItem = async (id: number) => {
        try {
            const updatedCatalog = await deleteItem(id);
            setCatalog(updatedCatalog);
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
                <Button onClick={() => {
                    setEditingItem(null);
                    toggleModal(true);
                }} variant="contained">
                    <i className='bi bi-plus-square'></i> Add New Article
                </Button>
            </div>
            <CreateItem
                ref={modalRef}
                onSubmit={handleCreateOrUpdateItem}
                onCancel={() => toggleModal(false)}
                editingItem={editingItem}
            />
            <CatalogTable catalog={catalog} loading={loading} onDelete={handleDeleteItem}
                          onEdit={handleEditItem}/>
        </>
    );
}

export default AdminPage;
