# SearchEngineExportConfiguration

## Example Usage

```typescript
import { SearchEngineExportConfiguration } from "cribl-control-plane/models";

let value: SearchEngineExportConfiguration = {
  searchJobId: "<id>",
  dataset: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `searchJobId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Id of the search job this function is running on.                                      |
| `dataset`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Id of the dataset                                                                      |
| `tee`                                                                                  | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Tee results to search. When set to true results will be shipped instead of stats       |
| `flushMs`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | How often are stats flushed in ms                                                      |
| `suppressPreviews`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Disables generation of intermediate stats. When true stats will be emitted only on end |