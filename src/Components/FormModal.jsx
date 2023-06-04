const classButtonAgree = "p-2 border rounded-full shadow-xl hover:bg-cyan-600 hover:text-slate-300 text-cyan-700 border-cyan-700"
const classButtonCancel = "p-2 border rounded-full shadow-xl hover:bg-red-600 hover:text-slate-300 text-red-700 border-red-700"

export function FormModal({isVisible, onClose } ){
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    return(
        <div id="wrapper" onClick={handleClose} className=" flex justify-center items-center fixed inset-0 bg-opacity-25 backdrop-blur-sm p-5 rounded-lg " >
         <section className="p-5 rounded-lg shadow-2xl bg-slate-200">
          <header>
            <h1>Hello, World</h1>
          </header>
          <footer className="grid grid-cols-2 p-5 gap-2">
           <button className={classButtonAgree}>Aceptar</button>
           <button onClick={()=>onClose()} className={classButtonCancel}>Cancelar</button>
          </footer>
         </section>
        </div>
    )
}   