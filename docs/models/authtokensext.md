# AuthTokensExt

## Example Usage

```typescript
import { AuthTokensExt } from "cribl-control-plane/models";

let value: AuthTokensExt = {
  token: "<value>",
  description: "so provided intensely",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  splunkHecMetadata: {
    enabled: true,
    defaultDataset: "<value>",
    allowedIndexesAtToken: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  elasticsearchMetadata: {
    enabled: false,
    defaultDataset: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `token`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [models.ItemsTypeNotificationMetadata](../models/itemstypenotificationmetadata.md)[] | :heavy_minus_sign:                                                                   | Fields to add to events referencing this token                                       |
| `splunkHecMetadata`                                                                  | [models.SplunkHecMetadata](../models/splunkhecmetadata.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `elasticsearchMetadata`                                                              | [models.ElasticsearchMetadata](../models/elasticsearchmetadata.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |