# Auth

## Example Usage

```typescript
import { Auth } from "cribl-control-plane/models";

let value: Auth = {
  authType: "manual",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mechanism`                                                                                        | [models.AuthenticationMechanism](../models/authenticationmechanism.md)                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `authType`                                                                                         | [models.InputEventhubAmqpAuthenticationMethod](../models/inputeventhubamqpauthenticationmethod.md) | :heavy_check_mark:                                                                                 | Enter connection string directly, or select a stored secret                                        |
| `connectionString`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Event Hubs namespace or Event Hub-level connection string                                          |
| `textSecret`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Select or create a stored text secret                                                              |