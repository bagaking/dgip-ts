import {Standard} from "./standard";
import {DGID, GameID} from "../const";
import {DGID_TYPE, standard_dgid} from "./standardDGID";
import {standard_game_id} from "./standardGameID";
import * as _ from "lodash";

/**
 * alpha
 */
export class StandardIGID extends Standard<any> {

    test(igid: string): boolean {
        return igid.length === 16; // dgid - 8, game_id - 4, server_id - 3, role_id - 1
    }

    create(
        dgid: DGID,
        game_id: GameID,
        server_id: number,
        role_id: number
    ) {
        if (DGID_TYPE.Invalid === standard_dgid.test(dgid)) {
            throw new Error(`create igid failed, invalid dgid ${dgid}`);
        }

        if (!standard_game_id.test(game_id)) {
            throw new Error(`create igid failed, invalid game_id ${game_id}`);
        }

        if (server_id !== Math.round(server_id) || server_id < 0 || server_id > 999) {
            throw new Error(`create igid failed, invalid server_id ${server_id}`);
        }

        if (role_id !== Math.round(role_id) || role_id < 0 || role_id > 9) {
            throw new Error(`create igid failed, invalid role_id ${role_id}`);
        }

        return `${dgid
        }${_.padStart(game_id.toString(),4, "0")
        }${_.padStart(server_id.toString(),3, "0")
        }${role_id
        }`;
    }
}

export const standard_igid: StandardIGID = new StandardIGID();
