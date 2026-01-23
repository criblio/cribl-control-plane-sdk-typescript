# RestCollectMethodPostRestPaginationTypeResponseHeader

## Example Usage

```typescript
import { RestCollectMethodPostRestPaginationTypeResponseHeader } from "cribl-control-plane/models";

let value: RestCollectMethodPostRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
    "<value 2>",
  ],
  maxPages: 4573.66,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"response_header"*                                                                                            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `attribute`                                                                                                    | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | Names of attributes within the response that contain next-page information                                     |
| `maxPages`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to retrieve all pages. |