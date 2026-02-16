# FunctionConfSchemaOtlpLogs

## Example Usage

```typescript
import { FunctionConfSchemaOtlpLogs } from "cribl-control-plane/models";

let value: FunctionConfSchemaOtlpLogs = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dropNonLogEvents`                                               | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `batchOTLPLogs`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | Batch OTLP log records by shared top-level `resource` attributes |