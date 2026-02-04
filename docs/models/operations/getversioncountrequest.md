# GetVersionCountRequest

## Example Usage

```typescript
import { GetVersionCountRequest } from "cribl-control-plane/models/operations";

let value: GetVersionCountRequest = {
  commit: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `commit`                                                        | *string*                                                        | :heavy_minus_sign:                                              | The Git commit hash to use as the starting point for the count. |