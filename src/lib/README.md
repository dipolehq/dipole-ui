# lib/

Thin wrappers and configuration for third-party libraries (analytics, date
libs, logging, feature-flag SDKs, etc.).

Isolating vendors here means the rest of the app depends on *your* interface,
not the vendor's. Swapping or upgrading a dependency stays a local change.
