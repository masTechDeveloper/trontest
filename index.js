const abi = [
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

const receiverAddress = "TUGR5GpNGqddKuNMY9c7YXsR315MNsX172";
const amount = 1000;

// TronWeb Node Connectivity
const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
let fullNode = "https://api.trongrid.io";
let solidityNode = "https://api.trongrid.io";
let eventServer = "https://api.trongrid.io";

// Account privateKey
const privateKey =
  "1d1621a756fa4b1ba8a6e86cdd34eb20a549f6d8b34e0620102adc1c87dc4939";

//   Tronweb Instance
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

async function send() {
  // create USDT smart contract instance
  let instance = await tronWeb.contract(abi, contractAddress);
  console.log(instance);
  //   smart contract function call
  await instance.methods
    .transfer(receiverAddress, tronWeb.toSun(amount))
    .send({ callValue: 0 })
    .then((res) => {
      console.log(res);
    });
}

send();
