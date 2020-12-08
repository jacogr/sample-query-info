# query-info

Queries some specific Substrate block info on a timer

Run `npm start`, output should be of the form -

```
2020-12-08T10:47:10.506Z ["2.0.0-9467f562d-x86_64-macos",{"peers":"0","isSyncing":false,"shouldHavePeers":false},[],{"block":{"header":{"parentHash":"0x282ec3aa0de6e6788db683dfe086f5fcdd88bd1f6a3dd521db2d313a0ff33746","number":"8,031","stateRoot":"0x7cd5580b4c5623390deebea25073eae70c980a353b40b581492339209b02ef2b","extrinsicsRoot":"0x0e3b1bf3b7e3fe40d6c3cf0d953aaa9225d3fc60844fa0fcb2687e061369f2b7","digest":{"logs":[{"PreRuntime":["BABE","0x02000000007d77ef1f00000000"]},{"Consensus":["BABE","0x0104d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01000000000000007a49fba420a2e7535c9bc3430c4815d0ea718457c2bd5bce828d284696d5c705"]},{"Seal":["BABE","0x78b64123056bf359ef97acec102ac4786a1175d667c7c7da7cd51c3d8a77896184f19a1d9b5b2fd7a5bb21b7cf8c282ccf2ec7e4cde8f50c63db19cb4d94a18c"]}]}},"extrinsics":[{"isSigned":false,"method":{"args":["1,607,362,168,182"],"method":"set","section":"timestamp"}}]},"justification":""},"0x08b2abcb42bc1e9fbd5c714c8f4f01e0913750124bf371693dcb354f84fd3589"]
...
```
