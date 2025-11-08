export const fromIsoDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('un-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
    return formattedDate;
};