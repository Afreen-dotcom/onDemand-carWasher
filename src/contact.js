import { useContext } from "react";
import locationContext from "./locationcontext";

function MyContact(){
    const {location, updateLocation}=useContext(locationContext)
    return <div>
            <h1>Contact</h1>
            <p>Contact list will appear here</p>
            {location}
    </div>
}
export default MyContact;