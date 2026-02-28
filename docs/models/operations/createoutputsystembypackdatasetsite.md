# CreateOutputSystemByPackDataSetSite

DataSet site to which events should be sent

## Example Usage

```typescript
import { CreateOutputSystemByPackDataSetSite } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackDataSetSite = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"us" | "eu" | "custom" | Unrecognized<string>
```