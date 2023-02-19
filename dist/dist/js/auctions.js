const auctionUrl = "";
const auctionIdTest = "";
// const auctionAddress = `5t19JGogcry9DRipPNcLs4mSnHYXQoqazPDMXXcdMixeH2mkgzMvWXjENsHRJzfHAFnTL5FBDHQCzBcnYg4CU1LcJZMmUXAaDcsKdgfBk4sE9BDbLt6Yxkjh6ow65HGCgxkwNAEArMAz8tqZL7GzKx4AvYVkqG3ExKggwDyVrvx7YzN8xeFtEUcnVkDKM8ow7YWW8eee2EidfYArPRd8fxQr5EuZVEiQbzKZ6m4xgtHfhsEptE3pNdt69F94gkytpounxBYpJPqfeZ8hVxLk8qaXTGFiJTDTt2p9D5ue4skZf4AGSLJyuzpMkjdifczQNc784ic1nbTAcjL3FKGHqnkaVwnCxU7go45X9ZFHwdpc6v67vFDoHzAAqypax4UFF1ux84X5G4xK5NFFjMZtvPyjqn2ErNXVgHBs2AkpngBPjnVRiN4sWkhR66NfBNpigU8PaTiB4Rim2FMZSXuyhRySCA1BV8ydVxz45T9VHqHA6WYkXp2ppAHmc29F8MrHX5Ew2x6amraFgvsdgAB3XiiEqEjRc83mhZVL1QgKi5CdeeGNYiXeCkxaRhG3j6r1JdAgzGDAQfN8sdRcEc1aYxbPfbqM1s81NFm7K1UmMUxrfCUp73poGAfV8FvQa2akyascKBaSCqvwuHW2ZP4oMoJHjZjTAgQjQF8cBNF9YLo6wXEtMQT5FYc3bHSgd4xZXCk2oHYjUSACW1Z5e7KZ3Qw1Sa2UvpMdWhbZ5Ncu99WT7v6nHFLJvHEPM7evr41nhCe9Yt3pAq4ee4rKCtEer4vQWq2b5UJSDXDj5VkVepQ5tmeXfXrBc42Yqucy6VeQSE7W66o4hQjwW1iN3yipmdTmpaAEASmbXwCxRSm7g4sNkfA969xo14PZQpBY3QUGqgCWoqJJVFWMhfvD53rzfgJpA4JH5B1fvY99q5iwbsAKdJfZi4fxub9QWZSNQfht4JqXMDmc6XTkWLE4VCxBRQYzF44H2E6mdf5EbZHUrpXj5c2VfC6PZGg9qmrz14aZjafM4M7kRTqMwVB8R9r7kXM1FWidGoprp2fRoJUALAKxKDSTVHX8ejT8zkSKJ5W45dSQjMe3WUDTeKhiy6Fqio2ukV8THaizTp6yZWxMVdu3a15pGBv1kmXZJEnLN9BsxyhnW2iGM7tvwK1jAneXeBH1uVdusR59j5ubCGKeoaS5ToC8Ky6wZ2iCyb2JF5CTvR4sMUg2ksmUm1dk8EoRjJ9i5gkqY`
const auctionAddress = `9hfNCyqJsCSku8HXrV17Y6AaQciCAwkwx4M49imdWjRaTX22Mvz`;
const auctionAddresses = [auctionAddress]
const explorerApi = 'https://api.ergoplatform.com/api/v0'
const explorerApiV1 = 'https://api.ergoplatform.com/api/v1'

const btn = document.getElementById("testButton");

const getRequest = (url, api = explorerApi) => {
    console.log(api + url);
    return fetch(api + url).then(res => res.json());
};

const currentHeight = async () => {
    getRequest('/blocks?limit=1')
        .then(res => {
            return res.items[0].height;
        })
};

const currentBlock = async () => {
    return getRequest('/blocks?limit=1')
        .then(res => {
            return res.items[0]
        })
}

const unspentBoxesFor = (address) => {
    return getRequest(`/transactions/boxes/byAddress/unspent/${address}`)
}

const boxByAddress = (id) => {
    return getRequest(`/transactions/boxes/${id}`)
}

const boxById = (id) => {
    return getRequest(`/transactions/boxes/${id}`)
}

const getUnconfirmedTxs = (addr) => {
    return getRequest(
        `/mempool/transactions/byAddress/${addr}`, explorerApiV1
    ).then((res) => res.items);
};

const getActiveAuctions = (addr) => {
    console.log("Active auctions...");
    return getRequest(`/boxes/unspent/byAddress/${addr}?limit=500`, explorerApiV1)
        .then(res => res.items)
        .then((boxes) => boxes.filter((box) => box.assets.length > 0));
}

const getAllActiveAuctions = async () => {
    const spending = (await getUnconfirmedTxs(auctionAddress)).filter(s => s.inputs.length > 1)
    let idToNew = {}
    spending.forEach(s => {
        let curId = s.inputs[s.inputs.length - 1].boxId
        if (idToNew[curId] === undefined || idToNew[curId].value < s.value)
            idToNew[curId] = s.outputs[0]
    })
    const all = auctionAddresses.map((addr) => getActiveAuctions(addr));
    return Promise.all(all)
        .then((res) => [].concat.apply([], res))
        .then(res => {
            return res.map(r => {
                if (idToNew[r.boxId] !== undefined) return idToNew[r.boxId]
                else return r
            })
        })
};

const tx = async () => {
    const au = await getAllActiveAuctions();

    console.log(au);

    au.forEach(a => {
        console.log(a)
    })
}

const filter = (txs) => {
    let cyberCitizens = [];
    const testIds = [
        "274be310d16f6dd6268192107154fd7a2a8d043bbda58c72f30b249ae3d0de8f",
        "63dad3db6e66d1da2a55ab92c670e69355b28ed47d99b58e2119310a42d9ddc8",
        "bf95494bb895ab09c92983f8612338f9c68befba652db8e00a833e8d60aebe39",
        "243320613089785fa2ae4ec01b7396d2b960e1858858755f79ea6badc7fdb02b",
    ];
    txs.forEach(tx => {
        if(testIds.indexOf(tx.assets[0]["tokenId"]) !== -1) {
            cyberCitizens.push(tx.assets[0]);
        }
    });
    console.log(cyberCitizens);
}

const dataFlow = async () => {
    let allAucs = await getAllActiveAuctions();
    filter(allAucs);
}

btn.addEventListener('click', dataFlow);