# OutputCloudflareR2DataPageVersion

Serialization format of data pages. Note that some reader implementations use Data page V2's attributes to work more efficiently, while others ignore it.

## Example Usage

```typescript
import { OutputCloudflareR2DataPageVersion } from "cribl-control-plane/models";

let value: OutputCloudflareR2DataPageVersion = "DATA_PAGE_V1";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DATA_PAGE_V1" | "DATA_PAGE_V2" | Unrecognized<string>
```