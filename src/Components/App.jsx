import { Table } from './Table'
import { FormModal } from './FormModal'
import { useState } from 'react'
import { listIngresos, listGastos } from '../Array'

const classButton = "w-1/2 border rounded-full shadow-xl hover:bg-lime-600 hover:text-slate-300 text-lime-700 border-lime-700"

export default function App(){
    const [showModal, setShowModal] = useState(false)
    const text = ""
    return( 
        <>
   <div className='grid grid-cols-1 gap-4 p-4 m-4 bg-blue-800 rounded-lg shadow-2xl lg:grid-cols-2'>
    <div className="p-5 rounded-lg shadow-2xl bg-slate-200">
      <div className="grid content-between grid-cols-2 p-5">
        <h1 className="ml-2 text-5xl font-bold">Ingresos</h1>
        <div className="grid justify-items-end">
        <button className={classButton} onClick={() => setShowModal(true)}>Agregar</button>
        </div>
      </div>
      <Table list={listIngresos}></Table>
    </div>
    <div className="p-5 rounded-lg shadow-2xl bg-slate-200">
      <div className="grid content-between grid-cols-2 p-5">
        <h1 className="ml-2 text-5xl font-bold">Gastos</h1>
        <div className="grid justify-items-end">
        <button className={classButton} onClick={() => setShowModal(true)}>Agregar</button>
        </div>
      </div>
      <Table list={listGastos}></Table>
    </div>
    </div> 
    <FormModal isVisible={showModal} onClose={()=>setShowModal(false)}></FormModal>
      </>
    
  )
}