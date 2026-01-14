# PipelineFunctionOtlpTraces

## Example Usage

```typescript
import { PipelineFunctionOtlpTraces } from "cribl-control-plane/models";

let value: PipelineFunctionOtlpTraces = {
  filter: "<value>",
  id: "otlp_traces",
  description:
    "make hyphenation ack next overspend furthermore plus lest modulo",
  disabled: true,
  final: false,
  conf: {
    dropNonTraceEvents: false,
    otlpVersion: "1.3.1",
    batchOTLPTraces: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"otlp_traces"*                                                                              | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaOtlpTraces](../models/functionconfschemaotlptraces.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |