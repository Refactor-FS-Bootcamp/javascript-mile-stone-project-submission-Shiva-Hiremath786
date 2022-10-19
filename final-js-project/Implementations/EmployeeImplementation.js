/* Importing BaseImplementation So that EmployeeImplementation can get 
   Inherit From it and Use all the Function What it Desire to use 
*/
import BaseImplementation from "../Implementations/BaseImplementation.js";

export default class EmployeeImplementation extends BaseImplementation{
    constructor(){
        super('employee');
    }
}