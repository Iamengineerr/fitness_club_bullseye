
import './App.css';


function App() {
  return (
    <div className='container'>
      
     <h1>BookList Maintainance Form</h1>
     <h2>Add and view your books using local storage</h2>

     

    <div className='form'>
     
      <div className='form_1'>
        <label>Title  </label>
        <input type="text" name="title"></input>
      </div>

      <div className='form_2'>
        <label>Author</label>
        <input type="text" name="author"></input>
      </div>

      <div className='form_3'>
        <label>ISBN# </label>
        <input type="text" name="isbn#"></input>
      </div>
      
      <div>
        <button type='submit'>ADD</button>
        </div>

    </div>

    </div>
    
    
  )
}

export default App;
