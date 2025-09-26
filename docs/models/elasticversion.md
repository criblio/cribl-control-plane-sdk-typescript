# ElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { ElasticVersion } from "cribl-control-plane/models";

let value: ElasticVersion = "7";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```