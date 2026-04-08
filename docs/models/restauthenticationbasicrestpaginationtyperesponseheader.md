# RestAuthenticationBasicRestPaginationTypeResponseHeader

## Example Usage

```typescript
import { RestAuthenticationBasicRestPaginationTypeResponseHeader } from "cribl-control-plane/models";

let value: RestAuthenticationBasicRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxPages: 877.76,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"response_header"*                                                                                            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `attribute`                                                                                                    | *models.RestAuthenticationBasicRestPaginationTypeResponseHeaderResponseAttributes*                             | :heavy_check_mark:                                                                                             | Names of attributes within the response that contain next-page information                                     |
| `maxPages`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages. |