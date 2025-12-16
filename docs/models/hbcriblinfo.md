# HBCriblInfo

## Example Usage

```typescript
import { HBCriblInfo } from "cribl-control-plane/models";

let value: HBCriblInfo = {
  config: {
    featuresRev: "<value>",
    hbPeriodSeconds: 6830.62,
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
  lookupVersions: {
    "key": {},
    "key1": {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    "key2": {},
  },
  master: {
    host: "serene-corporation.biz",
    port: 3710.27,
    servername: "<value>",
    tls: true,
  },
  pid: 5860.59,
  socksEnabled: true,
  startTime: 7775.72,
  tags: [],
  version: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `config`                                         | [models.Config](../models/config.md)             | :heavy_check_mark:                               | N/A                                              |
| `deploymentId`                                   | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `disableSNIRouting`                              | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `distMode`                                       | [models.DistMode](../models/distmode.md)         | :heavy_check_mark:                               | N/A                                              |
| `edgeNodes`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `group`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `guid`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `installType`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `lookupVersions`                                 | Record<string, Record<string, *string*>>         | :heavy_minus_sign:                               | N/A                                              |
| `master`                                         | [models.HBLeaderInfo](../models/hbleaderinfo.md) | :heavy_minus_sign:                               | N/A                                              |
| `pid`                                            | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `socksEnabled`                                   | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `startTime`                                      | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `tags`                                           | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `version`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |