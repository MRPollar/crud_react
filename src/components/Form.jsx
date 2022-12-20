import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const Form = ({contacts,index,title,func,acao}) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const inEmail = document.querySelector("#inEmail");

   

   useEffect(()=>{
      if(index === undefined){
         return
      }
      const contact = contacts.find(ct => ct.id === index);
      setName(contact.name);
      setEmail(contact.email);
   },[index])
   
   const handleSubmit = async (e) =>{
      e.preventDefault();
      if(name === "" || email === ""){
         return alert("Informe todos os dados corretamente");
      }
      if(!email.includes("@")){
         alert("informe um E-mail válido");
         return inEmail.focus();
      }
      const verifyEmail = await contacts.find((ct) => ct.email === email)
      if(index === undefined){
         if(verifyEmail){
            alert("O E-mail já existe na base de dados");
            return inEmail.focus();
         }
      }
      let data;
      if(index === undefined){
         data = {
            id: contacts.length + 1,
            name: name,
            email: email
         };
         acao(data);
      } else {
         data = {
            id: index,
            name: name,
            email:email
         }
         let num = Number(index - 1);
         contacts.splice(num,1, data);
         console.log(contacts)
         acao(contacts);
      }
   }

   return(
      <section className="form-float">
         <button className="close" style={{'--clr': '#f33d3d'}} onClick={func}><AiOutlineClose/></button>
         <div className="center">
            <form onSubmit={handleSubmit}>
               <h1>{title}</h1>
               <label htmlFor="inNome">Nome:</label>
               <input onChange={(e) => setName(e.target.value)} defaultValue={name} type="text" id="inName" placeholder="Nome..."/>
               <label htmlFor="inEmail">E-mail:</label>
               <input onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="text" id="inEmail" placeholder="E-mail..."/>
               <button type="submit">Salvar</button>
            </form>
         </div>
      </section>
   )
}

export default Form