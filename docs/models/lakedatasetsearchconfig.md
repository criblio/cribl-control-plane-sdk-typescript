# LakeDatasetSearchConfig

## Example Usage

```typescript
import { LakeDatasetSearchConfig } from "cribl-control-plane/models";

let value: LakeDatasetSearchConfig = {
  datatypes: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: {
    earliest: "<value>",
    enableAcceleration: false,
    fieldList: [
      "<value 1>",
      "<value 2>",
    ],
    latestRunInfo: {
      earliestScannedTime: 9246.59,
      finishedAt: 4514.45,
      latestScannedTime: 4750.45,
      objectCount: 8488.95,
    },
    scanMode: "detailed",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `datatypes`                                            | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `metadata`                                             | [models.DatasetMetadata](../models/datasetmetadata.md) | :heavy_minus_sign:                                     | N/A                                                    |