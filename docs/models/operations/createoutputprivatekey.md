# CreateOutputPrivateKey

Private key

## Example Usage

```typescript
import { CreateOutputPrivateKey } from "cribl-control-plane/models/operations";

let value: CreateOutputPrivateKey = {
  keyName: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `keyName`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Select the stored secret containing the RSA private key (PEM format) for Snowflake key-pair authentication |