import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from "./style"
import { Table, TR, TH, TD } from '@ag-media/react-pdf-table';
import { MONTHS } from '../../helpers/months';
import { DAYS } from '../../helpers/days';
import { PREACHERS_INIT } from '../../helpers/preachers';
import { SENIORS_INIT } from '../../helpers/seniors';
import { useEffect, useState } from 'react';

export const ListPDF = ({ data }) => {
    console.log('Component List')
    console.log(data.dataPerMonths)

    const firstMonth = Object.keys(data.dataPerMonths)[0];
    const lastMonth = data.dataPerMonths[data.dataPerMonths.length - 1];
    console.log(firstMonth)

    return (
        <Document>
            <Page size="A4" orientation='landscape' style={styles.page}>
            <Image src="/public/logo.jpg" style={styles.logo} />
            <View style={styles.header}>
                <Text>Iglesia Adventista Del Séptimo Día</Text>
                <Text>Lista de predicación - Primer trimestre</Text>
                <Text>{firstMonth} {data.dataPerMonths.length > 1 ? `- ${lastMonth}` : ''  } 2025</Text>
            </View>

            {
                Object.keys(data.dataPerMonths).map((month, monthIndex) => (
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
                        data.dataPerMonths[month].map((date, rowIndex) => (
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
