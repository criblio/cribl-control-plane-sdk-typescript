# CreateInputAuthTokensExt

## Example Usage

```typescript
import { CreateInputAuthTokensExt } from "cribl-control-plane/models/operations";

let value: CreateInputAuthTokensExt = {
  token: "<value>",
  description: "anesthetize cheetah when demonstrate",
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
    enabled: false,
    defaultDataset: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | [models.ItemsTypeMetadata](../../models/itemstypemetadata.md)[]                                            | :heavy_minus_sign:                                                                                         | Fields to add to events referencing this token                                                             |
| `splunkHecMetadata`                                                                                        | [operations.CreateInputSplunkHecMetadata](../../models/operations/createinputsplunkhecmetadata.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `elasticsearchMetadata`                                                                                    | [operations.CreateInputElasticsearchMetadata](../../models/operations/createinputelasticsearchmetadata.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |