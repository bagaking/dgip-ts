import {assert} from "chai";
import {DGID_TYPE, standard_dgid, standard_game_id} from "../src/standard";


describe("standard test",  function () {


    describe("1. dgid",  function () {

        it("1.1 test invalid",  function () {
            let type = standard_dgid.test(-1);
            assert.equal(type, DGID_TYPE.Invalid, "-1");
            type = standard_dgid.test(0);
            assert.equal(type, DGID_TYPE.Invalid, "0");
            type = standard_dgid.test(9000000);
            assert.equal(type, DGID_TYPE.Invalid, "9000000");
            type = standard_dgid.test(100000000);
            assert.equal(type, DGID_TYPE.Invalid, "100000000");
        });

    });

    describe("4. game id",  function () {

        it("4.1 invalid situation",  function () {
            let type = standard_game_id.test(-1);
            assert.equal(type, false);
            standard_game_id.test(0);
            assert.equal(type, false);
            standard_game_id.test(10000);
            assert.equal(type, false);
        });

        it("4.2 correct situation",  function () {
            let type = standard_game_id.test(1);
            assert.equal(type, true);
            standard_game_id.test(9999);
            assert.equal(type, true);
        });

        it("4.3 from dgid",  function () {
            let gameId = standard_game_id.fromGameDGID(10001000);
            assert.equal(gameId, 1);
            gameId = standard_game_id.fromGameDGID(10001001);
            assert.equal(gameId, 1);
        });

        it("4.4 from nftID",  function () {
            let gameId = standard_game_id.fromNftID("100010000000000001");
            assert.equal(gameId, 1);
            gameId = standard_game_id.fromNftID("100020000000000001");
            assert.equal(gameId, 2);
        });

    });
});
