# FunctionOtlpTracesSchema

## Example Usage

```typescript
import { FunctionOtlpTracesSchema } from "cribl-control-plane/models";

let value: FunctionOtlpTracesSchema = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `dropNonTraceEvents`                                                               | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `otlpVersion`                                                                      | [models.FunctionOTLPTracesOTLPVersion](../models/functionotlptracesotlpversion.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `batchOTLPTraces`                                                                  | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Batch OTLP traces by shared top-level `resource` attributes                        |