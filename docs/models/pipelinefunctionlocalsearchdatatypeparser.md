# PipelineFunctionLocalSearchDatatypeParser

## Example Usage

```typescript
import { PipelineFunctionLocalSearchDatatypeParser } from "cribl-control-plane/models";

let value: PipelineFunctionLocalSearchDatatypeParser = {
  id: "local_search_datatype_parser",
  conf: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Filter that selects data to be fed through this Function                                                       |
| `id`                                                                                                           | *"local_search_datatype_parser"*                                                                               | :heavy_check_mark:                                                                                             | Function ID                                                                                                    |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Simple description of this step                                                                                |
| `disabled`                                                                                                     | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | If true, data will not be pushed through this function                                                         |
| `final`                                                                                                        | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | If enabled, stops the results of this Function from being passed to the downstream Functions                   |
| `conf`                                                                                                         | [models.FunctionConfSchemaLocalSearchDatatypeParser](../models/functionconfschemalocalsearchdatatypeparser.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `groupId`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Group ID                                                                                                       |