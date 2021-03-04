import * as types from './actions';

const initialState = {
  categories: [],
  products: [],
  filteredProducts: [],
  carts: [],
  user: JSON.parse(localStorage.getItem('user'))
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case types.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case types.UPDATE_CATEGORY: 
      return {
        ...state,
        categories: state.categories.map(category => category.id === action.payload.id ? action.payload : category)
      };
    case types.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case types.UPDATE_PRODUCT: 
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case types.SEARCH_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase())),
      };
    case types.FILTER_PRODUCTS_BY_CATE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.cate_id == action.payload),
        cateId: action.payload
      };
    case types.SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredProducts: [...state.products.sort((a, b) => (action.payload === "asc") ? (a.price - b.price) : (b.price - a.price))]
      };
    case types.ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case types.UPDATE_CART:
      return {
        ...state,
        carts: action.payload
      };
    case types.REMOVE_CART:
      return {
        ...state,
        carts: action.payload
      };
    case types.SET_CARTS:
      return {
        ...state,
        carts: action.payload
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload 
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  };
};

export default reducer;