# CreateInputAuth

## Example Usage

```typescript
import { CreateInputAuth } from "cribl-control-plane/models/operations";

let value: CreateInputAuth = {
  mechanism: "connection-string",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mechanism`                                                                                                      | [operations.CreateInputAuthenticationMechanism](../../models/operations/createinputauthenticationmechanism.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `authType`                                                                                                       | [operations.CreateInputAuthAuthenticationMethod](../../models/operations/createinputauthauthenticationmethod.md) | :heavy_minus_sign:                                                                                               | Enter connection string directly, or select a stored secret                                                      |
| `connectionString`                                                                                               | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Event Hubs namespace or Event Hub-level connection string                                                        |
| `textSecret`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Select or create a stored text secret                                                                            |