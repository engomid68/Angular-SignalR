export interface IDepartment {
    label: string;
    value: EDepartment
}

export enum EDepartment {
    Eng = 'eng',
    Prod = 'prod',
    Sales = 'sales',
    Marketing = 'marketing'
}

export const department: IDepartment[] = [
    { label: 'Engineering', value: EDepartment.Eng },
    { label: 'Product', value: EDepartment.Prod },
    { label: 'Sales', value: EDepartment.Sales },
    { label: 'Marketing', value: EDepartment.Marketing }
];