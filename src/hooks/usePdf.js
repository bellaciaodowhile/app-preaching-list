import { useMemo } from 'react';

export const usePdfName = (contentPdf) => {
    return useMemo(() => {
        const dataKeys = Object.keys(contentPdf);
        const firstMonth = dataKeys[0];
        const lastMonth = dataKeys[dataKeys.length - 1];
        return `${firstMonth} ${dataKeys.length > 1 ? `- ${lastMonth}` : ``}`;
    }, [contentPdf]);
};