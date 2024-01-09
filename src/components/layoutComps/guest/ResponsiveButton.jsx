import { useState } from "react"
import '../layout.css'

export default function ResponsiveButton() {
    const [open, setOpen] = useState(false)
    const handleShow =() =>{
        setOpen((prev) => !prev)
    }
    return (
        <>
            <button onClick={handleShow} className='navbar__toggle-btn' style={{ marginLeft: '7px' }}>
                <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
            </button>
            {open&&<div className='flex flex-col dropDownProfile'>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <a href="#"><i style={{ marginRight: '5px' }} className="fa-solid fa-user"></i> Ingresar</a>
                    </li>
                    <li>
                       <a href="#"><i style={{ marginRight: '2px' }} className="fa-solid fa-location-dot"></i>Mi Ubicación</a>
                    </li>
                </ul>
            </div>}
        </>
    )
}