export enum jobResultEnum {
    PENDING="pending",
    RESOLVED="resolved"
}
export type jobType={
    id:string,
    name:string
    status:jobResultEnum,
    result:string | null
}

export type JobWhereParams={
    id?:string,
    name?:string,
    status?:jobResultEnum
}