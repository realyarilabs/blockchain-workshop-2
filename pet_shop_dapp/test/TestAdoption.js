
const Adoption = artifacts.require("Adoption");

contract("MetaCoin", (accounts) => {
    // get instance of deployed contract of the adoption contract to be tested
    let adoptionInstance

    // The id of the pet that will be used for testing
    let expectedPetId = 8;

    before("init instance", async () => {
        adoptionInstance = await Adoption.deployed();
    })

    it("Testing the adopt() function", () => {
        const returnedId = adoption.adopt(expectedPetId);
        Assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");
    });

})


contract TestAdoption {
    //The expected owner of adopted pet is this contract
    address expectedAdopter = address(this);

    // Testing the adopt() function
    function testUserCanAdoptPet() public {
       
    }

    // Testing retrieval of a single pet's owner
    function testGetAdopterAddressByPetId() public {
        address adopter = adoption.adopters(expectedPetId);

        Assert.equal(adopter, expectedAdopter, "Owner of the expected pet should be this contract");
    }

    // Testing retrieval of all pet owners
    function testGetAdopterAddressByPetIdInArray() public {
        // Store adopters in memory rather than contract's storage
        address[16] memory adopters = adoption.getAdopters();

        Assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract");
    }
    
}
