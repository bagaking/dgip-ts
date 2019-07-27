import { Standard } from "./standard";
import { NftID } from "../const/typeAlias";
export declare class StandardNftID extends Standard<boolean> {
    validate(nft_id: NftID): boolean;
}
export declare const standard_nft_id: StandardNftID;
