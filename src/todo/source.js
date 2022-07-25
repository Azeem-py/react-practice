import React, {useState} from "react";
import './style.css'

const Todo = ()=>{

    
    return(
        <>
            <h2>MY TODO</h2>
            <Input/>
        </>
    )

}

const Input = ()=>{
    const [todo, setTodo] = useState('');
    const [lists, setLists] = useState([]);
   
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (todo){

            const newTodo = {id: new Date().getTime().toString(), todo, done:false};
            setLists([...lists, newTodo]);
            setTodo('')
        }
    }
    
    const handleDone = (id)=>{
        const newTodo = lists.map((list)=>{
            if (list.id===id){
                list.done = true;
                return list;
            }else{return list}
        })

        setLists(newTodo);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" placeholder="Add to your TODO" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="submit">Add</button>
                </div>
            </form>

            <section className="todo-container">
                {lists.map((list)=>{
                    const {id, todo, done} = list
                    return(
                    <div key={id}>
                        {done?<h3><s>{todo}</s></h3>:<h3>{todo}</h3>}
                        {done||<button type="button" onClick={()=>handleDone(id)}>done</button>}
                    </div>
                    )
                })}
            </section>
        </>
    )
}



export default Todo