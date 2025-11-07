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
      "<value 3>",
    ],
    latestRunInfo: {
      earliestScannedTime: 4514.45,
      finishedAt: 4750.45,
      latestScannedTime: 8488.95,
      objectCount: 359.3,
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