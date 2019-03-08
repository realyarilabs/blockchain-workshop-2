
const Adoption = artifacts.require("Adoption");

contract("MetaCoin", ([adopterA, adopterB, adopterC, ...accounts ]) => {
    // get instance of deployed contract of the adoption contract to be tested
    let adoptionInstance

    // The id of the pet that will be used for testing
    let expectedPetId = 8;
    
    //The expected owner of adopted pet
    let expectedAdopter = adopterA;

    it("Init instance", async () => {
        adoptionInstance = await Adoption.deployed();
    })

    it("Testing the adopt() function", async () => {
        const returnedId = await adoptionInstance.adopt(expectedPetId, {
            from: expectedAdopter
        });
        assert.ok(returnedId, "Adoption of the expected pet should match what is returned.");
    });

    it("Testing retrieval of a single pet's owner", async () => {
        const adopterAddress = await adoptionInstance.adopters(expectedPetId);
        assert.equal(adopterAddress, expectedAdopter, "Owner of the expected pet should be this contract");
    });

    it(" Testing retrieval of all pet owners", async () => {
        // Store adopters in memory rather than contract's storage
        const adopters = await adoptionInstance.getAdopters();
        assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract");
    });
    
})
