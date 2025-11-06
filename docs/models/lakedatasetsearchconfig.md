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
      earliestScannedTime: 7719.02,
      finishedAt: 6833.88,
      latestScannedTime: 6079.32,
      objectCount: 731.57,
    },
    scanMode: "quick",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `datatypes`                                            | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `metadata`                                             | [models.DatasetMetadata](../models/datasetmetadata.md) | :heavy_minus_sign:                                     | N/A                                                    |