# CreateInputSystemByPackAuth

## Example Usage

```typescript
import { CreateInputSystemByPackAuth } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuth = {
  mechanism: "connection-string",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `mechanism`                                                                                                                              | [operations.CreateInputSystemByPackAuthenticationMechanism](../../models/operations/createinputsystembypackauthenticationmechanism.md)   | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `authType`                                                                                                                               | [operations.CreateInputSystemByPackAuthAuthenticationMethod](../../models/operations/createinputsystembypackauthauthenticationmethod.md) | :heavy_minus_sign:                                                                                                                       | Enter connection string directly, or select a stored secret                                                                              |
| `connectionString`                                                                                                                       | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Event Hubs namespace or Event Hub-level connection string                                                                                |
| `textSecret`                                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Select or create a stored text secret                                                                                                    |