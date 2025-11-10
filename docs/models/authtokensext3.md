# AuthTokensExt3

## Example Usage

```typescript
import { AuthTokensExt3 } from "cribl-control-plane/models";

let value: AuthTokensExt3 = {
  token: "<value>",
  description: "youthful lend community",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `token`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [models.InputCriblLakeHttpMetadatum3](../models/inputcribllakehttpmetadatum3.md)[] | :heavy_minus_sign:                                                                 | Fields to add to events referencing this token                                     |
| `splunkHecMetadata`                                                                | [models.SplunkHecMetadata3](../models/splunkhecmetadata3.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `elasticsearchMetadata`                                                            | [models.ElasticsearchMetadata3](../models/elasticsearchmetadata3.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |