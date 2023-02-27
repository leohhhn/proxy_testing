import hre from 'hardhat';
import assert from 'assert'

before('get factories', async () => {
    // @ts-ignore
    this.Moon = await hre.ethers.getContractFactory('Moon');
    // @ts-ignore
    this.MoonV2 = await hre.ethers.getContractFactory('MoonV2');
  // @ts-ignore
    this.MoonV3 = await hre.ethers.getContractFactory('MoonV3');

})

it('goes to the moon', async () => {
    // @ts-ignore
    let moon = await hre.upgrades.deployProxy(this.Moon, {kind: 'uups'});
    assert(await moon.name() === 'MoonV1');

    console.log(moon.address);


    // @ts-ignore
    let moonv2 = await hre.upgrades.upgradeProxy(moon, this.MoonV2);
    assert(await moonv2.version() === 'MoonV2!');

    // @ts-ignore
    let moonv3 = await hre.upgrades.upgradeProxy(moon, this.MoonV3);
    assert(await moonv3.version() === 'MoonV3!');
    console.log(moonv2.address);

})