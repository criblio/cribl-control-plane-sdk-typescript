# SearchQuery5

## Example Usage

```typescript
import { SearchQuery5 } from "cribl-control-plane/models";

let value: SearchQuery5 = {
  earliest: "<value>",
  expectedOutputType: "instant",
  latest: 4747.7,
  queries: [
    {
      alias: "<value>",
      localId: "<id>",
      query: "<value>",
    },
  ],
  timezone: "Africa/Freetown",
  type: "metric",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `earliest`                                                         | *models.Earliest2*                                                 | :heavy_check_mark:                                                 | N/A                                                                |
| `expectedOutputType`                                               | [models.ExpectedOutputType](../models/expectedoutputtype.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
| `latest`                                                           | *models.Latest2*                                                   | :heavy_check_mark:                                                 | N/A                                                                |
| `queries`                                                          | [models.PanelQueryDefinition](../models/panelquerydefinition.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `timezone`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `type`                                                             | [models.SearchQueryType5](../models/searchquerytype5.md)           | :heavy_check_mark:                                                 | N/A                                                                |