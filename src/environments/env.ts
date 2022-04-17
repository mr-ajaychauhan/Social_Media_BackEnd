import { DevEnvironment } from "./Dev.env";
import { ProdEnvironment } from "./Prod.env";

export interface Enviornment {
    db_url : string;
}


export function getEnvironmentVariable() {
    if (process.env.NODE_ENV === 'production') {
         return ProdEnvironment;
    }
    return DevEnvironment;
}



