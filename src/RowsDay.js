import React, { Component } from 'react';
import Table from './Table.js';
export default class RowsDay extends Component
{
  
    constructor(props){
        super(props);
        /* Формируем состояние 
        получем последний день указанного месяца
        */ 
        this.state = {lastDay:new Date(props.meta.year, props.meta.month + 1, 0).getDate()
            , month:props.meta.month 
            , monthNames:["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ]};
         }
    render(){
        let rows = [];
        let timeMeta = this.props.meta.timeMeata;

          let cell = []
          cell.push(<td ></td>);
          /*формируем шапку с датами + пометка желтой лампочкой на текущий день
          логично было бы не с первого дня месяца а стекущего, но оставил как в шаблоне.
          */ 
          for (var i = 0; i < this.state.lastDay; i++)
          {
            let cellID = i;
            let day = this.state.monthNames[(this.state.month-1)]+', '+(i+1);
            cell.push(<td key={cellID} id={cellID} className="dateHead">
            {new Date().getDate() == (i+1) ? <span className ="flag"></span> :''}
            {day}</td>
            );
          }
          rows.push(<tr key={0} class="borderTable" >{cell}</tr>);
          console.log(this.props.meta);
          /* собираем наши столы первая ячейка это название и номер стола */
         this.props.meta.tables.forEach(element => {
             let cell = [];
             console.log(element);
             cell.push(<td className="borderTable "><div className="numTable">{element.id}</div><div className="textRotate">{element.caption}</div></td>);
            for (let j =1 ; j <= this.state.lastDay; j++)
            {
                const cellId = element.id+'_'+j;
             /* создаем  объекты столы с возможностью ставить бронь  по хорошему существющие брони не должно быть возможности снимать 
              или только автор брони.
              в объек передаем параметы 
              JSON  -максимально ужат
              1. Мета описнаие времени бронни для всех единое
              2. Забронированные мест в указанный день
              "reserv":{"1":[...],..} - ключь день месяца. Массив - ключи забронированных временных интервалов.

             */
                cell.push(
                    <td key={cellId}>
                        <Table reserv= {element.reserv[j.toString()]} meta = {timeMeta} day={j}/>
                    </td>
                );
            }
       
            rows.push(<tr key={element.id} >{cell}</tr>)
         });
         /*this.tabels.array.forEach(element => {
            rows.push(<tr key={0} >{cell}</tr>)
          });
         */
        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
}
