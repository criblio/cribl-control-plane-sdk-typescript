# DatasetMetadata

## Example Usage

```typescript
import { DatasetMetadata } from "cribl-control-plane/models";

let value: DatasetMetadata = {
  earliest: "<value>",
  enableAcceleration: false,
  fieldList: [
    "<value 1>",
    "<value 2>",
  ],
  latestRunInfo: {
    earliestScannedTime: 4514.45,
    finishedAt: 4750.45,
    latestScannedTime: 8488.95,
    objectCount: 359.3,
  },
  scanMode: "detailed",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `earliest`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `enableAcceleration`                                                 | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `fieldList`                                                          | *string*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `latestRunInfo`                                                      | [models.DatasetMetadataRunInfo](../models/datasetmetadataruninfo.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `scanMode`                                                           | [models.ScanMode](../models/scanmode.md)                             | :heavy_check_mark:                                                   | N/A                                                                  |