# Security

## Example Usage

```typescript
import { Security } from "cribl-control-plane/models";

let value: Security = {
  clientOauth: {
    clientID: "<id>",
    clientSecret: "<value>",
    audience: "https://api.cribl.cloud",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `bearerAuth`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `clientOauth`                                              | [models.SchemeClientOauth](../models/schemeclientoauth.md) | :heavy_minus_sign:                                         | N/A                                                        |