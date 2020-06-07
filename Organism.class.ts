import { Populations, OrganismFunction, Factors } from "./helpers";

/**
 * An organism defined by it's unique dna sequence and subsequent traits
 */
export class Organism {

    dna:string;

    /**
     * 
     * @param dna a unique dna sequence defining the organism
     */
    constructor(dna:string) {
        this.dna = dna;
    }

    /**
     * generates new mutations with predefined probabilities
     * @returns new mutations
     */
    mutate(currPopulation:number):Populations {// TODO
        return new Map<string, number>(); 
    }

    getGrowthFunction(populations: Populations, factors: Factors):OrganismFunction {
        throw new Error("Method not implemented.");
    }

}