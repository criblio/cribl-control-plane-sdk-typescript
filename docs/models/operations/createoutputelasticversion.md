# CreateOutputElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { CreateOutputElasticVersion } from "cribl-control-plane/models/operations";

let value: CreateOutputElasticVersion = "7";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```