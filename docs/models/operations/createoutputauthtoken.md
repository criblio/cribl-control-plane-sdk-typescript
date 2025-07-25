# CreateOutputAuthToken

## Example Usage

```typescript
import { CreateOutputAuthToken } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthToken = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                                         | [operations.IndexerDiscoveryConfigsAuthTokenAuthenticationMethod](../../models/operations/indexerdiscoveryconfigsauthtokenauthenticationmethod.md) | :heavy_minus_sign:                                                                                                                                 | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                                               |