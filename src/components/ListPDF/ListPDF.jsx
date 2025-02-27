import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from "./style"
import { Table, TR, TH, TD } from '@ag-media/react-pdf-table';

export const ListPDF = ({ data }) => {
     return (
        <Document>
            <Page size="A4" orientation='landscape' style={styles.page} wrap>
            <Image src="/public/logo.jpg" style={styles.logo} />
            <View style={styles.header}>
                <Text>Iglesia Adventista Del Séptimo Día</Text>
                <Text>Lista de predicación - Primer trimestre</Text>
                <Text>{ data.name }</Text>
            </View>
            {
                Object.keys(data.CONTENT_PDF).map((month, monthIndex) => (
                <Table style={styles.table} key={`table-${monthIndex}`}>
                    <TH style={[styles.month, styles.tableHeader]}>
                        <TD style={styles.td}>{month}</TD>
                    </TH>
                    <TH style={[styles.date, styles.tableHeader]}>
                        <TD style={styles.td}>Fecha</TD>
                        <TD style={styles.td}>Predicador</TD>
                        <TD style={styles.td}>Anciano de guardia</TD>
                    </TH>
                    {
                        data.CONTENT_PDF[month].map((date, rowIndex) => (
                        <TR key={rowIndex}>
                            <TD style={styles.td}>{date.day}</TD>
                            <TD style={styles.td}>{date.preacher}</TD>
                            <TD style={styles.td}>{date.senior}</TD>
                        </TR>
                        ))
                    }
                </Table>))
            }
            </Page>
        </Document>
    )
}