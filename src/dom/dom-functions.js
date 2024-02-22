import {format} from 'date-fns';

export function formatDate(text) {
    const dateFormat = 'MM/dd/yyyy'; 
    const [year, month, day] = text.split('-');
    return format(new Date(year, month - 1, day), dateFormat);
} 