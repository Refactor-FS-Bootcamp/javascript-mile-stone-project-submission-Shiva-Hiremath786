import store from "./storage.js";

export default class BaseImplementation {

    

    constructor(key) {
        //get it from session
        // setting Main Key
        this.key_main = key;
        let collection_temp = localStorage.getItem(key);
            //  checking , Is localStorage has the collection or not , if Not setting it to Empty array 
        this.collection = collection_temp != null ? JSON.parse(collection_temp) : [];
    }

    /**
     * This function will be used to add data to session/local
     * @param {*} model  Model that needs to be added
     */
    Add(model) {
         // finding MaxID From the List
        let maxnum = this.arrayMax(this.collection);
         // setting new Max Id
        let new_id = maxnum + 1;
        model['id'] = new_id;
         // push Data 
        this.collection.push(model);
        // there After updating LocalStorage
        this.UpdateStore(this.collection);
    }

        // Finding index of data in the collection according to given Id so that we can Update it
    Update(id, model) {
        console.log("id in baseImp is : " + id);
        let index = this.collection.findIndex((emp) => emp.id == id);
        this.collection[index] = model;
         // there After updating LocalStorage
        this.UpdateStore(this.collection);
    }

    Delete(id) {
        let index = this.collection.findIndex((emp) => emp.id == id);
        this.collection.splice(index, 1);
        store.set(this.key_main, this.collection);
        alert(`You sure? (id : ${id})`);
    }

    arrayMax(arr) {
        if (arr.length == 0) {
            return 0;
        } else {
            let max_id = arr[0].id;
            arr.forEach(element => {
                if (element.id > max_id) max_id = element.id;
            });
            return max_id;
        }
    }

    UpdateStore(arr) {
        //let session_storage = 
        localStorage.setItem(this.key_main, JSON.stringify(arr));
    }

}