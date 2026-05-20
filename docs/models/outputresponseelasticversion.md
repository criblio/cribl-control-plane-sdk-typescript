# OutputResponseElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { OutputResponseElasticVersion } from "cribl-control-plane/models";

let value: OutputResponseElasticVersion = "auto";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```