# CreateInputAuthConfluentCloud

Credentials to use when authenticating with the schema registry using basic HTTP authentication

## Example Usage

```typescript
import { CreateInputAuthConfluentCloud } from "cribl-control-plane/models/operations";

let value: CreateInputAuthConfluentCloud = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `disabled`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `credentialsSecret`                                        | *string*                                                   | :heavy_minus_sign:                                         | Select or create a secret that references your credentials |