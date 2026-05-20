# LakeDatasetMetrics

## Example Usage

```typescript
import { LakeDatasetMetrics } from "cribl-control-plane/models";

let value: LakeDatasetMetrics = {
  currentSizeBytes: 1804.65,
  metricsDate: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `currentSizeBytes`                                            | *number*                                                      | :heavy_check_mark:                                            | Total current logical size of the Dataset, in bytes.          |
| `metricsDate`                                                 | *string*                                                      | :heavy_check_mark:                                            | Timestamp (ISO 8601) when the metrics snapshot was generated. |