import { useContext } from "react";
import locationContext from "./locationcontext";

function MyHome(){
    const{location,updateLocation}=useContext(locationContext);
    return <div>
            <h1>Home</h1>
            <p>Home elements will appear here</p>
            <p>Location: {location}</p>
            <select onChange={(e)=>updateLocation(e.target.value)}>
                <option value='Banglore'>Banglore</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='New York'>New York</option>
                <option value='London'>London</option>
                <option value='Dubai'>Dubai</option>
            </select>

    </div>
}
export default MyHome;