import React from 'react'

const Header = (props) => {
    return (
        <tr>
            <th className={"empty"}></th>
            <th className={"day-column"}>Sun ({props.hours[0]} hrs)</th>
            <th className={"day-column"}>Mon ({props.hours[1]} hrs)</th>
            <th className={"day-column"}>Tue ({props.hours[2]} hrs)</th>
            <th className={"day-column"}>Wed ({props.hours[3]} hrs)</th>
            <th className={"day-column"}>Thu ({props.hours[4]} hrs)</th>
            <th className={"day-column"}>Fri ({props.hours[5]} hrs)</th>
            <th className={"day-column"}>Sat ({props.hours[6]} hrs)</th>
        </tr>
    )
}

export default Header