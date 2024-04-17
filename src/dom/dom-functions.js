import {format} from 'date-fns';

/**** Utility functions used by the modules under the DOM folder ****/

// Takes a textual date and returns a reformatted version of that date
export function formatDate(text) {
    const dateFormat = 'MM/dd/yyyy'; 
    const [year, month, day] = text.split('-');
    return format(new Date(year, month - 1, day), dateFormat);
} 

// Delete all nodes under a parent node
export function deleteAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}