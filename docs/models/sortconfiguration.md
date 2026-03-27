# SortConfiguration

## Example Usage

```typescript
import { SortConfiguration } from "cribl-control-plane/models";

let value: SortConfiguration = {
  comparisonExpression: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sortId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Has to be unique if there are multiple sorts on the pipeline.               |
| `comparisonExpression`                                                      | *string*                                                                    | :heavy_check_mark:                                                          | The expression can access the events via the 'left' and 'right' properties. |
| `topN`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Limits the output to N (highest/lowest) events                              |
| `maxEvents`                                                                 | *number*                                                                    | :heavy_minus_sign:                                                          | Specifies the number of events that can flow into this function             |
| `suppressPreviews`                                                          | *boolean*                                                                   | :heavy_minus_sign:                                                          | Toggle this on to suppress generating previews of intermediate results      |