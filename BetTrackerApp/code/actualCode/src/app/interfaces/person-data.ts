import { Bets } from 'src/app/interfaces/bets'

export interface PersonData {
    name: string,
    total: number,
    bets: Bets[]
    
}

export interface PersonID extends PersonData{
    id: string
}