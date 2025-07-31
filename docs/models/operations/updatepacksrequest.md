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
| `requestBody`                            | *ReadableStream<Uint8Array>*             | :heavy_check_mark:                       | Gzip-compressed payload of the pack file |