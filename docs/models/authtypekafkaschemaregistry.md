# AuthTypeKafkaSchemaRegistry

Credentials to use when authenticating with the schema registry using basic HTTP authentication

## Example Usage

```typescript
import { AuthTypeKafkaSchemaRegistry } from "cribl-control-plane/models";

let value: AuthTypeKafkaSchemaRegistry = {
  disabled: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `credentialsSecret`                                        | *string*                                                   | :heavy_minus_sign:                                         | Select or create a secret that references your credentials |