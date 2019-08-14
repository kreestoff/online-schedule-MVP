import React, { Component } from 'react'
import { employees } from './employees'
import Header from './Header'
import EmployeeRow from './EmployeeRow'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      employees,
      sort: 'first'
    }
  }

  sortByFirst = (emp) => {
    return emp.sort((a, b) => (a.name.split(" ")[0] > b.name.split(" ")[0]) ? 1 : -1)
  }

  sortByLast = (emp) => {
    return emp.sort((a, b) => (a.name.split(" ")[1] > b.name.split(" ")[1]) ? 1 : -1)
  }

  // change how employees are sorted
  handleSort = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  // generates an array of numbers of hours for each day starting with Sunday at index of 0
  totalHoursEachDay = (emp) => {
    const hours = [0, 0, 0, 0, 0, 0, 0]
    emp.forEach(employee => {
      employee.shifts.forEach(shift => {
        hours[shift.day] += shift.duration 
      })
    })
    return hours
  }

  // generates the total number of hours for one employee
  totalHoursForWeek = (emp) => {
    let total = 0
    emp.shifts.forEach(shift => {
      total += shift.duration
    })
    return total
  }

  //generates an array of a work week for each employee
  scheduleForEmployee = (emp) => {
    const schedule = [null, null, null, null, null, null, null]
    emp.shifts.forEach(shift => {
      schedule[shift.day] = shift
    })
    return schedule
  }

  render() {
    return (
      <div>
        <div>Sort by 
          <select onChange={(e) => this.handleSort(e)}>
            <option value="first" selected="selected">First Name</option>
            <option value="last">Last Name</option>
          </select>
        </div>
        <table id="schedule" >
          <thead>
            <Header hours={this.totalHoursEachDay(employees)} />
          </thead>
          <tbody>
              {
                this.state.sort === "first" ? this.sortByFirst(this.state.employees).map(emp => {
                  return <EmployeeRow emp={emp} hours={this.totalHoursForWeek(emp)} schedule={this.scheduleForEmployee(emp)}/>
                }) : this.sortByLast(this.state.employees).map(emp => {
                  return <EmployeeRow emp={emp} hours={this.totalHoursForWeek(emp)} schedule={this.scheduleForEmployee(emp)}/>
                })
              }
          </tbody>
        </table>

      </div>
    )
  }
}


