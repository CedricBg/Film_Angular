import { actors } from "./Actors.models"
import { realisator } from "./realisator.models"
import { scenarist } from "./scenarist.models"

export class AllMovies{
    id! : number
    title? : string
    description? : string 
    releaseYear! : number
    realisator? : realisator
    scenarist? : scenarist
    actors? : actors[]
}