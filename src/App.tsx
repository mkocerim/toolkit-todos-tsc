import {useState} from 'react';
import { useAppDispatch } from './redux/store';
import { add } from './redux/todoSlice';

function App() {

  const [title, setTitle]=useState("");
  const dispatch=useAppDispatch()

  const onSave=()=>{
    dispatch(add("title"))
    setTitle("")

  }




  return (
    <div className="App">
  <input name="title" value={title} onChange={(e)=>setTitle(e.currentTarget.value)} />
  <button onClick={onSave}>Save</button>
    </div>
  );
}

export default App;
