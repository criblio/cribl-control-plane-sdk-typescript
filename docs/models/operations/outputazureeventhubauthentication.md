# OutputAzureEventhubAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { OutputAzureEventhubAuthentication } from "cribl-control-plane/models/operations";

let value: OutputAzureEventhubAuthentication = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `mechanism`                                                                                                | [operations.OutputAzureEventhubSASLMechanism](../../models/operations/outputazureeventhubsaslmechanism.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |