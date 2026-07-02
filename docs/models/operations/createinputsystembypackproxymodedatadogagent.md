# CreateInputSystemByPackProxyModeDatadogAgent

## Example Usage

```typescript
import { CreateInputSystemByPackProxyModeDatadogAgent } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackProxyModeDatadogAgent = {
  enabled: true,
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                                          | *boolean*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                 | Forward key validation requests from the Datadog Agent to the Datadog API. If disabled, Stream handles key validation requests locally by always responding that the key is valid. |
| `rejectUnauthorized`                                                                                                                                                               | *boolean*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                                                       |