//synchronous actions
export const setMyBooks = books => {
  return {
    type: "SET_MY_BOOKS",
    books
  };
};

export const clearBooks = () => {
  return {
    type: "CLEAR_BOOKS"
  };
};

export const deleteBookSuccess = id => {
  return {
    type: "DELETE_BOOK_SUCCESS",
    id
  };
};

//async actions
export const getMyBooks = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyBooks(response.data));
        }
      })
      .catch(console.log);
  };
};

// export function deleteBook(data) {
//   return dispatch => {
//     fetch("http://localhost:3000/api/v1/books/${data.bookId}", {
//       method: "DELETE",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => response)
//       .then(id => dispatch(deleteBookSuccess(id)));
//   };
// }
