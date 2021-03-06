declare type LintStagedConfig = {
    [glob: string]: string | string[] | ((filenames: string[]) => string | string[] | Promise<string | string[]>);
};
export declare type LintStagedOptions = {
    ignoreSecretsInFilesRegex?: RegExp | RegExp[];
    ignoreLargeFilesRegex?: RegExp | RegExp[];
    terraformFmt?: boolean;
    terragruntHclFmt?: boolean;
    ktlint?: boolean;
    extras?: LintStagedConfig;
};
export declare const lintStagedConfig: ({ ignoreLargeFilesRegex, ignoreSecretsInFilesRegex, extras, ktlint, terraformFmt, terragruntHclFmt, }?: LintStagedOptions) => LintStagedConfig;
export {};
