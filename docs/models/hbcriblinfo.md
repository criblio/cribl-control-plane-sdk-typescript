# HBCriblInfo

## Example Usage

```typescript
import { HBCriblInfo } from "cribl-control-plane/models";

let value: HBCriblInfo = {
  config: {
    featuresRev: "<value>",
    hbPeriodSeconds: 2537.5,
    logStreamEnv: "<value>",
    policyRev: "<value>",
    version: "<value>",
  },
  deploymentId: "<id>",
  disableSNIRouting: false,
  distMode: "outpost",
  edgeNodes: 4521.05,
  group: "<value>",
  guid: "<id>",
  installType: "<value>",
  lookupVersions: {},
  master: {
    host: "cultivated-thread.net",
    port: 7220.5,
    servername: "<value>",
    tls: false,
  },
  pid: 8614.45,
  socksEnabled: true,
  startTime: 9709.17,
  tags: [],
  version: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `config`                                             | [models.Config](../models/config.md)                 | :heavy_check_mark:                                   | N/A                                                  |
| `deploymentId`                                       | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `disableSNIRouting`                                  | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `distMode`                                           | [models.DistMode](../models/distmode.md)             | :heavy_check_mark:                                   | N/A                                                  |
| `edgeNodes`                                          | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `group`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `guid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `installType`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `lookupVersions`                                     | [models.LookupVersions](../models/lookupversions.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `master`                                             | [models.HBLeaderInfo](../models/hbleaderinfo.md)     | :heavy_minus_sign:                                   | N/A                                                  |
| `pid`                                                | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `socksEnabled`                                       | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `startTime`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `tags`                                               | *string*[]                                           | :heavy_check_mark:                                   | N/A                                                  |
| `version`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |