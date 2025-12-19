# AuthTokensExtCriblLakeHTTP

## Example Usage

```typescript
import { AuthTokensExtCriblLakeHTTP } from "cribl-control-plane/models/operations";

let value: AuthTokensExtCriblLakeHTTP = {
  token: "<value>",
  description: "following midst scoop crazy yowza spotless",
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
    ],
  },
  elasticsearchMetadata: {
    enabled: true,
    defaultDataset: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | [operations.AuthTokensExtMetadatumCriblLakeHTTP](../../models/operations/authtokensextmetadatumcribllakehttp.md)[] | :heavy_minus_sign:                                                                                                 | Fields to add to events referencing this token                                                                     |
| `splunkHecMetadata`                                                                                                | [operations.SplunkHecMetadata](../../models/operations/splunkhecmetadata.md)                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `elasticsearchMetadata`                                                                                            | [operations.ElasticsearchMetadata](../../models/operations/elasticsearchmetadata.md)                               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |