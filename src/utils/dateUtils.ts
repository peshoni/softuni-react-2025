import moment from "moment";

export const fromIsoDate = (isoDate: string): string => {
    if (isoDate) {
        const d: moment.Moment = moment.utc(isoDate).local();
        return d.format("DD/MM/YYYY HH:mm:ss");
    }
    return '';
};