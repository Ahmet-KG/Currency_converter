export interface Rates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: object;
}

export interface Converts {
  date: string;
  historical: string;
  info: object;
  query: object;
  result: number;
  success: boolean;
}
