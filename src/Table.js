import React, { Component } from 'react';

 class Table extends Component
{
    
     constructor(props)
     {
         super(props);
         this.state = {reserv:this.props.reserv};
         this.handleClick = handleClick.bind(this);
     }   

        
 
    render(){

        let metaKey = Object.keys(this.props.meta);
        let meta = this.props.meta;
        let reserv = this.state.reserv ;
        let time=[];
       
        let persent =   this.state.reserv !=undefined && this.state.reserv.length >0 ? 
        Math.round(  this.state.reserv.length / metaKey.length*100) : 0 ;
    
        let rowTime = [];
       
        metaKey.forEach( ( element,index)  => {
                /*
                Проставляем в цикли забронированное время 
                    логика такая:
                    проверяем в атрибуте reserv объекта слота 
                    существует ли бронь на указанное время 
                    data-id - Ид временнного интервала
                */ 
                 rowTime.push(
                    < div data-id={element} onClick={this.handleClick} 
                    className={reserv !=undefined && reserv.indexOf( Number(element)) >-1
                        ? 'time reserv':'time notreserv'}> 
                        {meta[element]}
                    </div>
                );
                if(rowTime.length  == 2){
                    time.push(<div  className="rowTime">{rowTime}</div>);
                    rowTime=[];
                }
            
        });
    
        return(<div className="timeBlock">
        <div  className={persent > 0 ? "timePanel yellow" :"timePanel" }>{  persent}</div>
            {time}
        </div>
        );
    }
   
}
function  handleClick (e)
{
       let res = this.state.reserv;
     
       let pos =  Number(e.target.getAttribute('data-id'));
       if (typeof res== "undefined")
       {
        res =[pos];

       }
        else 
        {
            let index = res.indexOf( Number(pos));
                if ( index>-1)
                res.splice(index,1);
                else 
                res.push(pos);
        }
        /*добавтиь асинхронный запрос на сервер  для фиксирования брони  */
        this.setState({reserv: res});
}  
export default Table;
