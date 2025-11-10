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
      earliestScannedTime: 2718.64,
      finishedAt: 7126.23,
      latestScannedTime: 160.67,
      objectCount: 7729.98,
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