export interface Profile {
    firstName: string;
    lastName: string;
    age: number;
    weight: number; // in kg
    height: number; // in cm
    address: string;
  }
  
  export interface BMIResult {
    bmi: number;
    category: string;
  }