# InputCriblLakeHttpAuthTokensExt

## Example Usage

```typescript
import { InputCriblLakeHttpAuthTokensExt } from "cribl-control-plane/models";

let value: InputCriblLakeHttpAuthTokensExt = {
  token: "<value>",
  description: "intently oh once profitable apud canter",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  splunkHecMetadata: {
    enabled: true,
  },
  elasticsearchMetadata: {
    enabled: true,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | [models.InputCriblLakeHttpAuthTokensExtMetadatum](../models/inputcribllakehttpauthtokensextmetadatum.md)[] | :heavy_minus_sign:                                                                                         | Fields to add to events referencing this token                                                             |
| `splunkHecMetadata`                                                                                        | [models.SplunkHecMetadata](../models/splunkhecmetadata.md)                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `elasticsearchMetadata`                                                                                    | [models.ElasticsearchMetadata](../models/elasticsearchmetadata.md)                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |