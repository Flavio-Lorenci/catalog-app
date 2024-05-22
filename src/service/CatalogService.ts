export const fetchCatalog = async (param: any) => {
    let apiUrl = '/api/catalog';
    const params = new URLSearchParams();

    if (param.selectedRadio) {
        params.append('species', param.selectedRadio);
    }
    if (param.searchBar) {
        params.append('name', param.searchBar);
    }
    const queryString = params.toString();
    if (queryString) {
        apiUrl += `?${queryString}`;
    }
    try {
        const res = await fetch(apiUrl);
        return await res.json();
    } catch (error) {
        console.log('Error fetching data', error);
        throw error;
    }
};

export const createOrUpdateItem = async (values: any, editingItem: any) => {
    const apiUrl = editingItem ? `/api/update/${editingItem.id}` : '/api/create';
    try {
        await fetch(apiUrl, {
            method: editingItem ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        return fetchCatalog('');
    } catch (error) {
        console.log('Error posting data', error);
        throw error;
    }
};

export const deleteItem = async (id: number) => {
    const apiUrl = `/api/delete/${id}`;
    try {
        await fetch(apiUrl, {
            method: 'DELETE',
        });
        return fetchCatalog('');
    } catch (error) {
        console.log('Error deleting data', error);
        throw error;
    }
};
