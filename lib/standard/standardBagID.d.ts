import { Standard } from "./standard";
import { DGID, NftID } from "../const";
export declare class StandardBagID extends Standard<boolean> {
    test(nft_id: NftID): boolean;
    bagIdToDGID(nft_id: NftID): DGID;
    dgidToBagId(dgid: DGID): NftID;
}
export declare const standard_bag_id: StandardBagID;
