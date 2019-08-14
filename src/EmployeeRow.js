import React from 'react'

const EmployeeRow = (props) => {
    return (
        <tr>
            <td style={{border: '1px solid black'}}>{props.emp.name} ({props.hours} hrs)</td>
            {
                props.schedule[0] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[0].color}`}}>
                    {props.schedule[0].start_at} - {props.schedule[0].end_at}<br></br>
                    {props.schedule[0].role}
                </td>
            }
            {
                props.schedule[1] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[1].color}`}}>
                    {props.schedule[1].start_at} - {props.schedule[1].end_at}<br></br>
                    {props.schedule[1].role}
                </td>
            }
             {
                props.schedule[2] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[2].color}`}}>
                    {props.schedule[2].start_at} - {props.schedule[2].end_at}<br></br>
                    {props.schedule[2].role}
                </td>
            }
             {
                props.schedule[3] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[3].color}`}}>
                    {props.schedule[3].start_at} - {props.schedule[3].end_at}<br></br>
                    {props.schedule[3].role}
                </td>
            }
             {
                props.schedule[4] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[4].color}`}}>
                    {props.schedule[4].start_at} - {props.schedule[4].end_at}<br></br>
                    {props.schedule[4].role}
                </td>
            }
             {
                props.schedule[5] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[5].color}`}}>
                    {props.schedule[5].start_at} - {props.schedule[5].end_at}<br></br>
                    {props.schedule[5].role}
                </td>
            }
             {
                props.schedule[6] === null ? <td className="day" ></td> :
                <td className="day" style={{backgroundColor: `${props.schedule[6].color}`}}>
                    {props.schedule[6].start_at} - {props.schedule[6].end_at}<br></br>
                    {props.schedule[6].role}
                </td>
            }
        </tr>
    )
}

export default EmployeeRow