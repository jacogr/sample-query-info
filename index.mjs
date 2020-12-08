import { ApiPromise } from '@polkadot/api';

const TIMEOUT = 15_000;

function query (api) {
  Promise
    .all([
      api.rpc.system.version(),
      api.rpc.system.health(),
      api.rpc.system.peers(),
      api.rpc.chain.getBlock(),
      api.rpc.chain.getBlockHash()
    ])
    .then((values) => console.log(new Date(), JSON.stringify(values.map((v) => v.toHuman()))))
    .catch((error) => console.error(error));
}

ApiPromise
  .create()
  .then((api) => {
    query(api);
    setInterval(() => query(api), TIMEOUT);
  })
  .catch((error) => {
    console.error(error);
    process.exit(-1);
  });
