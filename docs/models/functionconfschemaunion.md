# FunctionConfSchemaUnion

## Example Usage

```typescript
import { FunctionConfSchemaUnion } from "cribl-control-plane/models";

let value: FunctionConfSchemaUnion = {
  searchJobId: "<id>",
  stageIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `searchJobId`                    | *string*                         | :heavy_minus_sign:               | The id for this search job.      |
| `stageIds`                       | *string*[]                       | :heavy_minus_sign:               | The stages we are unioning with. |