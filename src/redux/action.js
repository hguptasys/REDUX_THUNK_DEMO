import { SET_PRODUCTS, FETCH_PRODUCTS } from "../types/types";
import productsService from "../service/service";

export const fetchProducts = () => {
  //Done for REDUX_THUNK
  return async function (dispatch) {
    const products = await productsService.getAllProducts();
    console.log("setProducts",products)
    dispatch(setProducts(products));
  }; 

  
};

export const setProducts = (products = null) => {
  if (products) {
    console.log("products",products)
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }
};


export const edit = (data) => (dispatch, getState) => {
  let newTodo = prompt("Edit Your correct name", data.name);
  console.log("newTodo",newTodo)
  //let newTodo = data.name
  if (newTodo) {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: data.id,
        todo: newTodo,
      },
    });
   
  } else {
    alert("Got a blank value");
  }
};

export const deleteD = (id) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });

  
};