import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ExampleRollupNFT", function () {
  async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const RNFT = await ethers.getContractFactory("ExampleRollupNFT");
    const rnft = await RNFT.deploy();

    return { rnft, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy success", async function () {
      await loadFixture(deploy);
    });
  });

  describe("initRoot", function () {
    it("Should initRoot success", async function () {
      const { rnft, owner } = await loadFixture(deploy);
      // Use ethers for hashing if needed. For example:
      // let mykey = ethers.utils.keccak256('mykey');
      // let myvalue = ... (similarly using ethers);

      await rnft.initRoot("0x123", 100);
    });
  });
});
