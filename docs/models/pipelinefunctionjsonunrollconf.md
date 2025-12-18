# PipelineFunctionJsonUnrollConf

## Example Usage

```typescript
import { PipelineFunctionJsonUnrollConf } from "cribl-control-plane/models";

let value: PipelineFunctionJsonUnrollConf = {
  path: "/usr/libdata",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Path to array to unroll, such as foo.0.bar                                                                             |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Name of each exploded array element in each new event. Leave empty to expand the array element with its original name. |