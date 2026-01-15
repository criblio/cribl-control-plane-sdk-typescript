# FunctionConfSchemaLakeExport

## Example Usage

```typescript
import { FunctionConfSchemaLakeExport } from "cribl-control-plane/models";

let value: FunctionConfSchemaLakeExport = {
  searchJobId: "<id>",
  dataset: "<value>",
  lake: "<value>",
  tee: true,
  flushMs: 9585.44,
  suppressPreviews: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `searchJobId`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Id of the search job this function is running on.                                      |
| `dataset`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the dataset                                                                    |
| `lake`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the lake                                                                       |
| `tee`                                                                                  | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Tee results to search. When set to true results will be shipped instead of stats       |
| `flushMs`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | How often are stats flushed in ms                                                      |
| `suppressPreviews`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Disables generation of intermediate stats. When true stats will be emitted only on end |