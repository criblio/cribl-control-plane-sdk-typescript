# FunctionConfSchemaPack

## Example Usage

```typescript
import { FunctionConfSchemaPack } from "cribl-control-plane/models";

let value: FunctionConfSchemaPack = {
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
| `unpackedFields`                                       | *string*[]                                             | :heavy_minus_sign:                                     | List of fields to keep, everything else will be packed |
| `target`                                               | *string*                                               | :heavy_minus_sign:                                     | Name of the (packed) target field                      |