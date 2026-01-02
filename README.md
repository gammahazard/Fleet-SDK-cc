# Ergo Transaction Builder (Fleet SDK)

![Network](https://img.shields.io/badge/Network-Ergo_Mainnet-orange?style=for-the-badge)
![Standard](https://img.shields.io/badge/Spec-EIP--12_Compliant-blue?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Model-UTXO_Construction-green?style=for-the-badge)

A specialized transaction construction engine for the Ergo blockchain. This utility leverages the **Fleet SDK** to manually compose Unspent Transaction Outputs (UTXOs), calculate storage rent, and serialize EIP-12 compliant signing requests for wallet connectors (Nautilus, SAFEW).

[**🚀 Live Demo**](https://gammahazard.github.io/Fleet-SDK-cc/dist/index.html)

---

## ⚡ Technical capabilities

* **Custom UTXO Selection:** Manually filters input boxes based on asset availability.
* **Token Minting Logic:** Handles the complex registers required for creating native assets on the Ergo ledger.
* **EIP-12 Compliance:** Formats transaction context for external signing, ensuring hardware wallet compatibility.

---

## 💻 Implementation Logic

The core builder logic constructs a state-change request from raw inputs.

```javascript
import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";

// Constructing a Token Transfer with automatic fee calculation
unsignedTransaction = new TransactionBuilder(creationHeight)
  .from(inputs) // Raw UTXOs from explorer
  .to(
    new OutputBuilder(amountToSend, recipientWallet)
      .addTokens({
        tokenId: cypxTokenId,
        amount: "100000",
      })
  )
  .sendChangeTo(userAddress) // UTXO change address handling
  .payMinFee()
  .build("EIP-12"); // Serialize for dApp connector
