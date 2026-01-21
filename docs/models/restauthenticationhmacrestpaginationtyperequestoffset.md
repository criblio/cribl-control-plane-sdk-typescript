# RestAuthenticationHmacRestPaginationTypeRequestOffset

## Example Usage

```typescript
import { RestAuthenticationHmacRestPaginationTypeRequestOffset } from "cribl-control-plane/models";

let value: RestAuthenticationHmacRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 8482.88,
  limitField: "<value>",
  limit: 447.69,
  totalRecordField: "<value>",
  maxPages: 7692.14,
  zeroIndexed: false,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | *"request_offset"*                                                                                                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `offsetField`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Query string parameter that sets the index from which to begin returning records. Example: /api/v1/query?term=cribl&limit=100&offset=0 |
| `offset`                                                                                                                               | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Offset index from which to start request. Defaults to undefined, which will start collection from the first record.                    |
| `limitField`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Query string parameter that sets the number of records retrieved per request. Example: /api/v1/query?term=cribl&limit=100&offset=0     |
| `limit`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Maximum number of records to collect per request                                                                                       |
| `totalRecordField`                                                                                                                     | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Name of the attribute in the response that contains the total number of records for the query                                          |
| `maxPages`                                                                                                                             | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages.                         |
| `zeroIndexed`                                                                                                                          | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | Enable to indicate that the first page in the requested data is at index 0. Disabled by default, which indicates index 1.              |