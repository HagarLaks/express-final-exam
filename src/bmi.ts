/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    // TODO: implement me
    const bmiOutput = input.weight/(input.height**2)
    if (bmiOutput<18.5){
        return {status: 0, bmi: bmiOutput};
    } else if(bmiOutput>=18.5&&bmiOutput<25){
        return {status: 1, bmi: bmiOutput};

    } else if(bmiOutput>=25&&bmiOutput<30){
        return {status: 2, bmi: bmiOutput};
    } else if (bmiOutput>=30){
        return {status: 3, bmi: bmiOutput};
    } else 
    return {status: 0, bmi: 0};
}
