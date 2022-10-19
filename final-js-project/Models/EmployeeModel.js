/**
 * 'EmployeeModel' is used to create instance for Employee save/update and then save them to the 'localStorage'
 */
import BaseModel from "./BaseModel.js";
// Creating Employee Model which is inheriting Form Base Model
export default class EmployeeModel extends BaseModel {
    constructor() {
        super();
        this.name = '';
        this.age = 0;
    }
}