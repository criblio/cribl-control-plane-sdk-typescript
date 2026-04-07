# RestAuthenticationOauthRestPaginationTypeResponseHeader

## Example Usage

```typescript
import { RestAuthenticationOauthRestPaginationTypeResponseHeader } from "cribl-control-plane/models";

let value: RestAuthenticationOauthRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: "<value>",
  maxPages: 9123.91,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"response_header"*                                                                                            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `attribute`                                                                                                    | *models.RestAuthenticationOauthRestPaginationTypeResponseHeaderResponseAttributes*                             | :heavy_check_mark:                                                                                             | Names of attributes within the response that contain next-page information                                     |
| `maxPages`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages. |