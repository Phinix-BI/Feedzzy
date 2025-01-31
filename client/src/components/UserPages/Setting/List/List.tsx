
import { useNavigate } from 'react-router-dom';


const List = ({name} : {name : string}) => {
     const navigate = useNavigate();
     return (
         <>
         <li onClick={ () => navigate(name.toLowerCase()) }>
         <a className="block w-full text-xl border-none border-black p-6 text-center hover:bg-[#ebebeb] shadow-inner">{name}</a></li>
         </>
     )
         
}

export default List;