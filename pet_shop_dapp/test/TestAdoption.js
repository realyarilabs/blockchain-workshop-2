
const Adoption = artifacts.require("Adoption");

contract("MetaCoin", ([adopterA, adopterB, adopterC, ...accounts ]) => {
    // get instance of deployed contract of the adoption contract to be tested
    let adoptionInstance

    // The id of the pet that will be used for testing
    let expectedPetId = 8;
    
    //The expected owner of adopted pet
    let expectedAdopter = adopterA;

    before("init instance", async () => {
        adoptionInstance = await Adoption.deployed();
    })

    it("Testing the adopt() function", () => {
        const returnedId = adoptionInstance.adopt(expectedPetId);
        assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");
    });

    it("Testing retrieval of a single pet's owner", () => {
        const adopterAddress = adoptionInstance.adopters(expectedPetId);
        assert.equal(adopterAddress, expectedAdopter, "Owner of the expected pet should be this contract");
    });

    it(" Testing retrieval of all pet owners", () => {
        // Store adopters in memory rather than contract's storage
        const adopters = adoption.getAdopters();
        assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract");
    });
    
})
