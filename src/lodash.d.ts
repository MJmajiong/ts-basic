declare module "lodash" {
    // export function chunk(array:any[], size:number):any[][] // 简化成下面的泛型
    export function chunk<T>(array:T[], size:number):T[][]
}