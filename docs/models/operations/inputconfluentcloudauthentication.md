# InputConfluentCloudAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { InputConfluentCloudAuthentication } from "cribl-control-plane/models/operations";

let value: InputConfluentCloudAuthentication = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `mechanism`                                                                                                | [operations.InputConfluentCloudSASLMechanism](../../models/operations/inputconfluentcloudsaslmechanism.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |