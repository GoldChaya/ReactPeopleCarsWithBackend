import React from "react";

const CarRow = ({car}) => {
            const {make, model, year} = car;
        
        return(
<>
    <tr>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
    </tr>
</>
        )
}
export default CarRow;