# LakeDatasetSearchConfig

## Example Usage

```typescript
import { LakeDatasetSearchConfig } from "cribl-control-plane/models";

let value: LakeDatasetSearchConfig = {
  metadata: {
    earliest: "-30d",
    enableAcceleration: false,
    fieldList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    scanMode: "quick",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `datatypes`                                                                            | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Datatype identifiers assigned to the Dataset for search-time event classification.     |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Brief description of Dataset search configuration.                                     |
| `metadata`                                                                             | [models.DatasetMetadata](../models/datasetmetadata.md)                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `pathFilters`                                                                          | [models.ObjectStorageFilter](../models/objectstoragefilter.md)[]                       | :heavy_minus_sign:                                                                     | Glob-to-Datatype mappings for the Lake bucket path. Used only for search execution v2. |
| `searchVersion`                                                                        | [models.SearchVersion](../models/searchversion.md)                                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `tags`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Comma-separated tags for the Dataset search configuration.                             |