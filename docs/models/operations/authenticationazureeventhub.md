# AuthenticationAzureEventhub

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { AuthenticationAzureEventhub } from "cribl-control-plane/models/operations";

let value: AuthenticationAzureEventhub = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `mechanism`                                                                                    | [operations.SASLMechanismAzureEventhub](../../models/operations/saslmechanismazureeventhub.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |