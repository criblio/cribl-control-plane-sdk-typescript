# AuthenticationEventhub

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { AuthenticationEventhub } from "cribl-control-plane/models/operations";

let value: AuthenticationEventhub = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `disabled`                                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `mechanism`                                                                          | [operations.SASLMechanismEventhub](../../models/operations/saslmechanismeventhub.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |