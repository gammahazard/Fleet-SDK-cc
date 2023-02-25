import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";

let unsignedTransaction;
// mint function
async function mint() {
  try {
    const cypxTokenId = "01dce8a5632d19799950ff90bca3b5d0ca3ebfa8aaafd06f0cc6dd1e97150e7f";
    let creationHeight = await ergo.get_current_height();
    const amountToSend = 20000000000;
// 20 erg to be sent
    const inputs = await ergo.get_utxos();
  
    const userAddress = await ergo.get_change_address();
    const cybercitizensWallet = "9eXCfrmgJSuYKS6hf32snZHZYCFvVeAsBU6LigaKkd5hzjUB3Rf";
//fleet sdk tx builder
    unsignedTransaction = new TransactionBuilder(creationHeight)
      .from(inputs)
      .to(
        new OutputBuilder(amountToSend, cybercitizensWallet)
      )
      .sendChangeTo(userAddress)
      .payMinFee()
      .build("EIP-12");
// note build "eip-12" is passed as a parameter for nautilus wallet
    console.log("Inputs:", inputs);
    console.log("Outputs:", unsignedTransaction.outputs);
//build and return unsigned tx
    return unsignedTransaction;
  }catch (error) {
    //error logging, if error message includes ergo not defined, display please connect wallet, if error message includes > meaning it is telling the user they do not have enough funds, take the number after nanoErgs and convert to ergs and display to the user how many funds are needed
    if (error.message.includes("not defined")) {
        ergoConnector.nautilus.connect();
        
        // display the wallet connected message in the mintModal element with smooth animation
        const mintModal = document.getElementById('mintModal');
        const message = document.createElement('div');
        document.getElementById("wallet-btn").style.display = "none"
        message.style.backgroundColor = "black"
        message.classList.add('mint-modal-message');
        message.innerText = 'Wallet Connected!';
        mintModal.appendChild(message);
        
        setTimeout(() => {
            // set the opacity of the message to 0 to fade it out
            message.style.opacity = 0;
            
            setTimeout(() => {
                // remove the message element from the mintModal
                mintModal.removeChild(message);
            }, 500); // wait for half a second for the message to finish fading out
        }, 2000); // wait for 2 seconds before starting the fade out animation
    } else if (error.message.includes(">")) {
        const ergValue = error.message.split("nanoErgs:")[1].split(">")[0].trim();
        const ergs = parseInt(ergValue) / 1000000000;
        alert(`Insufficient Funds, please add ${ergs} ERG.`);
    } else {
        alert(`Error minting coins: ${error}`);
    }
}
}
// mint btn styling to make sure user cannot spam click
const mintbtn = document.getElementById("mintbtn");
const mintbtnText = mintbtn.innerText;
// switch mint button to disabled class and show please wait while transaction is being built...
mintbtn.addEventListener("click", async () => {
  try {
    mintbtn.disabled = true;
    mintbtn.classList.add("disabled");
    mintbtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait while the transaction is being built...`;
// on mint function, define unsignedtransaction and sign it via nautilus and submit it
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
    // Re-enable the mint button
    mintbtn.disabled = false;
    mintbtn.classList.remove("disabled");
    mintbtn.innerText = mintbtnText;
  }
});
//re - enable mint button afterward 
// Add an event listener for beforeunload event
window.addEventListener("beforeunload", () => {
  // Check if mintbtn is disabled, and re-enable it
  if (mintbtn.disabled) {
    mintbtn.disabled = false;
    mintbtn.classList.remove("disabled");
    mintbtn.innerText = mintbtnText;
  }
});

