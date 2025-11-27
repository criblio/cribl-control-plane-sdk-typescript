# FunctionOtlpLogsConf

## Example Usage

```typescript
import { FunctionOtlpLogsConf } from "cribl-control-plane/models";

let value: FunctionOtlpLogsConf = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dropNonLogEvents`                                               | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `batchOTLPLogs`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | Batch OTLP log records by shared top-level `resource` attributes |