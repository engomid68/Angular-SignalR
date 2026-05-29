export interface ICountries {
    label: string;
    value: ECountries
}

export enum ECountries {
    US = 'US',
    CA = 'CA',
    UK = 'UK',
    DE = 'DE',
    FR = 'FR',
    JP = 'JP',
    AU = 'AU',
    BR = 'BR',
    IN = 'IN',
    CN = 'CN'
}
export const countries: ICountries[] = [
    { label: 'آمریکا', value: ECountries.US },
    { label: 'کانادا', value: ECountries.CA },
    { label: 'انگلیس', value: ECountries.UK },
    { label: 'آلمان', value: ECountries.DE },
    { label: 'فرانسه', value: ECountries.FR },
    { label: 'ژاپن', value: ECountries.JP },
    { label: 'استرالیا', value: ECountries.AU },
    { label: 'برزیل', value: ECountries.BR },
    { label: 'هند', value: ECountries.IN },
    { label: 'چین', value: ECountries.CN }
];