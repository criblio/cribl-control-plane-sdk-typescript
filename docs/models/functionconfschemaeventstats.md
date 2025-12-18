# FunctionConfSchemaEventstats

## Example Usage

```typescript
import { FunctionConfSchemaEventstats } from "cribl-control-plane/models";

let value: FunctionConfSchemaEventstats = {
  aggregations: [
    "<value 1>",
  ],
  groupBys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregations`                                                                                                                         | *string*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                     | Aggregate function(s) to perform on events. E.g., sum(bytes).where(action=='REJECT').as(TotalBytes)                                    |
| `groupBys`                                                                                                                             | *string*[]                                                                                                                             | :heavy_minus_sign:                                                                                                                     | Fields to group aggregates by, supports wildcard expressions.                                                                          |
| `maxEvents`                                                                                                                            | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Specifies how many events are at max kept in memory to be enriched with aggregations                                                   |
| `flushOnInputClose`                                                                                                                    | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Determines if aggregations should flush when an input stream is closed. If disabled, time window settings will control flush behavior. |