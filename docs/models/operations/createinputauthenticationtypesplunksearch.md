# CreateInputAuthenticationTypeSplunkSearch

Splunk Search authentication type

## Example Usage

```typescript
import { CreateInputAuthenticationTypeSplunkSearch } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationTypeSplunkSearch = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```