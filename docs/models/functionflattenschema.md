# FunctionFlattenSchema

## Example Usage

```typescript
import { FunctionFlattenSchema } from "cribl-control-plane/models";

let value: FunctionFlattenSchema = {
  fields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                                        | *string*[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                              | List of top-level fields to include for flattening. Supports * wildcards, except when used on internal fields. Defaults to empty array, which means all fields. |
| `prefix`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Prefix string for flattened field names. Defaults to empty.                                                                                                     |
| `depth`                                                                                                                                                         | *number*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Number representing the nested levels to consider for flattening. Defaults to 5. Minimum should be 1.                                                           |
| `delimiter`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Delimiter to be used for flattening. Defaults to underscore.                                                                                                    |