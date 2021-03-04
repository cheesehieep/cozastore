export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const FILTER_PRODUCTS_BY_CATE = 'FILTER_PRODUCTS_BY_CATE';
export const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const SET_CARTS = 'SET_CARTS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category
});

export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  payload: category
});

export const removeCategory = (category) => ({
  type: REMOVE_CATEGORY,
  payload: category
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const searchProduct = (text) => ({
  type: SEARCH_PRODUCT,
  payload: text
});

export const filterProductsByCate = (id) => ({
  type: FILTER_PRODUCTS_BY_CATE,
  payload: id
});

export const sortProductsByPrice = (text) => ({
  type: SORT_PRODUCTS_BY_PRICE,
  payload: text
});

export const addCart = (cart) => ({
  type: ADD_CART,
  payload: cart
});

export const updateCart = (cart) => ({
  type: UPDATE_CART,
  payload: cart
});

export const removeCart = (cart) => ({
  type: REMOVE_CART,
  payload: cart
});

export const setCarts = (carts) => ({
  type: SET_CARTS,
  payload: carts
});

export const login = (user) => ({
  type: LOGIN,
  payload: user
});

export const logout = () => ({
  type: LOGOUT,
});