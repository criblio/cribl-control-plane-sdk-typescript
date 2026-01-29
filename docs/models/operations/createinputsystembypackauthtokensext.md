# CreateInputSystemByPackAuthTokensExt

## Example Usage

```typescript
import { CreateInputSystemByPackAuthTokensExt } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuthTokensExt = {
  token: "<value>",
  description: "hence foolish merrily mask",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  splunkHecMetadata: {
    enabled: false,
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[]                                            | :heavy_minus_sign:                                                                                                                 | Fields to add to events referencing this token                                                                                     |
| `splunkHecMetadata`                                                                                                                | [operations.CreateInputSystemByPackSplunkHecMetadata](../../models/operations/createinputsystembypacksplunkhecmetadata.md)         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `elasticsearchMetadata`                                                                                                            | [operations.CreateInputSystemByPackElasticsearchMetadata](../../models/operations/createinputsystembypackelasticsearchmetadata.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |