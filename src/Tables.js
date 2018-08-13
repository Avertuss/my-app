import React, { Component } from 'react';
import RowsDay from './RowsDay'
import tables from './tables.json' /* json резервированных столов */ 
class Tables extends Component {

 /* Создаем тело таблицы со столбцами */
    render() {
      return (
        <div className="TablesMenu">
        <table  className="mainTable" border="0" cellspacing="0">
        
     
            <RowsDay meta ={tables}/>
         
        </table> 
        </div>
      );
    }
  }

export default Tables;