# AuthTokensExt4

## Example Usage

```typescript
import { AuthTokensExt4 } from "cribl-control-plane/models";

let value: AuthTokensExt4 = {
  token: "<value>",
  description: "fooey because regarding instead phooey",
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
| `metadata`                                                                         | [models.InputCriblLakeHttpMetadatum4](../models/inputcribllakehttpmetadatum4.md)[] | :heavy_minus_sign:                                                                 | Fields to add to events referencing this token                                     |
| `splunkHecMetadata`                                                                | [models.SplunkHecMetadata4](../models/splunkhecmetadata4.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `elasticsearchMetadata`                                                            | [models.ElasticsearchMetadata4](../models/elasticsearchmetadata4.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |