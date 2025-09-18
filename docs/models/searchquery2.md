# SearchQuery2

## Example Usage

```typescript
import { SearchQuery2 } from "cribl-control-plane/models";

let value: SearchQuery2 = {
  earliest: "<value>",
  expectedOutputType: "instant",
  latest: 8656.52,
  parentSearchId: "<id>",
  query: "<value>",
  sampleRate: 6193.6,
  timezone: "Pacific/Rarotonga",
  type: "inline",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `earliest`                                                   | *models.Earliest1*                                           | :heavy_check_mark:                                           | N/A                                                          |
| `expectedOutputType`                                         | [models.ExpectedOutputType](../models/expectedoutputtype.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `latest`                                                     | *models.Latest1*                                             | :heavy_check_mark:                                           | N/A                                                          |
| `parentSearchId`                                             | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `query`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sampleRate`                                                 | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `timezone`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | [models.SearchQueryType2](../models/searchquerytype2.md)     | :heavy_check_mark:                                           | N/A                                                          |