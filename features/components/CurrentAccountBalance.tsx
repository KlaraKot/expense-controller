import {Box, Text ,Button, HStack, Input, VStack, Select} from "@chakra-ui/react"
import { useState } from "react";
import type { ChangeEvent } from "react";
import { addTransaction } from "../atoms/transactionAtom";
import { useAtom } from "jotai";

import type { Transaction } from "../types/Transaction"

const CurrentAccountBalance = () => {

    const [, addToListOfTransactions] = useAtom(addTransaction)

    const [currentMoney, setCurrentMoney] = useState< number>(0);
    const [currentListOfExpenses, setCurrentListOfExpenses] = useState< number >(0)
    const [currentListOfIncomes, setCurrentListOfIncomes] = useState< number >(0)
    const [typeOfSource, setTypeOfSource ] = useState<string>("")
    const handleInputExpenseChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
        const expense: number = +value;
        setCurrentListOfExpenses(expense)
      };
     const handleCurrentAmounOfMoney = (type: string) => {
         const currentAmountOfMoney = currentMoney
         if(type === "expense"){
             const value = currentAmountOfMoney - currentListOfExpenses;
             setCurrentMoney(value)
             const transaction: Transaction = {amount: currentListOfExpenses, typeOfTransaction: "expense", typeOfSource: typeOfSource}
             addToListOfTransactions(transaction)

         }else{
            const value = currentAmountOfMoney + currentListOfIncomes;
            setCurrentMoney(value)
            const transaction: Transaction = {amount: currentListOfIncomes , typeOfTransaction: "income", typeOfSource: typeOfSource}
            addToListOfTransactions(transaction)
         }


     }  
    const handleIncomeChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) =>{
        const c = +value
        setCurrentListOfIncomes(c)
    } 
    return (
        <Box bg="#E6FAFD" borderRadius="3xl" h={540} w={850} >
            <Text padding={5} textAlign="center" fontSize={20}>
                Aktualnie posiadasz:
            </Text>
            <Text paddingLeft={390}  fontSize={25} >{currentMoney}</Text>
            <HStack paddingTop={85} paddingLeft={130}>
                <Box>
                    <VStack>
                        <Input type="text" id="income" placeholder="wpisz kwote" width='25' onChange={handleIncomeChange}/>
                        <Select placeholder="wybierz rodzaj wpływu" 
                            onChange={({ target: { value } }) =>
                            setTypeOfSource(value)
                            }
                        >
                            <option key="pensja" value="pensja">pensja</option>
                            <option key="mama" value="mama">mama</option>
                        </Select>
                        <Button onClick={() => handleCurrentAmounOfMoney("income")}>Dodaj przychód</Button>
                    </VStack>
                </Box>
                <Box>
                    <VStack>
                        <Input type="text" id="expense" placeholder="wpisz kwote" width='25' onChange={handleInputExpenseChange}/>
                        <Select placeholder="wybierz rodzaj wydatku" 
                            onChange={({ target: { value } }) =>
                            setTypeOfSource(value)
                            }
                        >
                            <option key="rozrywka" value="rozrywka">rozrywka</option>
                            <option key="jedzenie" value="jedzenie">jedzenie</option>
                            <option key="domowe" value="domowe">domowe</option>

                        </Select>
                        <Button onClick={() => handleCurrentAmounOfMoney("expense")}>Dodaj wydatek</Button>
                    </VStack>
                </Box>
               
            </HStack>
            
           
        </Box>
    )
} 

export {CurrentAccountBalance};