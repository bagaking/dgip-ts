import { Standard } from "./standard";
export declare enum DGID_TYPE {
    Invalid = -1,
    System = 1,
    User = 2,
    Reserved = 3
}
export declare class StandardDGID extends Standard<DGID_TYPE> {
    test(dgid: number): DGID_TYPE;
    supervisor: number;
}
export declare const standard_dgid: StandardDGID;
