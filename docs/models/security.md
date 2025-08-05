# Security

## Example Usage

```typescript
import { Security } from "cribl-control-plane/models";

let value: Security = {
  bearerAuth: "<value>",
  clientOauth: {
    clientID: "<id>",
    clientSecret: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `bearerAuth`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `clientOauth`                                              | [models.SchemeClientOauth](../models/schemeclientoauth.md) | :heavy_minus_sign:                                         | N/A                                                        |