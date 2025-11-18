# AuthTokensExtCriblLakeHTTP

## Example Usage

```typescript
import { AuthTokensExtCriblLakeHTTP } from "cribl-control-plane/models";

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
  },
  elasticsearchMetadata: {
    enabled: true,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `token`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | [models.AuthTokensExtMetadatumCriblLakeHTTP](../models/authtokensextmetadatumcribllakehttp.md)[] | :heavy_minus_sign:                                                                               | Fields to add to events referencing this token                                                   |
| `splunkHecMetadata`                                                                              | [models.SplunkHecMetadata](../models/splunkhecmetadata.md)                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `elasticsearchMetadata`                                                                          | [models.ElasticsearchMetadata](../models/elasticsearchmetadata.md)                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |