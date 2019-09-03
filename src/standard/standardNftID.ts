import {Standard} from "./standard";
import {GameID, NftID} from "../const";
import {standard_game_id} from "./standardGameID";
import * as _ from "lodash";

/**
 *  Standard NftID format
 *  @see https://github.com/bagaking/DGIPs/blob/master/DGIPS/dgip-200:non-fungible-tokens.md
 *
 *  @desc
 *      nft-id :    1 | 00,01~99,99 | 0,000,000,000,000~9,999,999,999,999
 */
export class StandardNftID extends Standard<boolean> {

    test(nft_id: NftID): boolean {
        return nft_id.length === 18 && nft_id[0] === "1";
    }

    create(game_id: GameID, seq: number) {

        if (!standard_game_id.test(game_id)) {
            throw new Error(`create nft_id failed, invalid game_id ${game_id}`);
        }

        if (seq !== Math.round(seq) || seq < 0 || seq > 9999999999999) {
            throw new Error(`create nft_id failed, invalid seq ${seq}`);
        }

        return `1${_.padStart(game_id.toFixed(0), 4, "0")}${_.padStart(seq.toFixed(0), 13, "0")}`;
    }

}

export const standard_nft_id: StandardNftID = new StandardNftID();
