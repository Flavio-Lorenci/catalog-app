import {useRef} from "react";
import {Button} from "@mui/material";
import ItemDetails from "./ItemDetails.tsx";
import {CardProps} from "../interfaces/catalog.interface.ts";

function Card({animal}: CardProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    const toggleModal = (show: boolean) => {
        if (modalRef.current) {
            show ? modalRef.current.showModal() : modalRef.current.close();
        }
    }

    return (
        <>
            <div className='bg-white shadow-md relative max-w-xs h-96'>
                <div className='p-3'>
                    <div className='mb-3'>
                        <p className='text-lg font-semibold text-center'>{animal.name}</p>
                        <p className='font-semibold text-center'>{animal.placeOfFound}</p>
                        <img src={animal.image} alt={animal.species} className='w-full h-48 object-cover'/>
                    </div>
                    <div className='border border-gray-100 mb-3'></div>

                    <div className='flex flex-col lg:flex-row justify-between mb-2'>
                        <Button onClick={() => {
                            toggleModal(true);
                        }} variant="outlined">
                            <i className='bi bi-plus-square'></i> Read More
                        </Button>
                    </div>
                </div>
            </div>
            <ItemDetails
                ref={modalRef}
                onCancel={() => toggleModal(false)}
                animal={animal}/>
        </>
    );
}

export default Card;