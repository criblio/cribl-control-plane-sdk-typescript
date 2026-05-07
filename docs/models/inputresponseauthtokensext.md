# InputResponseAuthTokensExt

## Example Usage

```typescript
import { InputResponseAuthTokensExt } from "cribl-control-plane/models";

let value: InputResponseAuthTokensExt = {
  token: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `token`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | [models.Metadata](../models/metadata.md)[]                                                   | :heavy_minus_sign:                                                                           | Fields to add to events referencing this token                                               |
| `splunkHecMetadata`                                                                          | [models.InputResponseSplunkHecMetadata](../models/inputresponsesplunkhecmetadata.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `elasticsearchMetadata`                                                                      | [models.InputResponseElasticsearchMetadata](../models/inputresponseelasticsearchmetadata.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |