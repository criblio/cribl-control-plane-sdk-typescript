# ElasticVersion

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { ElasticVersion } from "cribl-control-plane/models/operations";

let value: ElasticVersion = "7";
```

## Values

```typescript
"auto" | "6" | "7"
```