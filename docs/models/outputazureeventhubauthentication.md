# OutputAzureEventhubAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { OutputAzureEventhubAuthentication } from "cribl-control-plane/models";

let value: OutputAzureEventhubAuthentication = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `disabled`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `mechanism`                                                                              | [models.OutputAzureEventhubSASLMechanism](../models/outputazureeventhubsaslmechanism.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |