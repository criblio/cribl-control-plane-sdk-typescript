# RestAuthenticationOauthRestPaginationTypeResponseBody

## Example Usage

```typescript
import { RestAuthenticationOauthRestPaginationTypeResponseBody } from "cribl-control-plane/models";

let value: RestAuthenticationOauthRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
  ],
  maxPages: 7102.94,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                        | *"response_body"*                                                                                                                                             | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `attribute`                                                                                                                                                   | *string*[]                                                                                                                                                    | :heavy_check_mark:                                                                                                                                            | Names of attributes within the response that contain next-page information                                                                                    |
| `maxPages`                                                                                                                                                    | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages.                                                |
| `lastPageExpr`                                                                                                                                                | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | JavaScript expression used to determine when the last page has been reached. The values tested by this expression must be in the Response attributes section. |