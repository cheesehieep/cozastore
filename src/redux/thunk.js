import * as types from './actions';
import categoryApi from '../api/categoryApi';
import productApi from '../api/productApi';

export const fetchCategories = () => async (dispatch) => {
  const { data } = await categoryApi.getAll();
  dispatch(types.setCategories(data));
};

export const addCategory = (item) => async (dispatch) => {
  const { data } = await categoryApi.create(item);
  dispatch(types.addCategory(data));
};

export const updateCategory = (id, item) => async (dispatch) => {
  const { data } = await categoryApi.update(id, item);
  dispatch(types.updateCategory(data));
};

export const removeCategory = (id) => async (dispatch) => {
  await categoryApi.remove(id);
  dispatch(types.removeCategory(id));
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await productApi.getAll();
  dispatch(types.setProducts(data));
};

export const addProduct = (item) => async (dispatch) => {
  const { data } = await productApi.create(item);
  dispatch(types.addProduct(data));
};

export const updateProduct = (id, item) => async (dispatch) => {
  const { data } = await productApi.update(id, item);
  dispatch(types.updateProduct(data));
};

export const removeProduct = (id) => async (dispatch) => {
  await productApi.remove(id);
  dispatch(types.removeProduct(id));
};

export const searchProduct = (text) => (dispatch) => {
  dispatch(types.searchProduct(text));
};

export const filterProductsByCate = (id) => (dispatch) => {
  dispatch(types.filterProductsByCate(id));
};

export const sortProductsByPrice = (text) => (dispatch) => {
  dispatch(types.sortProductsByPrice(text));
};

export const fetchCarts = () => (dispatch) => {
  if (localStorage.getItem('carts') === null) {
    localStorage.setItem('carts', JSON.stringify([]));
  } else {
    dispatch(types.setCarts(JSON.parse(localStorage.getItem('carts'))));
  }
};

export const addCart = (item) => (dispatch) => {
  const localCarts = JSON.parse(localStorage.getItem('carts'));
  localStorage.setItem('carts', JSON.stringify([...localCarts, item]));
  dispatch(types.addCart(item));
};

export const updateCart = (item) => (dispatch) => {
  const localCarts = JSON.parse(localStorage.getItem('carts'));
  const findCart = localCarts.find(cart => cart.id == item.id);
  findCart.quantity = findCart.quantity + item.quantity;
  localStorage.setItem("carts", JSON.stringify(localCarts));
  dispatch(types.updateCart(localCarts));
};

export const removeCart = (id) => (dispatch) => {
  const localCarts = JSON.parse(localStorage.getItem('carts'));
  const newCarts = localCarts.filter(cart => cart.id !== id);
  localStorage.setItem("carts", JSON.stringify(newCarts));
  dispatch(types.removeCart(newCarts));
};

export const login = (user) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch(types.login(user));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(types.logout());
}
