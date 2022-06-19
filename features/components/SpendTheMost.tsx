import { Box, Button, Text } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { transactionsAtom } from "../atoms/transactionAtom" 
import {useState} from "react"
import type { Transaction } from '../types/Transaction'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  

export const SpendTheMost = () =>{
    const [listOfTransactions] = useAtom(transactionsAtom)
    const [showChart, setShowChart] = useState<boolean>(false)
    //przefiltrowanie i wycigniecie jedynie wydatkow
    const expenses = listOfTransactions.filter(exp => exp.typeOfTransaction=="expense")
        

    //wyliczenie sumy wydatkow na kazde źrodło i wybranie najwiekszego
    let sumEnter = 0
    let sumFood = 0
    let sumHouse = 0

    for(let i=0; i< expenses.length; i++){
        if(expenses[i].typeOfSource === "rozrywka"){
            sumEnter += expenses[i].amount
        }
        else if(expenses[i].typeOfSource === "jedzenie"){
            sumFood += expenses[i].amount
        }
        else if(expenses[i].typeOfSource === "domowe"){
            sumHouse += expenses[i].amount
        }
    }

        
const labels = ['Wydatki'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [sumEnter],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [sumFood],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Dataset 3',
        data: [sumHouse],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
  ],
};

    return (
      <Box bg="#E6FAFD" borderRadius="3xl" h={540} w={850} >
            <Text padding={5} textAlign="center" fontSize={20}>Statystyki</Text>
            <Button textAlign="center" onClick={()=> setShowChart(true)}>zobacz statystyki</Button>
            {showChart ?<Bar options={options} data={data} />
            : null}
        </Box>
        
        
        )
}