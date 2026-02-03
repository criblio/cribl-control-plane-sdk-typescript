# GetVersionDiffRequest

## Example Usage

```typescript
import { GetVersionDiffRequest } from "cribl-control-plane/models/operations";

let value: GetVersionDiffRequest = {
  commit: "<value>",
  filename: "example.file",
  diffLineLimit: 811859,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `commit`                                                                                                                                  | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The Git commit hash to get the diff for.                                                                                                  |
| `filename`                                                                                                                                | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The relative path of the file to get the diff for.                                                                                        |
| `diffLineLimit`                                                                                                                           | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the full diff, regardless of the number of lines. |