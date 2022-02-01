/* Instructions: If you get stuck write the portion out you can't complete in 
   pseudo code (try to still be specific about what you would do). Include a 
   question worded how you would ask another member of the development team 
   to gain the information needed to be able to complete the task. Code 
   should be commented. Include a commented section at the top with your name,
   date of development, and purpose of script.

   Add an object for yourself following a similar format. Put each object in 
   an array so you have an array of objects (your choice how to do that). 
   Iterate through the array of objects adding the date the script was run 
   to each object as favorite things may change in the future. Console.log 
   only active records with the Name, date, Favorite movie of each person. 
   Add a function that can sort the output by object property. There may 
   be a time where no Active records are found. Include code that provides 
   a message when that occurs.
*/


/**
 * Eduardo Daniel Leon Miranda
 * January 21, 2022
 * Coding excersice: NodeJS
 */

/**
 * Question: Hi coworker, I have some doubts about the amount of information 
 * that can be increasing the list of people. 
 * right now this code can manage 3 145 728 person in 3 sec 
 * but if the quantity increase we should update some functions 
 * to reduce the number of times the array is iterated,
 * What is the number of people that should be managed with this function?
 */
 let dateInit = new Date();
 console.log(dateInit.toISOString());
/** General functions can be a library */
/**
 * @description Receive a list of object and filter with the params 
 * @param {array} list  
 * @param {array} paramFilter structure should be  [{'key' : '', 'value' : ''}];
 * @returns return the list filtered
 */
 const filterList = (list, paramFilter) => {
    return list.filter(element =>{
        return paramFilter.some(filterElement => element[filterElement.key] === filterElement.value);
    });
}

/**
 * @description return a new list with the elements defined
 * @param {array} list 
 * @param {array} attributes 
 * @returns return a new list with the attributes defined
 */
const returnCustomProperties = (list, attributes) => {
    return list.map(element =>{
        let elementWithProperties = {};
        attributes.forEach(key => {
            if(element.hasOwnProperty(key)){
                elementWithProperties[key] = element[key];
            }else{
                elementWithProperties[key] = null;
            }
        });
        return elementWithProperties
    });
}

/**
 * Print in console the element in the list
 * @param {string} typeConsole 
 * @param {array} list 
 */
const displayList = (typeConsole, list) =>{
    list.forEach(element => {
        switch (typeConsole) {
            case 'table':
                console.table(element)        
            break;
            case 'log':
            default:
                console.log(element)
            break;
        }    
    });
}

// global variables
let persons = [];

let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
};

let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
};

let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
};

let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
};

let martyObj = {
    'Name': 'Marty',
    'Favorite Food': 'Lasagna',
    'Favorite Movie': 'Star War',
    'Status': 'Active'
};


/**
 * @description Assign values in persons
 * @param {array} newPersons 
 */
const setPersons = (newPersons) => {
    persons = newPersons;
}

/**
 * @description Clean persons variable
 */
const removePersons = () => {
    persons = []
}

/**
 * @description Add or update attributes for all persons in the list
 * @param {array} listOfPersons 
 * @param {json} param 
 * @param {*} value 
 * @returns new array 
 */
 const updatePersonsList = (listOfPersons, param) => {
    return listOfPersons.map(person => {
        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                const element = param[key];
                if(person.hasOwnProperty(key)){
                    person[key] = element;
                }else{
                    person[key] = element;
                }
                
            }
        }
        return person;
    });
}

/**
 * @description Assign Date to each element of persons list
 * @param {*} listOfPersons 
 * @returns 
 */
 const setTimePersons  =  (listOfPersons) => {
    const dateObj = new Date();
    const dateISO = dateObj.toISOString();
    let paramsToApply = {
        'Date' : dateISO
    }
    return updatePersonsList(listOfPersons, paramsToApply);
}

/**
 * Initial state 
 */
const initialState = () => {
    let listOfPersons = [rockyObj, miroslavObj, donnyObj, mattObj, martyObj];
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    listOfPersons = listOfPersons.concat(listOfPersons);
    
    setPersons(listOfPersons);
}


const getActivePersons = (list) => {
    let personsFilter = [];
    let filterObj = [{'key' : 'Status', 'value' : 'Active'}];
    let attributesToDisplay = ['Name', 'Date', 'Favorite Movie'];

    personsFilter = filterList(list, filterObj);
    personsFilter = returnCustomProperties(personsFilter, attributesToDisplay);
    // personsFilter.length > 0 ? displayList('log' ,personsFilter) : console.log('No Active records are found');
    console.log(personsFilter.length)
}

initialState()
persons =  setTimePersons(persons);
getActivePersons(persons)

let dateENd = new Date();
 console.log(dateENd.toISOString());