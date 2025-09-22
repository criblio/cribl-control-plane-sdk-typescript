# HBCriblInfo

## Example Usage

```typescript
import { HBCriblInfo } from "cribl-control-plane/models";

let value: HBCriblInfo = {
  config: {
    featuresRev: "<value>",
    hbPeriodSeconds: 3261.24,
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
    host: "frequent-bell.info",
    port: 9100.63,
    servername: "<value>",
    tls: true,
  },
  pid: 8614.45,
  startTime: 2035.4,
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
| `startTime`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `tags`                                               | *string*[]                                           | :heavy_check_mark:                                   | N/A                                                  |
| `version`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |