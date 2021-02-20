const fs = require("fs");
const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require("../lib/zookeepers");
const { zookeepers } = require("../../data/zookepers");



jest.mock("fs");

test("create a zookeeper object", () => {
    const zookeeper = newZookeeper(
        { name: "Darlene" , id: "jhgdja3ng2"}, zookeepers
    );
    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");

});
