export interface BodyMeasurements {
    neck: number;
    waist: number;
    hip: number;
    height: number;
    bodyFatPercentage?: number;
    gender?: string;
    id?: number;
    date?: string;
}

export interface BodyFatResult {
    percentage: number;
    date: string;
}

