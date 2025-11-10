# AuthTokensExt1

## Example Usage

```typescript
import { AuthTokensExt1 } from "cribl-control-plane/models";

let value: AuthTokensExt1 = {
  token: "<value>",
  description: "depart pry after",
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
    enabled: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `token`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `metadata`                                                                         | [models.InputCriblLakeHttpMetadatum1](../models/inputcribllakehttpmetadatum1.md)[] | :heavy_minus_sign:                                                                 | Fields to add to events referencing this token                                     |
| `splunkHecMetadata`                                                                | [models.SplunkHecMetadata1](../models/splunkhecmetadata1.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `elasticsearchMetadata`                                                            | [models.ElasticsearchMetadata1](../models/elasticsearchmetadata1.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |