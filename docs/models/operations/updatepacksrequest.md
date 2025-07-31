# UpdatePacksRequest

## Example Usage

```typescript
import { UpdatePacksRequest } from "cribl-control-plane/models/operations";

// No examples available for this model
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `filename`                               | *string*                                 | :heavy_minus_sign:                       | the file to upload                       |
| `size`                                   | *number*                                 | :heavy_check_mark:                       | Size of the pack file in bytes           |
| `requestBody`                            | *ReadableStream<Uint8Array>*             | :heavy_check_mark:                       | Gzip-compressed payload of the pack file |