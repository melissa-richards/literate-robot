import { useState, useEffect } from 'react';
import firebase from './firebase.js';

function App() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);

    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(userInput);

    setUserInput('');
  }

  useEffect(() => {
    // make a refrence to our database
    const dbRef = firebase.database().ref();

    //add the event lister to watch for changes to our database
    dbRef.on('value', (response) => {

      const newState = [];

      const data = response.val();
      // iterate through the data object
      for (let property in data) {
        newState.push({
          bookTitle: data[property],
          bookID: property,
        });
      }

      setBooks(newState);

    })

  }, [])

  const removeBook = (whatToRemove) => {
    //get access to our database
    const dbRef = firebase.database().ref();
    //use a new firebase method to remove an item
    dbRef.child(whatToRemove).remove();
  }

  return (
    <div className="App">
      <h1>BOOKSHELF</h1>
      <ul>
        {
          books.map((book) => {
            return (
              <li>
                <p>{book.bookTitle}</p>
                <p>{book.bookID}</p>
                <button onClick={() => removeBook(book.bookID)}>remove</button>
              </li>
            )
          })
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newBook">add a new book to your shelf </label>
        <input
          id="newBook"
          type="text"
          value={userInput}
          onChange={handleChange}
        />
        <button>Add book</button>
      </form>

    </div>
  );
}

export default App;
