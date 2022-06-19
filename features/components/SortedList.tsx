import { Box, Select, Text, HStack, Button } from "@chakra-ui/react"
import { tmpdir } from "os"
import { useState } from "react"
import {SortedTable} from "../components/SortedTable"
import type { Transaction } from "../types/Transaction"

export const SortedList = () => {

    const [typeOfTransaction, setTypeOfTransaction] = useState<string>("")
    const [typeOfSource, setTypeOfSource] = useState<string>("")
    const [input, setInput] = useState<Transaction>()

    const handleButtton = () => {
        const tmp: Transaction = {
            amount: 0,
            typeOfTransaction: typeOfTransaction,
            typeOfSource: typeOfSource
        }
        setInput(tmp)
    }


    return (
        <Box bg="#E6FAFD" borderRadius="3xl" h={540} w={850}>

        <Text fontSize={20} padding={5} textAlign="center">Wybierz rodzaj Filtrowania</Text>
        <HStack padding={5}>
            <Select placeholder="wybierz rodzaj transakcji" onChange={({ target: { value } }) =>
                            setTypeOfTransaction(value)
                            }>
                <option value="wydatek">wydatek</option>
                <option value="przychód">przychód</option>
            </Select>
            
            <Select placeholder="wybierz typ" onChange={({ target: { value } }) =>
                            setTypeOfSource(value)
                            }>
                <option value="rozrywka">rozrywka</option>
                <option value="jedzenie">jedzenie</option>
                <option value="pensja">pensja</option>
                <option value="mama">mama</option>

            </Select>
            
            <Button onClick={()=> handleButtton()}></Button>
    
            </HStack>
            <Box>
                <SortedTable key={input?.amount} filterType= {input?.typeOfTransaction || "" } filterTypeSource={input?.typeOfSource || ""} />
            </Box>
        
        </Box>
    )
}