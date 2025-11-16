import moment from "moment";

export const fromIsoDate = (isoDate: string): string => { 
    if (isoDate) {
        const d: moment.Moment = moment(isoDate);
        // const date = new Date(isoDate);
        // const formattedDate = date.toLocaleString('en-GB', {
        //     year: 'numeric',
        //     month: '2-digit',
        //     day: '2-digit',
        //     hour: '2-digit',
        //     minute: '2-digit',
        //     second: '2-digit'
        // });
        return d.format("DD/MM/YYYY HH:mm:ss");
    }
    return '';
};