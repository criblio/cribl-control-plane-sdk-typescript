# OutputElasticElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { OutputElasticElasticVersion } from "cribl-control-plane/models";

let value: OutputElasticElasticVersion = "6";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```