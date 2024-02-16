import { createContext } from "react";
const defaultContextInfo = {
    author: 'Sunny Rai',
    address: 'Bangalore',
    ph: '*****59'
}
const MyContext = createContext(defaultContextInfo);
export default MyContext;