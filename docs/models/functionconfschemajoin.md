# FunctionConfSchemaJoin

## Example Usage

```typescript
import { FunctionConfSchemaJoin } from "cribl-control-plane/models";

let value: FunctionConfSchemaJoin = {
  kind: "<value>",
  hints: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  fieldConditions: [
    {
      leftFieldName: "<value>",
      rightFieldName: "<value>",
    },
  ],
  searchJobId: "<id>",
  stageId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `kind`                                                 | *string*                                               | :heavy_minus_sign:                                     | Join kind, e.g. inner                                  |
| `hints`                                                | Record<string, *string*>                               | :heavy_minus_sign:                                     | Hints passed to the join function                      |
| `fieldConditions`                                      | [models.FieldCondition](../models/fieldcondition.md)[] | :heavy_minus_sign:                                     | Fields to use when joining                             |
| `searchJobId`                                          | *string*                                               | :heavy_minus_sign:                                     | The id for this search job.                            |
| `stageId`                                              | *string*                                               | :heavy_minus_sign:                                     | The stage we are joining with.                         |