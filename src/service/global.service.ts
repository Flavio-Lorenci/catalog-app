import axios from 'axios';
import { Dispatch, UnknownAction } from 'redux';
import {
  createOrUpdateAnimal,
  createOrUpdateAnimalError,
  createOrUpdateAnimalSuccess,
  deleteCatalog,
  deleteCatalogError,
  deleteCatalogSuccess,
  fetchCatalog,
  fetchCatalogError,
  fetchCatalogSuccess,
} from '../store/catalogSlice.ts';

export const getCatalog = async (
  param: any,
  dispatch: Dispatch<UnknownAction>
) => {
  dispatch(fetchCatalog());
  let apiUrl = '/api/catalog';
  try {
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
    const res = await axios.get(`${apiUrl}`);
    dispatch(fetchCatalogSuccess(res.data));
  } catch (err) {
    dispatch(fetchCatalogError());
  }
};

export const deleteItem = async (id: number, dispatch: Dispatch) => {
  dispatch(deleteCatalog());
  const apiUrl = `/api/delete/${id}`;
  try {
    await axios.delete(`${apiUrl}`);
    dispatch(deleteCatalogSuccess());
  } catch (error) {
    dispatch(deleteCatalogError(error));
  }
};

export const createOrUpdateItem = async (
  values: any,
  editingItem: any,
  dispatch: Dispatch
) => {
  dispatch(createOrUpdateAnimal());
  const apiUrl = editingItem ? `/api/update/${editingItem.id}` : '/api/create';
  try {
    if (editingItem) {
      await axios.put(`${apiUrl}`, values);
    } else {
      await axios.post(`${apiUrl}`, values);
    }
    dispatch(createOrUpdateAnimalSuccess());
  } catch (error) {
    dispatch(createOrUpdateAnimalError(error));
  }
};
