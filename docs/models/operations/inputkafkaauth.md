# InputKafkaAuth

Credentials to use when authenticating with the schema registry using basic HTTP authentication

## Example Usage

```typescript
import { InputKafkaAuth } from "cribl-control-plane/models/operations";

let value: InputKafkaAuth = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `disabled`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `credentialsSecret`                                        | *string*                                                   | :heavy_minus_sign:                                         | Select or create a secret that references your credentials |