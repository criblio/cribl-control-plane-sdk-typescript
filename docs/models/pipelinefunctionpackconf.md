# PipelineFunctionPackConf

## Example Usage

```typescript
import { PipelineFunctionPackConf } from "cribl-control-plane/models";

let value: PipelineFunctionPackConf = {
  unpackedFields: [],
  target: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `unpackedFields`                                       | *string*[]                                             | :heavy_check_mark:                                     | List of fields to keep, everything else will be packed |
| `target`                                               | *string*                                               | :heavy_minus_sign:                                     | Name of the (packed) target field                      |