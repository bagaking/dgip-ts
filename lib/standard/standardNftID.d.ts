import { Standard } from "./standard";
import { NftID } from "../const";
export declare class StandardNftID extends Standard<boolean> {
    test(nft_id: NftID): boolean;
}
export declare const standard_nft_id: StandardNftID;
