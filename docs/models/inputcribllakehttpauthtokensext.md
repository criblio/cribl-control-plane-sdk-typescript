# InputCriblLakeHttpAuthTokensExt

## Example Usage

```typescript
import { InputCriblLakeHttpAuthTokensExt } from "cribl-control-plane/models";

let value: InputCriblLakeHttpAuthTokensExt = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | Token                                                                                                  |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [models.MetadataConfInputCollection](../models/metadataconfinputcollection.md)[]                       | :heavy_minus_sign:                                                                                     | Fields to add to events referencing this token                                                         |
| `splunkHecMetadata`                                                                                    | [models.InputCriblLakeHttpSplunkHecMetadata](../models/inputcribllakehttpsplunkhecmetadata.md)         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `elasticsearchMetadata`                                                                                | [models.InputCriblLakeHttpElasticsearchMetadata](../models/inputcribllakehttpelasticsearchmetadata.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |