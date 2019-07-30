import {Standard} from "./standard";
import * as _ from "lodash";
import {DGID, GameID, NftID} from "../const";
import {DGID_TYPE, standard_dgid} from "./standardDGID";
import {Error} from "tslint/lib/error";
import {standard_nft_id} from "./standardNftID";

export class StandardGameID extends Standard<boolean> {

    test(game_id: GameID): boolean {
        if (!_.isInteger(game_id)) {
            return false;
        }

        return !(game_id < 1 || game_id > 9999);
    }

    testDGIDOffset(offset: number): boolean{
        if (!_.isInteger(offset)) {
            return false;
        }

        return !(offset < 0 || offset > 999);
    }

    getDGID(game_id: GameID, offset: number = 0): DGID {
        if (!this.test(game_id)) {
            throw new Error(`convert nftId to dgid error, game_id ${game_id} is invalid.`);
        }

        if (!this.testDGIDOffset(offset)) {
            throw new Error(`convert nftId to dgid error, offset ${offset} is invalid.`);
        }

        return 10000000 + game_id * 1000 + offset;
    }

    fromDGID(dgid: DGID): GameID {
        if(standard_dgid.test(dgid) !== DGID_TYPE.System) {
            throw new Error(`convert dgid to game_id error, dgid ${dgid} is not a correct system-dgid.`);
        }
        return Math.floor(dgid / 1000 % 10000);
    }

    fromNftID(nft_id: NftID): GameID {

        if(standard_nft_id.test(nft_id)) {
            throw new Error(`convert dgid to game_id error, nft_id ${nft_id} test failed.`);
        }
        return parseInt(nft_id.substr(1, 4));
    }

}

export const standard_game_id: StandardGameID = new StandardGameID();
