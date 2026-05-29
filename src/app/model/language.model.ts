export interface ILanguage {
    label: string;
    value: ELanguage
}

export enum ELanguage {
    Js = 'js',
    Py = 'py',
    Java = 'java',
    Csharp = 'csharp',
    Go = 'go',
    Rust = 'rust',
    Php = 'php',
    Ruby = 'ruby',
    Swift = 'swift',
    Kotlin = 'kotlin'
}

export const language: ILanguage[] = [
    { label: 'JavaScript/TypeScript', value: ELanguage.Js },
    { label: 'Python', value: ELanguage.Py },
    { label: 'Java', value: ELanguage.Java },
    { label: 'C#', value: ELanguage.Csharp },
    { label: 'Go', value: ELanguage.Go },
    { label: 'Rust', value: ELanguage.Rust },
    { label: 'PHP', value: ELanguage.Php },
    { label: 'Ruby', value: ELanguage.Ruby },
    { label: 'Swift', value: ELanguage.Swift },
    { label: 'Kotlin', value: ELanguage.Kotlin }
];