import {useEffect, useRef, useState} from 'react';
import {Button} from '@mui/material';
import CreateItem from "../components/CreateItem.tsx";
import CatalogTable from "../components/CatalogTable.tsx";

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

    const fetchCatalog = async () => {
        const apiUrl = '/api/catalog';
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setCatalog(data);
        } catch (error) {
            console.log('Error fetching data', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatalog();
    }, []);

    const createNewItem = async (values: any) => {
        try {
            const apiUrl = editingItem ? `/api/update/${editingItem.id}` : '/api/create';
            await fetch(apiUrl, {
                method: editingItem ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            await fetchCatalog();
            toggleModal(false);
        } catch (error) {
            console.log('Error posting data', error);
        }
    };

    const deleteItem = async (id: number) => {
        try {
            const apiUrl = `/api/delete/${id}`;
            await fetch(apiUrl, {
                method: 'DELETE',
            });
          await  fetchCatalog();
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
                onSubmit={createNewItem}
                onCancel={() => toggleModal(false)}
                editingItem={editingItem}
            />
            <CatalogTable catalog={catalog} loading={loading} onDelete={deleteItem}
                          onEdit={handleEditItem}/>
        </>
    );
}

export default AdminPage;
