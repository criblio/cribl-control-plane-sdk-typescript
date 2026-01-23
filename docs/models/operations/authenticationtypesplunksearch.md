# AuthenticationTypeSplunkSearch

Splunk Search authentication type

## Example Usage

```typescript
import { AuthenticationTypeSplunkSearch } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeSplunkSearch = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```