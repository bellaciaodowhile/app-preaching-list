import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        padding: '30px 50px',
        fontFamily: 'Helvetica'
    },
    logo: {
        width: '100px',
        position: 'absolute',
        top: '20px',
        left: '50px'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontWeight: '800',
        gap: '8px',
        fontSize: '18px',
        marginBottom: '20px',
        fontFamily: 'Helvetica-Bold'
    },
    table: {
        border: '1px solid #000',
        marginBottom: '40px'
    },
    month: {
        backgroundColor: '#D9E2F3',
    },
    date: {
        backgroundColor: '#FFD966'
    },
    tableHeader: {
        fontSize: '14px',
        textTransform: 'uppercase',
        fontFamily: 'Helvetica-Bold'
    },
    td: {
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '14px'
    }
});