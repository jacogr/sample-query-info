import { ApiPromise, WsProvider } from '@polkadot/api';

const TIMEOUT = 15_000;

function query () {
  const provider = new WsProvider();

  ApiPromise
    .create({ provider })
    .then((api) => Promise.all([
      api.rpc.system.version(),
      api.rpc.system.health(),
      api.rpc.system.peers(),
      api.rpc.chain.getBlock(),
      api.rpc.chain.getBlockHash()
    ]))
    .then((values) => {
      provider.disconnect();
      console.log(new Date(), JSON.stringify(values.map((v) => v.toHuman())));
    })
    .catch((error) => {
      console.error(error);
      process.exit(-1);
    });
}

query();
setInterval(query, TIMEOUT);

