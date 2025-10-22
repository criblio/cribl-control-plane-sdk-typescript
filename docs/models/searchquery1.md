# SearchQuery1

## Example Usage

```typescript
import { SearchQuery1 } from "cribl-control-plane/models";

let value: SearchQuery1 = {
  query: "<value>",
  queryId: "<id>",
  runMode: "newSearch",
  type: "saved",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `query`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `queryId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `runMode`                                                    | [models.SavesSearchRunMode](../models/savessearchrunmode.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | [models.SearchQueryType1](../models/searchquerytype1.md)     | :heavy_check_mark:                                           | N/A                                                          |