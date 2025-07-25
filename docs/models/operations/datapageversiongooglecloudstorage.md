# DataPageVersionGoogleCloudStorage

Serialization format of data pages. Note that some reader implementations use Data page V2's attributes to work more efficiently, while others ignore it.

## Example Usage

```typescript
import { DataPageVersionGoogleCloudStorage } from "cribl-control-plane/models/operations";

let value: DataPageVersionGoogleCloudStorage = "DATA_PAGE_V2";
```

## Values

```typescript
"DATA_PAGE_V1" | "DATA_PAGE_V2"
```