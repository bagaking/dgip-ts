import {Standard} from "./standard";
import {NftID} from "../const";

/**
 *  Standard NftID format
 *  @see https://github.com/bagaking/DGIPs/blob/master/DGIPS/dgip-200:non-fungible-tokens.md
 *
 *  @desc
 *      nft-id :    00,01~99,99 | 0,000,000,000,000~9,999,999,999,999
 */
export class StandardNftID extends Standard<boolean> {

    test(nft_id: NftID): boolean {
        return nft_id.length === 18;
    }
}

export const standard_nft_id: StandardNftID = new StandardNftID();
