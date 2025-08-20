# GetConfigGroupAclTeamsByProductAndIdType

Filter for limiting the response to ACL entries for the specified RBAC resource type.

## Example Usage

```typescript
import { GetConfigGroupAclTeamsByProductAndIdType } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclTeamsByProductAndIdType = "dashboards";
```

## Values

```typescript
"groups" | "datasets" | "dataset-providers" | "projects" | "dashboards" | "macros" | "notebooks" | "insights"
```