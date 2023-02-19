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

const mintbtn = document.getElementById("mintbtn");
const mintbtnText = mintbtn.innerText;

mintbtn.addEventListener("click", async () => {
  try {
    mintbtn.disabled = true;
    mintbtn.classList.add("disabled");
    mintbtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait while the transaction is being built...`;

    const unsignedTransaction = await mint();
    if (unsignedTransaction) {
      console.log("Unsigned Transaction:", unsignedTransaction);
      const signedTransaction = await ergo.sign_tx(unsignedTransaction);
      console.log("Signed Transaction:", signedTransaction);
      const txId = await ergo.submit_tx(signedTransaction);
      console.log(txId);
      alert(`Transaction submitted. TX ID: ${txId}`);
    }
  } catch (error) {
    console.error(`Error minting coins: ${error}`);
    alert(`Error minting coins: ${error}`);
  } finally {
    mintbtn.disabled = false;
    mintbtn.classList.remove("disabled");
    mintbtn.innerText = mintbtnText;
  }
});

// Add an event listener for beforeunload event
window.addEventListener("beforeunload", () => {
  // Check if mintbtn is disabled, and re-enable it
  if (mintbtn.disabled) {
    mintbtn.disabled = false;
    mintbtn.classList.remove("disabled");
    mintbtn.innerText = mintbtnText;
  }
});