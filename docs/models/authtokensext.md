# AuthTokensExt

## Example Usage

```typescript
import { AuthTokensExt } from "cribl-control-plane/models";

let value: AuthTokensExt = {
  token: "<value>",
  description: "angrily yearningly ferociously vet trusting yum catch",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `token`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `metadata`                                                         | [models.ItemsTypeMetadata](../models/itemstypemetadata.md)[]       | :heavy_minus_sign:                                                 | Fields to add to events referencing this token                     |
| `splunkHecMetadata`                                                | [models.SplunkHecMetadata](../models/splunkhecmetadata.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `elasticsearchMetadata`                                            | [models.ElasticsearchMetadata](../models/elasticsearchmetadata.md) | :heavy_minus_sign:                                                 | N/A                                                                |