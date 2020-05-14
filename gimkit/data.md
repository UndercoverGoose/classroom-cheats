# Attempt at breaking the kit Id that is breaking Gimkit cheats.
### Why is this a problem?
Because every Gimkit Cheat out there relies on the Kit ID to grab the answers to the questions

## Kit ID Sections:
Format: type - X Characters - Desc (??? - Unknown)
- dynamic (mostly const) - 5 Character - ???
- dynamic - 9 Characters - ???
    - dynamic (seems to be a pattern in some kits) - 1 Character - ???
    - dynamic (rest of the 9) - 8 Character - ???
- const - 4 Character (0022) - Split
- dynamic - 6 Character - ???
Example: 5e973 - 5 - 5278b393 - 0022 - bc1c23

## Kit IDs:

### Number 1:
ID | Split ID | Split ID (Decimal) | Notes
-- | -------- | ------------------ | -----
5e97355278b3930022bc1c23 | 5e973 - 5 - 5278b393 - 0022 - bc1c23 | 387443 - 5 - 1383642003 - 34 - 12327971 | Kit ID
5e973c842b020e0022885ea8 | 5e973 - c - 842b020e - 0022 - 885ea8 | 387443 - 12 - 2217411086 - 34 - 8937128 |
5e973c81c28a3e0022ff6402 | 5e973 - c - 81c28a3e - 0022 - ff6402 | 387443 - 12 - 2177010238 - 34 - 16737282 |
5e973bd9319bb20022d9a3a5 | 5e973 - b - d9319bb2 - 0022 - d9a3a5 | 387443 - 11 - 3643906994 - 34 - 14263205 |
5e973bd3b3359500223c146c | 5e973 - b - d3b33595 - 0022 - 3c146c | 387443 - 11 - 3551737237 - 34 - 3937388 |
5e973b61319bb20022d9a200 | 5e973 - b - 61319bb2 - 0022 - d9a200 | 387443 - 11 - 1630641074 - 34 - 14262784 |
5e973b002b020e0022885cda | 5e973 - b - 002b020e - 0022 - 885cda | 387443 - 11 - 2818574 - 34 - 8936666 |
5e973a6bb3359500223c132b | 5e973 - a - 6bb33595 - 0022 - 3c132b | 387443 - 10 - 1806906773 - 34 - 3937067 |
5e973a597ad22800226e0de1 | 5e973 - a - 597ad228 - 0022 - 6e0de1 | 387443 - 10 - 1501221416 - 34 - 7212513 |
5e973a4078b3930022bc2300 | 5e973 - a - 4078b393 - 0022 - bc2300 | 387443 - 10 - 1081652115 - 34 - 12329728 | Lowest Valued
5e973a372b020e0022885c4f | 5e973 - a - 372b020e - 0022 - 885c4f | 387443 - 10 - 925565454 - 34 - 8936527 |

### Number 2:
ID | Split ID | Split ID (Decimal) | Notes
-- | -------- | ------------------ | -----
5d977bd35ce07c00226385d5 | 5d977 - b - d35ce07c - 0022 - 6385d5 | 383351 - 11 - 3546079356 - 34 - 6522325 | Kit ID
5d9781144c8f650022df1e7d | 5d978 - 1 - 144c8f65 - 0022 - df1e7d | 383352 - 1 - 340561765 - 34 - 14622333 |
5d9780a54244820022dd006c | 5d978 - 0 - a5424482 - 0022 - dd006c | 383352 - 0 - 2772583554 - 34 - 14483564 |
5d9780d105b4090022866e40 | 5d978 - 0 - d105b409 - 0022 - 866e40 | 383352 - 0 - 3506811913 - 34 - 8810048 |
5d977f9705b4090022866cc0 | 5d977 - f - 9705b409 - 0022 - 866cc0 | 383351 - 15 - 2533733385 - 34 - 8809664 |
5d978019827d4800228c9e25 | 5d978 - 0 - 19827d48 - 0022 - 8c9e25 | 383352 - 0 - 427982152 - 34 - 9215525 |
5d977cda5ce07c00226389dd | 5d977 - c - da5ce07c - 0022 - 6389dd | 383351 - 12 - 3663519868 - 34 - 6523357 |
5d977c3f5ce07c0022638802 | 5d977 - c - 3f5ce07c - 0022 - 638802 | 383351 - 12 - 1063051388 - 34 - 6522882 | Lowest Valued

### Number 3: (Works with current method)
ID | Notes
-- | -----
5bd0dbd2cfa2550022687654 | Kit ID
5bd0dbd2cfa2550022687673 |
5bd0dbd2cfa2550022687669 |
5bd0dbd2cfa2550022687664 |
5bd0dbd2cfa255002268766e |
5bd0dbd2cfa255002268765a |
5bd0dbd2cfa255002268767d |
5bd0dbd2cfa2550022687682 |
5bd0dbd2cfa2550022687678 |
5bd0dbd2cfa255002268765f |
5bd0dbd2cfa2550022687655 | Lowest Valued
Known example works by getting the lowest valued question id and subtracting 1.

## Problems:
- Kit IDs are seemingly random, sometimes most of the hex will be the same between IDs, and sometimes it isnt.
    - Potentially the IDs are different _(example kits - 1 & 2)_ due to the kit being edited.
