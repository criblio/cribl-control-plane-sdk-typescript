# InputEventhubAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { InputEventhubAuthentication } from "cribl-control-plane/models";

let value: InputEventhubAuthentication = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `mechanism`                                                                  | [models.InputEventhubSASLMechanism](../models/inputeventhubsaslmechanism.md) | :heavy_minus_sign:                                                           | N/A                                                                          |