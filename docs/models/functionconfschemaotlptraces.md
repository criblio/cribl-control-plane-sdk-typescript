# FunctionConfSchemaOtlpTraces

## Example Usage

```typescript
import { FunctionConfSchemaOtlpTraces } from "cribl-control-plane/models";

let value: FunctionConfSchemaOtlpTraces = {
  dropNonTraceEvents: false,
  otlpVersion: "0.10.0",
  batchOTLPTraces: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dropNonTraceEvents`                                         | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `otlpVersion`                                                | [models.OtlpVersionOptions](../models/otlpversionoptions.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `batchOTLPTraces`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | Batch OTLP traces by shared top-level `resource` attributes  |