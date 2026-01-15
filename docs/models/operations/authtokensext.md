# AuthTokensExt

## Example Usage

```typescript
import { AuthTokensExt } from "cribl-control-plane/models/operations";

let value: AuthTokensExt = {
  token: "<value>",
  description: "obtrude chime along",
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
    ],
  },
  elasticsearchMetadata: {
    enabled: true,
    defaultDataset: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `token`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `metadata`                                                                              | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[] | :heavy_minus_sign:                                                                      | Fields to add to events referencing this token                                          |
| `splunkHecMetadata`                                                                     | [operations.SplunkHecMetadata](../../models/operations/splunkhecmetadata.md)            | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `elasticsearchMetadata`                                                                 | [operations.ElasticsearchMetadata](../../models/operations/elasticsearchmetadata.md)    | :heavy_minus_sign:                                                                      | N/A                                                                                     |