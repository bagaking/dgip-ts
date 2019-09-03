import {Standard} from "./standard";
import * as _ from "lodash";
import {DGID} from "../const";

export enum DGID_TYPE {
    Invalid = -1,
    System = 1,
    User = 2,
    Reserved = 3,
}

/**
 *  Standard DGID format
 *  @see https://github.com/bagaking/DGIPs/blob/master/DGIPS/dgip-20:dgid.md
 *
 *  @desc
 *      system domain :     1 | 0,001~9,999 | ,000~,999
 *      user domain :       2 | 0,000,001~9,999,999
 *      reserved domain:    3~9 | 0,000,001~9,999,999
 */
export class StandardDGID extends Standard<DGID_TYPE> {

    test(dgid: DGID): DGID_TYPE {
        if (!_.isInteger(dgid)) {
            return DGID_TYPE.Invalid;
        }

        if (dgid < 10000000 || dgid > 99999999) {
            return DGID_TYPE.Invalid;
        }

        switch (Math.floor(dgid / 10000000)) {
            case 1:
                return DGID_TYPE.System;
            case 2:
                return DGID_TYPE.User;
            default:
                return DGID_TYPE.Reserved;
        }
    }

    public supervisor: number = 10000000;

    public supervisorMax: number = 19999999;


}

export const standard_dgid: StandardDGID = new StandardDGID();
