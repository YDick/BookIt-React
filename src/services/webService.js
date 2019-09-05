export const getAllBookClub = () => {
  return new Promise((resolve, reject) => {
    fetch("http://book-it.herokuapp.com/api/v1/book_clubs")
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("Fetch::", err));
  });
};


export const getBookClub = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://book-it.herokuapp.com/api/v1/book_clubs/${id}`)
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("Fetch::", err));
  });
};
