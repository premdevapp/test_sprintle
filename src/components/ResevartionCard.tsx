import {  useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';


import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface IResevartionCardProps {
    name: string;
    index: number;
}

function ResevartionCard({name, index}: IResevartionCardProps) {
    const dispatch = useDispatch();

    return (
        <div onClick={()=>{
            dispatch(removeReservation(index))
            dispatch(addCustomer({
                id: uuid(),
                name,
                foods: [],
            }))
        }} className="reservation-card-container">{name}</div>
    )
}

export default ResevartionCard
