# SearchParameter

## Example Usage

```typescript
import { SearchParameter } from "cribl-control-plane/models";

let value: SearchParameter = {
  defaultValue: false,
  name: "<value>",
  type: "string",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `defaultValue`                                                 | *models.SearchParameterValue*                                  | :heavy_minus_sign:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | [models.SearchParameterType](../models/searchparametertype.md) | :heavy_check_mark:                                             | N/A                                                            |