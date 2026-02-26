# CreateOutputDataSetSite

DataSet site to which events should be sent

## Example Usage

```typescript
import { CreateOutputDataSetSite } from "cribl-control-plane/models/operations";

let value: CreateOutputDataSetSite = "eu";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"us" | "eu" | "custom" | Unrecognized<string>
```