# OutputConfluentCloudAuthentication

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { OutputConfluentCloudAuthentication } from "cribl-control-plane/models";

let value: OutputConfluentCloudAuthentication = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `disabled`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `mechanism`                                                                                | [models.OutputConfluentCloudSASLMechanism](../models/outputconfluentcloudsaslmechanism.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |