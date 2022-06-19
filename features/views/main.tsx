import { CurrentAccountBalance } from "../components/CurrentAccountBalance";
import { ListOfTransactions } from "../components/ListOfTransactions"
import { SpendTheMost } from "../components/SpendTheMost";
import { SortedList } from "../components/SortedList";
import { Flex, HStack, VStack } from "@chakra-ui/react";

const mainView = () => {

    return (
        <VStack padding={20}>
            <HStack>
                <CurrentAccountBalance/>
                <SortedList/>

            </HStack>
            <HStack>
                <ListOfTransactions/>
                <SpendTheMost/>
            </HStack>
        </VStack>
        
    )
}

export default mainView;