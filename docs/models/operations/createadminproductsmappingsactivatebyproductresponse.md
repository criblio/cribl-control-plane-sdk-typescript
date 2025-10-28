# CreateAdminProductsMappingsActivateByProductResponse

The <code>id</code> of the Mapping Ruleset that has been successfully activated

## Example Usage

```typescript
import { CreateAdminProductsMappingsActivateByProductResponse } from "cribl-control-plane/models/operations";

let value: CreateAdminProductsMappingsActivateByProductResponse = {
  count: 702854,
  items: [
    {
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `count`                                         | *number*                                        | :heavy_minus_sign:                              | number of items present in the items array      |
| `items`                                         | [models.RulesetId](../../models/rulesetid.md)[] | :heavy_minus_sign:                              | N/A                                             |