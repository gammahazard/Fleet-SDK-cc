Webpack bundled CyberCitizens source code with Fleet-SDK Transaction Builder implemented in order to send custom transactions via ERGO blockchain using a valid ERGO wallet.

Content is bundled from "src" folder into "dist", src is not provided in this code

In use: 

https://user-images.githubusercontent.com/92896466/219882204-bd00836a-aa02-4981-969f-cc158a80fde2.mp4


Building unsigned transaction with Fleet-sdk/core. Note: cypxTokenID can be removed if wanting to send ERG only, remove .addTokens.

Edit amountToSend in order to send a different amount.

Note that in "EIP-12" is being passed into the build() function as a parameter, this allows nautilus wallet to recognize the transaction to be signed.

    import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";

    let unsignedTransaction;

    async function mint() {
    try {
    const cypxTokenId = "01dce8a5632d19799950ff90bca3b5d0ca3ebfa8aaafd06f0cc6dd1e97150e7f";
    let creationHeight = await ergo.get_current_height();
    const amountToSend = 200000;

    const inputs = await ergo.get_utxos();
  
    const userAddress = await ergo.get_change_address();
    const cybercitizensWallet = "9g2UMfBWeSSo6cDU6cynCGZSuNf9AFxFWVByWujrzjQC3piEakE";

    unsignedTransaction = new TransactionBuilder(creationHeight)
      .from(inputs)
      .to(
        new OutputBuilder(amountToSend, cybercitizensWallet)
          .addTokens({
            tokenId: cypxTokenId,
            amount: "100000",
          })
      )
      .sendChangeTo(userAddress)
      .payMinFee()
      .build("EIP-12");

    console.log("Inputs:", inputs);
    console.log("Outputs:", unsignedTransaction.outputs);

    return unsignedTransaction;
    } catch (error) {
    console.error(`Error minting coins: ${error}`); 
    alert(`Error minting coins: ${error}`);
    }
    }
