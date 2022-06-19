import {Box, Text ,Button, HStack, Input, VStack} from "@chakra-ui/react"
import { useAtom } from "jotai"
import { transactionsAtom } from "../atoms/transactionAtom" 
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'

import { MinusIcon, AddIcon } from "@chakra-ui/icons"

export const ListOfTransactions = () => {

const [listOfTransactions] = useAtom(transactionsAtom)
   
    return (
        <Box bg="#E6FAFD" borderRadius="3xl" h={540} w={850} >
            <Text padding={5} textAlign="center" fontSize={20}>Ostatnie transakcje</Text>

            <TableContainer> 
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Źrodło</Th>
                            <Th >Kwota</Th>
                            <Th> </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            listOfTransactions.map(transaction => (
                                <Tr key={transaction.typeOfTransaction}>
                                    <Td>{transaction.typeOfSource}</Td>
                                    <Td>{transaction.amount}</Td>
                                    <Td >{transaction.typeOfTransaction !== "expense" ? <AddIcon/> : <MinusIcon/>}</Td>

                                    
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
           
        </Box>
    )
} 

