import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router';
import './Table.css'
function Table() {
  
  const[authors,setAuthors]=useState([])
 
 
  const [allAuthors,setAllAuthors]= useState({

    id: new Date().getTime,
    name:"",
    email:"",
    status:"",
    date : new Date().toLocaleDateString(),
    function :""
})

const [isEditing, setIsEditing] = useState(false); 
  const [editId, setEditId] = useState(null);

   
  const handleInputChange =(e)=>{
    const { name,value } = e.target;
       setAllAuthors({ ...allAuthors, [name]: value });
      
  }
  
  const handleSubmit = (e) => {


    
    e.preventDefault();
    if (isEditing) {
     
      setAuthors((prevAuthors) =>
        prevAuthors.map((author) =>
          author.id === editId ? { ...allAuthors, id: editId } : author
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
    
      const newAuthor = { ...allAuthors, id: new Date().getTime() };
      setAuthors([...authors, newAuthor]);
      
    }



        setAllAuthors({
          id: "",
          name: "",
          email: "",
          status: "",
          date: new Date().toLocaleDateString(),
          function: "",
        }); 
      };



        const handleDelete = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

    const handleUpdate = (author) => {
    setIsEditing(true);
    setEditId(author.id);
    setAllAuthors(author); 
  };
  



  return (
    < div className='tab'>
   


   
    <div className="table-container">
    <h2 className='auth'>Authors table</h2>
   
    <table>
      <thead>
        <tr>
          <th>AUTHOR</th>
          <th>FUNCTION</th>
          <th>STATUS</th>
          <th>EMPLOYED</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
            {authors.length > 0 ? (
              authors.map((author) => (
                <tr key={author.id}>
                  <td>
                    <div className="author-info">
                      <CgProfile size={35} />
                      <div>
                        <p>{author.name}</p>
                        <span>{author.email}</span>
                      </div>
                    </div>
                  </td>                   <td className="function">
                    <p>{author.function}</p>
                  </td>                   <td>
                    <span className="status">{author.status}</span>
                  </td>
                  <td className="date">{author.date}</td>
                  <td className="upd">
                    <button onClick={()=>handleUpdate(author)}>Update</button>
                  </td>
                  <td className="del">
                    
                      <MdDelete size={25}   onClick={() => handleDelete(author.id)}/>
                    
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No authors added yet.
                </td>
              </tr>
            )}
         </tbody>
    </table>
  </div>
  
  <div className="addForm">
    <h2>Add Author</h2>
     <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={allAuthors.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={allAuthors.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={allAuthors.status}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Function"
            name="function"
            value={allAuthors.function}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={allAuthors.date}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    
  </div>
  )
}

 export default Table


