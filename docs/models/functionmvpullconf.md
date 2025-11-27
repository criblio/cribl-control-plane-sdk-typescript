# FunctionMvPullConf

## Example Usage

```typescript
import { FunctionMvPullConf } from "cribl-control-plane/models";

let value: FunctionMvPullConf = {
  arrayPath: "<value>",
  relativeKeyPath: "<value>",
  relativeValuePath: "<value>",
  targetBagPath: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `arrayPath`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Field name of the array within events that contains the data objects of interest. Can be a path.                             |
| `relativeKeyPath`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Extract the K-V pair's key from this field, relative to the data object.                                                     |
| `relativeValuePath`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Extract the K-V pair's value from this field, relative to the data object.                                                   |
| `targetBagPath`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Optionally, specify a bag as the target for K-V entries. If not specified, these entries are stored on each top-level event. |
| `deleteOriginal`                                                                                                             | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Toggle this on to remove each original array of data objects after extraction. If toggled off, arrays are retained.          |