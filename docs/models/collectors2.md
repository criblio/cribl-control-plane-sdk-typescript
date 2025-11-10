# Collectors2

## Example Usage

```typescript
import { Collectors2 } from "cribl-control-plane/models";

let value: Collectors2 = {
  hostsfile: {},
  interfaces: {},
  disk: {},
  metadata: {},
  routes: {},
  dns: {},
  user: {},
  firewall: {},
  services: {},
  ports: {},
  loginUsers: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hostsfile`                                                              | [models.HostsFile2](../models/hostsfile2.md)                             | :heavy_minus_sign:                                                       | Creates events based on entries collected from the hosts file            |
| `interfaces`                                                             | [models.Interfaces2](../models/interfaces2.md)                           | :heavy_minus_sign:                                                       | Creates events for each of the host’s network interfaces                 |
| `disk`                                                                   | [models.DisksAndFileSystems2](../models/disksandfilesystems2.md)         | :heavy_minus_sign:                                                       | Creates events for physical disks, partitions, and file systems          |
| `metadata`                                                               | [models.HostInfo2](../models/hostinfo2.md)                               | :heavy_minus_sign:                                                       | Creates events based on the host system’s current state                  |
| `routes`                                                                 | [models.InputSystemStateRoutes2](../models/inputsystemstateroutes2.md)   | :heavy_minus_sign:                                                       | Creates events based on entries collected from the host’s network routes |
| `dns`                                                                    | [models.Dns2](../models/dns2.md)                                         | :heavy_minus_sign:                                                       | Creates events for DNS resolvers and search entries                      |
| `user`                                                                   | [models.UsersAndGroups2](../models/usersandgroups2.md)                   | :heavy_minus_sign:                                                       | Creates events for local users and groups                                |
| `firewall`                                                               | [models.Firewall2](../models/firewall2.md)                               | :heavy_minus_sign:                                                       | Creates events for Firewall rules entries                                |
| `services`                                                               | [models.Services2](../models/services2.md)                               | :heavy_minus_sign:                                                       | Creates events from the list of services                                 |
| `ports`                                                                  | [models.ListeningPorts2](../models/listeningports2.md)                   | :heavy_minus_sign:                                                       | Creates events from list of listening ports                              |
| `loginUsers`                                                             | [models.LoggedInUsers2](../models/loggedinusers2.md)                     | :heavy_minus_sign:                                                       | Creates events from list of logged-in users                              |