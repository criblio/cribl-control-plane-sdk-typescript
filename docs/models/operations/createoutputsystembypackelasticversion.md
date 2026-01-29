# CreateOutputSystemByPackElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { CreateOutputSystemByPackElasticVersion } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackElasticVersion = "7";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```