# GetVersionDiffRequest

## Example Usage

```typescript
import { GetVersionDiffRequest } from "cribl-control-plane/models/operations";

let value: GetVersionDiffRequest = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `commit`                        | *string*                        | :heavy_minus_sign:              | Commit hash (default is HEAD)   |
| `group`                         | *string*                        | :heavy_minus_sign:              | Group ID                        |
| `filename`                      | *string*                        | :heavy_minus_sign:              | Filename                        |
| `diffLineLimit`                 | *number*                        | :heavy_minus_sign:              | Limit maximum lines in the diff |