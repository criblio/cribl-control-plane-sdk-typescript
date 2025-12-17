# PipelineFunctionDropDimensionsConf

## Example Usage

```typescript
import { PipelineFunctionDropDimensionsConf } from "cribl-control-plane/models";

let value: PipelineFunctionDropDimensionsConf = {
  dropDimensions: [],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeWindow`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The time span of the tumbling window for aggregating events. Must be a valid time string (such as 10s).                                            |
| `dropDimensions`                                                                                                                                   | *string*[]                                                                                                                                         | :heavy_check_mark:                                                                                                                                 | One or more dimensions to be dropped. Supports wildcard expressions. Warning: Using wildcard '*' causes all dimensions in the event to be dropped. |
| `flushOnInputClose`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Flush aggregations when an input stream is closed. If disabled, aggregations are flushed based on Time Window Settings instead.                    |