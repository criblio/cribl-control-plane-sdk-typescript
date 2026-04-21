# Config

Configuration bundle and policy revision metadata for the node.

## Example Usage

```typescript
import { Config } from "cribl-control-plane/models";

let value: Config = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `featuresRev`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Feature flags or feature revision string for the bundle.          |
| `hbPeriodSeconds`                                                 | *number*                                                          | :heavy_minus_sign:                                                | Worker-to-Leader heartbeat interval, in seconds.                  |
| `logStreamEnv`                                                    | *string*                                                          | :heavy_minus_sign:                                                | GitOps or LogStream environment label associated with the bundle. |
| `policyRev`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Current policies revision string.                                 |
| `version`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Configuration bundle version.                                     |