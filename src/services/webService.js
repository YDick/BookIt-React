export const getAllBookClub = () => {
  return new Promise((resolve, reject) => {
    fetch("http://book-it.herokuapp.com/api/v1/book_clubs")
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("Fetch::", err));
  });
};


export const getBookClub = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://book-it.herokuapp.com/api/v1/book_clubs/${id}`,{ headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.JWT
  }})
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("Fetch::", err));
  });
};



export const currentUser = () => {

  if(!sessionStorage.JWT.length > 0){
    return ("NO TOKEN")
  }
  return new Promise((resolve, reject) => {
    fetch("https://book-it.herokuapp.com/api/v1/current",{ headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.JWT
    }})
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("Fetch::", err));
  });
};

// fetch("https://book-it.herokuapp.com/api/v1/current", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + sessionStorage.JWT
//       }
//     })
//       .then(e => e.json())
//       .then(data => {
//         console.log("Success:", data.current_user.address);
//         var loginAddress = data.current_user.address;
//         console.log("var", loginAddress);