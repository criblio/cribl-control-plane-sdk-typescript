# RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestPaginationTypeResponseHeader

## Example Usage

```typescript
import {
  RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestPaginationTypeResponseHeader,
} from "cribl-control-plane/models";

let value:
  RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestPaginationTypeResponseHeader =
    {
      type: "response_header",
      attribute: [],
      maxPages: 1511.31,
    };
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"response_header"*                                                                                            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `attribute`                                                                                                    | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | Names of attributes within the response that contain next-page information                                     |
| `maxPages`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages. |