# RestAuthenticationBasicSecretRestPaginationTypeResponseHeader

## Example Usage

```typescript
import { RestAuthenticationBasicSecretRestPaginationTypeResponseHeader } from "cribl-control-plane/models";

let value: RestAuthenticationBasicSecretRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: "<value>",
  maxPages: 1068.32,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"response_header"*                                                                                            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `attribute`                                                                                                    | *models.RestAuthenticationBasicSecretRestPaginationTypeResponseHeaderResponseAttributes*                       | :heavy_check_mark:                                                                                             | Names of attributes within the response that contain next-page information                                     |
| `maxPages`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages. |