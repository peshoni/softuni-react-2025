export const fromIsoDate = (isoDate: string): string => {
    
    if(isoDate){

        const date = new Date(isoDate);
        const formattedDate = date.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        });
        return formattedDate;
    } 
    return ''
};