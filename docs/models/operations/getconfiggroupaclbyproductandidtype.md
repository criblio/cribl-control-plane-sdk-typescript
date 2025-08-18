# GetConfigGroupAclByProductAndIdType

Filter for limiting the response to ACL entries for the specified RBAC resource type.

## Example Usage

```typescript
import { GetConfigGroupAclByProductAndIdType } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclByProductAndIdType = "dataset-providers";
```

## Values

```typescript
"groups" | "datasets" | "dataset-providers" | "projects" | "dashboards" | "macros" | "notebooks" | "insights"
```