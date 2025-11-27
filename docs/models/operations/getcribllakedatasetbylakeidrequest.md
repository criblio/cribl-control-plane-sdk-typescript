# GetCriblLakeDatasetByLakeIdRequest

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdRequest } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdRequest = {
  lakeId: "<id>",
  storageLocationId: "<id>",
  format: "<value>",
  excludeDDSS: "<value>",
  excludeDeleted: "<value>",
  excludeInternal: "<value>",
  excludeBYOS: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `lakeId`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The <code>id</code> of the Lake that contains the Lake Datasets to list.                                            |
| `storageLocationId`                                                                                                 | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query string false Filter datasets by storage location ID. Use <code>default</code> for default storage location.   |
| `format`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query string false Filter datasets by format. Set to <code>ddss</code> to return only DDSS datasets.                |
| `excludeDDSS`                                                                                                       | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query boolean false Exclude DDSS format datasets from the response.                                                 |
| `excludeDeleted`                                                                                                    | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query boolean false Exclude deleted datasets from the response.                                                     |
| `excludeInternal`                                                                                                   | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query boolean false Exclude internal datasets (those with IDs starting with <code>cribl_</code>) from the response. |
| `excludeBYOS`                                                                                                       | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | query boolean false Exclude BYOS (Bring Your Own Storage) datasets from the response.                               |