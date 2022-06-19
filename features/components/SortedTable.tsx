import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Box} from '@chakra-ui/react'
import { useAtom } from "jotai"
import { transactionsAtom } from "../atoms/transactionAtom" 

export const SortedTable = ({filterType,filterTypeSource} :{ filterType: string | "", filterTypeSource: string | ""}) => {
    
    const [listOfTransactions] = useAtom(transactionsAtom)

    const filteredTransactions = listOfTransactions.filter(trans => trans.typeOfTransaction === filterType  || trans.typeOfSource === filterTypeSource)
   

    return (
      
        <TableContainer> 
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Typ</Th>
                        <Th >Kwota</Th>
                        <Th>Źrodło</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        filteredTransactions.map(transaction => (
                            <Tr key={transaction.typeOfTransaction}>
                                <Td >{transaction.typeOfTransaction}</Td>
                                <Td>{transaction.amount}</Td>
                                <Td>{transaction.typeOfSource}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
     
    )
}