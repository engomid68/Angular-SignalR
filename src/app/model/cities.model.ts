export interface ICities {
    label: string;
    value: ECities
}

export enum ECities {
    NYC = 'NYC',
    LA = 'LA',
    CHI = 'CHI',
    TOR = 'TOR',
    LDN = 'LDN',
    BER = 'BER',
    PAR = 'PAR',
    TKO = 'TKO',
    SYD = 'SYD',
    BOM = 'BOM'
}
export const cities: ICities[] = [
  { label: 'نیویورک', value: ECities.NYC },
  { label: 'لس آنجلس', value: ECities.LA },
  { label: 'شیکاگو', value: ECities.CHI },
  { label: 'تورنتو', value: ECities.TOR },
  { label: 'لندن', value: ECities.LDN },
  { label: 'برلین', value: ECities.BER },
  { label: 'پاریس', value: ECities.PAR },
  { label: 'توکیو', value: ECities.TKO },
  { label: 'سیدنی', value: ECities.SYD },
  { label: 'مومبای', value: ECities.BOM }
];