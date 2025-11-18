# IndexerDiscoveryConfigsAuthToken

## Example Usage

```typescript
import { IndexerDiscoveryConfigsAuthToken } from "cribl-control-plane/models";

let value: IndexerDiscoveryConfigsAuthToken = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                       | [models.IndexerDiscoveryConfigsAuthTokenAuthenticationMethod](../models/indexerdiscoveryconfigsauthtokenauthenticationmethod.md) | :heavy_minus_sign:                                                                                                               | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                             |