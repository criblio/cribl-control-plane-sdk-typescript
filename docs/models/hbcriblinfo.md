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
  distMode: "edge",
  edgeNodes: 7981.9,
  group: "<value>",
  guid: "<id>",
  installType: "<value>",
  lookupVersions: {},
  master: {
    host: "petty-entry.com",
    port: 3592.48,
    servername: "<value>",
    tls: false,
  },
  pid: 4521.05,
  startTime: 8614.45,
  tags: [],
  version: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `config`                                             | [models.Config](../models/config.md)                 | :heavy_check_mark:                                   | N/A                                                  |
| `deploymentId`                                       | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `distMode`                                           | [models.AppMode](../models/appmode.md)               | :heavy_check_mark:                                   | N/A                                                  |
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