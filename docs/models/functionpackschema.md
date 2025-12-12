# FunctionPackSchema

## Example Usage

```typescript
import { FunctionPackSchema } from "cribl-control-plane/models";

let value: FunctionPackSchema = {
  unpackedFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `unpackedFields`                                       | *string*[]                                             | :heavy_check_mark:                                     | List of fields to keep, everything else will be packed |
| `target`                                               | *string*                                               | :heavy_minus_sign:                                     | Name of the (packed) target field                      |