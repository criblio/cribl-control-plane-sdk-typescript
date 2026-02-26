# FunctionConfSchemaRollupMetrics

## Example Usage

```typescript
import { FunctionConfSchemaRollupMetrics } from "cribl-control-plane/models";

let value: FunctionConfSchemaRollupMetrics = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `dimensions`                                                                                                 | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | List of dimensions across which to perform rollups. Supports wildcards. Defaults to all original dimensions. |
| `timeWindow`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The time span of the rollup window. Must be a valid time string (such as 10s).                               |
| `gaugeRollup`                                                                                                | [models.GaugeUpdate](../models/gaugeupdate.md)                                                               | :heavy_minus_sign:                                                                                           | The operation to use when rolling up gauge metrics. Defaults to last.                                        |