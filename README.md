# Ergo Transaction Builder (Fleet SDK)

![Network](https://img.shields.io/badge/Network-Ergo_Mainnet-orange?style=for-the-badge)
![Standard](https://img.shields.io/badge/Spec-EIP--12_Compliant-blue?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Model-UTXO_Construction-green?style=for-the-badge)

A specialized transaction construction engine for the Ergo blockchain. This utility leverages the **Fleet SDK** to manually compose Unspent Transaction Outputs (UTXOs), calculate storage rent, and serialize EIP-12 compliant signing requests for wallet connectors (Nautilus, SAFEW).

[**🚀 Live Demo**](https://gammahazard.github.io/Fleet-SDK-cc/dist/index.html)

---

## ⚡ Technical Capabilities

* **Custom UTXO Selection:** Fetches and filters input boxes via `ergo.get_utxos()`.
* **Token Transfer Logic:** Handles ERG transfers with automatic change address routing.
* **EIP-12 Compliance:** Formats transaction context for external wallet signing (Nautilus).
* **Error Handling:** User-friendly messages for insufficient funds and wallet connection states.

---

## 💻 Implementation Logic

The core builder logic constructs a state-change request from raw UTXOs:

```javascript
import { OutputBuilder, TransactionBuilder } from "@fleet-sdk/core";

const inputs = await ergo.get_utxos();
const userAddress = await ergo.get_change_address();
const creationHeight = await ergo.get_current_height();

unsignedTransaction = new TransactionBuilder(creationHeight)
  .from(inputs)                              // Raw UTXOs from wallet
  .to(
    new OutputBuilder(amountToSend, recipientWallet)
  )
  .sendChangeTo(userAddress)                 // UTXO change routing
  .payMinFee()                               // Automatic fee calculation
  .build("EIP-12");                          // Nautilus-compatible format

const signedTx = await ergo.sign_tx(unsignedTransaction);
const txId = await ergo.submit_tx(signedTx);
```

---

## 📁 Project Structure

```
Fleet-SDK-cc/
├── src/
│   ├── fleet.js          # Core transaction builder logic
│   ├── app.js            # Application entry
│   ├── index.js          # Module exports
│   ├── index.html        # UI template
│   ├── assets/           # Images & fonts
│   ├── styles/           # CSS stylesheets
│   └── js/               # Helper scripts
├── dist/                 # Webpack build output (GitHub Pages)
├── webpack.config.js     # Build configuration
└── package.json
```

---

## 📂 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Blockchain** | Ergo (UTXO Model) |
| **SDK** | Fleet SDK (`@fleet-sdk/core`) |
| **Bundler** | Webpack 5 |
| **Transpiler** | Babel |
| **Wallet** | Nautilus DApp Connector |

---

## 🚀 Development

```bash
# Install dependencies
npm install

# Development server
npm run dev-server

# Production build
npm run build
```

---

<div align="center">
  <sub>Developed by <a href="https://github.com/gammahazard">Vanguard Secure Solutions</a></sub>
</div>
