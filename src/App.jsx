import { useState } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

import Header from './components/Header.jsx'
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {
   //States
   const [formCreate, setFormCreate] = useState(false);
   const [formEdit, setFormEdit] = useState(false);
   const [index, setIndex] = useState(0)
   const [contacts, setContacts] = useState([]);

   //controle de formulários
   const createForm = () => setFormCreate(!formCreate);
   const editForm = () => setFormEdit(!formEdit);

   //funções de verificação
   const verifyButton = (i) => {
      setIndex(i);
      editForm();
   }
   //Adicionar novo contato
   const newContact = (contact) => {
      setContacts([...contacts,contact]);
      createForm();
   }
   //Editar contato
   const editContact = (arr) => {
      setContacts(arr);
      editForm();
   }

   const deleteContact = (id) => {
      const data = [];
      let ctId;
      contacts.forEach((ct,i) => {
         if(id !== i){
            ctId = i == 0 ? 1:i
            data.push({
               id: ctId,
               name:ct.name,
               email:ct.email
            })
         }
      });
      setContacts(data);
   }

   //Renderizado
   return (
      <>
         <Header func={createForm}/>
         {formCreate && <Form func={createForm} title="Registrar" contacts={contacts} acao={newContact}/>}
         {formEdit && <Form func={editForm} title="Editar" index={index} contacts={contacts} acao={editContact}/>}
         <main>
            <section>
               <div className="center">
                  {contacts.length === 0 && <h2>Nenhum contato cadastrado</h2>}
                  {contacts.length > 0 && 
                  <table>
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Nome</th>
                           <th>Email</th>
                           <th>Ações</th>
                        </tr>
                     </thead>
                     <tbody>
                        {contacts.map((contact,i) => (
                           <tr key={contact.id}>
                              <td>{contact.id}</td>
                              <td>{contact.name}</td>
                              <td>{contact.email}</td>
                              <td className="buttons">
                                 <button onClick={() => deleteContact(i)} className="button" style={{'--clr': '#f33d3d'}}><BsFillTrashFill/></button>
                                 <button onClick={() => verifyButton(contact.id)} className="button" style={{'--clr':'#0077ff'}}><AiFillEdit/></button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  }
               </div>
            </section>
         </main>
         <Footer/>
      </>
   )
}

export default App
