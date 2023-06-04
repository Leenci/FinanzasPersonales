import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const elementPen = <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare'/>
const elementTrash = <FontAwesomeIcon icon={faTrashCan} className='faTrashCan'/>

const ClassName = "grid self-center col-span-3 border justify-items-center border-slate-600"
const ClassName01 = "grid items-center border justify-items-center border-slate-600"



export function Table({list}){
    
    
    return (
        <table className="grid shadow-2xl table-fixed">
            <thead >
                <tr className="grid grid-cols-11 ">
                    <th className="col-span-3 border border-slate-600">Categoria</th>
                    <th className="col-span-3 border border-slate-600">Fecha</th>
                    <th className="col-span-3 border border-slate-600">Monto</th>
                    <th className="border border-slate-600">Edit</th>
                    <th className="border border-slate-600">Delete</th>  
                </tr>
            </thead>
            <tbody>
                {
                    list.map(data =>{
                        const {id, Category, Date, Amount} = data
                        return(
                    <tr key={id} className="grid grid-cols-11">
                    <td className={ClassName}>{Category}</td>
                    <td className={ClassName}>{Date}</td>
                    <td className={ClassName}>{Amount}</td>
                    <td className={ClassName01}><button>{elementPen}</button></td>
                    <td className={ClassName01}><button>{elementTrash}</button></td>
                </tr>

                    )
                    })
                }
            </tbody>
        </table>
    
    )
}  