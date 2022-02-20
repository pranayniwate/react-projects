import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi"
import { IoMdRemoveCircle } from "react-icons/io"


function List(){
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editID, setEditID] = useState(null)
    const [alert,setAlert] = useState({show:true,msg:'',type:''})
    const [checked, setChecked] = useState(false);
    document.body.style = `background:aliceblue ;`;

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(!name){
            setAlert({show:true,msg:'Please add a value',type:''})
            
        }
        else if(name && editing){
            setList(list.map((item) =>{
                if(item.id === editID){
                    return {...item,title:name}
                }
                return item;
            }))
            setName('');
            setEditing(false);
            setEditID(null);
            setAlert({ show: true, msg: 'Name changed', type: '' })
        }
        else{
        const newItem = {id : new Date().getTime().toString(), title:name};
        setAlert({ show: true, msg: 'Item added', type: '' })
        setList([...list,newItem]);
        setName('');
        }
    }

    const removeItem = (id) =>{
        setList(list.filter((item) => item.id !== id))
        setAlert({ show: true, msg: 'Item removed', type: '' })
    }

    const editItem = (id) =>{
        const newItem = list.find((item) => item.id === id)
        setEditID(id);
        setEditing(true);
        setName(newItem.title);
    }

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setAlert({ show: false, msg: '', type: '' })
        }, 1500);
        return () => clearTimeout(timeout)
    },[list,handleSubmit])

    return(
        
        <main className="game">
            <section className="list-container">
                <article className="alert-container">
            {alert.show && 
                        <h3>{alert.msg}</h3>
                    }
                    </article>
                

                <article className="input-container">
                    <form className="form" >
                        <input type="text" placeholder="e.g. Jog" value={name} onChange={(e) => setName(e.target.value)} />
                        <button type="submit" className="submit-btn" onClick={handleSubmit} >{editing?'Edit':'Submit'}</button>
                    </form>
                </article>
                {list.map((item) =>{
                    const {id, title} = item
                    return (<article className="items-container" key={id}>
                        <h3 className={checked?"list-title":null}>{title}</h3>
                        <div className="item-btn">
                            <input type="checkbox" onClick={() => setChecked(!checked)}/>
                            <button onClick={() => editItem(id)} ><BiEdit/></button>
                            <button onClick={() => removeItem(id)}><IoMdRemoveCircle/></button>
                        </div>
                </article>)
                })}

                {list.length>0?<button onClick={() => (setAlert({ show: true, msg: 'List Cleared', type: '' }),setList([]))} className="clr-btn">Clear Items</button>:null}
            
            </section>
        </main>
    )
}

export default List;