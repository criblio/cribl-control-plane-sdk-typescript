# AuthTokensExt2

## Example Usage

```typescript
import { AuthTokensExt2 } from "cribl-control-plane/models";

let value: AuthTokensExt2 = {
  token: "<value>",
  description: "hence ape decode sticky",
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
    enabled: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `token`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [models.InputCriblLakeHttpMetadatum2](../models/inputcribllakehttpmetadatum2.md)[] | :heavy_minus_sign:                                                                 | Fields to add to events referencing this token                                     |
| `splunkHecMetadata`                                                                | [models.SplunkHecMetadata2](../models/splunkhecmetadata2.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `elasticsearchMetadata`                                                            | [models.ElasticsearchMetadata2](../models/elasticsearchmetadata2.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |