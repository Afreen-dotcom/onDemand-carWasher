import {useState,useEffect,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import locationContext from './locationcontext';

const MyEvent=()=>{
    const{location,updateLocation}=useContext(locationContext)
    const[eventTypes, setEventTypes]=useState(['Sports','movie','dance']);
    const [eventType, setEventType]=useState('');
    const [eventName, setEventName]=useState('');
    const [eventDesc, setEventDesc]=useState('');
    // const handleEventTypeChange=(e)=>{
    //     setEventType("sports");
    // }
    useEffect(()=>{
        console.log('use effect triggred') 
        //alert(eventType)
    },[eventType])//component did mount equivalent but trigger after every state change
    return <div>
        <h1>Events</h1>

        <hr/>
        <p>Location: {location}</p>
        <div className='container'>
            <div className='row'>
            <form className='col-md-5' >
            <div className='form-group'>
                Type
                <select className='form-control' onChange={(e)=>setEventType(e.target.value)}>
                 {eventTypes.map((item,index)=>(
                     <option key={index} value={item} >
                         {item}</option>)
                        )}
                </select>
                
            </div>
            <div className='form-group'>
                Name<input  type='text' value={eventName} className='form-control' onChange={(e)=>{setEventName(e.target.value)}}></input>
            </div>
            <div className='form-group'>
                Desc<input  type='text' value={eventDesc} className='form-control' onChange={(e)=>{setEventDesc(e.target.value)}}></input>
            </div>
            <button className='btn btn-primary'>Save</button>
            </form>
            <div className='col-md-7 ' >
                        Type: {eventType} <br/>
                        Name: {eventName} <br/>
                        desc: {eventDesc} <br/>
            </div>
            </div>
        </div>
        
    </div>
}
export default MyEvent;