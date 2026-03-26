# PipelineFunctionLocalSearchSchemaMapper

## Example Usage

```typescript
import { PipelineFunctionLocalSearchSchemaMapper } from "cribl-control-plane/models";

let value: PipelineFunctionLocalSearchSchemaMapper = {
  id: "local_search_schema_mapper",
  conf: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Filter that selects data to be fed through this Function                                                   |
| `id`                                                                                                       | *"local_search_schema_mapper"*                                                                             | :heavy_check_mark:                                                                                         | Function ID                                                                                                |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Simple description of this step                                                                            |
| `disabled`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | If true, data will not be pushed through this function                                                     |
| `final`                                                                                                    | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | If enabled, stops the results of this Function from being passed to the downstream Functions               |
| `conf`                                                                                                     | [models.FunctionConfSchemaLocalSearchSchemaMapper](../models/functionconfschemalocalsearchschemamapper.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `groupId`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Group ID                                                                                                   |