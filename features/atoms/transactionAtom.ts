import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { Transaction } from "../types/Transaction"

export const transactionsAtom = atomWithStorage<Transaction[]>("income", [])

export const addTransaction = atom(null, (get, set, trans: Transaction) => {
    const currentListOfTransactions = get(transactionsAtom)
    set(transactionsAtom, [...currentListOfTransactions, trans])

})

