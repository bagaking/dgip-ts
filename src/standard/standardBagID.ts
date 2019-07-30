import {Standard} from "./standard";
import {DGID, NftID} from "../const";
import {standard_nft_id} from "./standardNftID";
import {DGID_TYPE, standard_dgid} from "./standardDGID";
import * as _ from "lodash";

/**
 *  Standard DGID format
 *  @see https://github.com/bagaking/DGIPs/blob/master/DGIPS/dgip-210:ft-bags.md
 *
 *  @desc
 *      bag-id :  100,009,000,0 | 00,000,001~99,999,999
 */
export class StandardBagID extends Standard<boolean> {

    test(nft_id: NftID): boolean {
        return standard_nft_id.test(nft_id) && _.startsWith(nft_id, "1000090000");
    }

    bagIdToDGID(nft_id: NftID): DGID {
        if (!this.test(nft_id)) {
            throw new Error(`convert nftId to dgid error, nft_id ${nft_id} is not a bag.`);
        }
        return parseInt(nft_id.substr(10));
    }

    dgidToBagId(dgid: DGID): NftID {
        if (DGID_TYPE.Invalid === standard_dgid.test(dgid)) {
            throw new Error(`convert dgid to nftId error, test dgid ${dgid} failed.`);
        }
        return "1000090000" + dgid;
    }
}

export const standard_bag_id: StandardBagID = new StandardBagID();
