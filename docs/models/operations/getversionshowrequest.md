# GetVersionShowRequest

## Example Usage

```typescript
import { GetVersionShowRequest } from "cribl-control-plane/models/operations";

let value: GetVersionShowRequest = {
  commit: "<value>",
  groupId: "<id>",
  filename: "example.file",
  diffLineLimit: 3408.26,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `commit`                                                                                                                                  | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The Git commit hash to retrieve the diff and log message for.                                                                             |
| `groupId`                                                                                                                                 | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The <code>id</code> of the Worker Group or Edge Fleet to get the diff and log message for.                                                |
| `filename`                                                                                                                                | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The relative path of the file to get the diff and log message for.                                                                        |
| `diffLineLimit`                                                                                                                           | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the full diff, regardless of the number of lines. |