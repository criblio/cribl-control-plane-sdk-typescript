# SystemSystemMetrics

## Example Usage

```typescript
import { SystemSystemMetrics } from "cribl-control-plane/models";

let value: SystemSystemMetrics = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.SystemModeSystemMetrics](../models/systemmodesystemmetrics.md) | :heavy_minus_sign:                                                     | Select the level of detail for system metrics                          |
| `processes`                                                            | *boolean*                                                              | :heavy_minus_sign:                                                     | Generate metrics for the numbers of processes in various states        |