# DataPageVersionSecurityLake

Serialization format of data pages. Note that some reader implementations use Data page V2's attributes to work more efficiently, while others ignore it.

## Example Usage

```typescript
import { DataPageVersionSecurityLake } from "cribl-control-plane/models";

let value: DataPageVersionSecurityLake = "DATA_PAGE_V2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DATA_PAGE_V1" | "DATA_PAGE_V2" | Unrecognized<string>
```