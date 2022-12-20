import { AiOutlineOrderedList } from 'react-icons/ai';

const Header = ({func}) => (
   <header>
      <div className="center">
         <div className="logo">
            <h1><AiOutlineOrderedList/>CRUD</h1>
         </div>
         <nav>
            <ul>
               <button onClick={func}>Adicionar contato</button>
            </ul>
         </nav>
      </div>
   </header>
)

export default Header;