# JoinConfiguration

## Example Usage

```typescript
import { JoinConfiguration } from "cribl-control-plane/models";

let value: JoinConfiguration = {
  fieldConditions: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `kind`                                                 | *string*                                               | :heavy_minus_sign:                                     | Join kind, e.g. inner                                  |
| `hints`                                                | Record<string, *string*>                               | :heavy_minus_sign:                                     | Hints passed to the join function                      |
| `fieldConditions`                                      | [models.FieldCondition](../models/fieldcondition.md)[] | :heavy_check_mark:                                     | Fields to use when joining                             |
| `searchJobId`                                          | *string*                                               | :heavy_minus_sign:                                     | The id for this search job.                            |
| `stageId`                                              | *string*                                               | :heavy_minus_sign:                                     | The stage we are joining with.                         |