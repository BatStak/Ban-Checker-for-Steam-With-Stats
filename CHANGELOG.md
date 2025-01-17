# v2.2.10

- fix a bug showing wrong match under a banned player when sorting. We close the last match opened.

# v2.2.9

- remove history loaded only when loading history
- fix a bug where we display "ban date" on mouseover on someone not banned

# v2.2.8

- fix order of map datas when loading history
- fix order of players banned when scanning
- fix how we get the player steamID, why the "show map data" does not appear sometimes

# v2.2.7

- performance optimizations

# v2.2.6

- add possibility to order tables
- remove `cs_` and `de_` on maps name
- performance optimizations

# v2.2.5

- performance optimizations
- add images for cache, train, cobblestone and italy maps

# v2.2.4

- remove days in last column, which was false without rescan on today
- use of date-fns to calculate the tooltip "x ago"
- update observer for performance

# v2.2.3

- update dependencies + Angular18
- fix maps datas not update when loading history
- fix maps datas not availaible when no ban

# v2.2.2

- move winrate infos to results panel
- rename "winrate" to "map datas"
- add % of matches with someone ban after in map datas

# v2.2.1

- add winrates data on history pages
- remove "close" button on "match below", use the same button to toggle
- replace link with button on "show list of players"
- reword "show list of players" with "show list of players banned"
- show list of players banned directly on load

# v2.2.0

> Important : remove red formatting and ban column of Steam matchs list. We have the scoreboard now directly below each player banned. No need to reload the page anymore. I remove the warnings about it.

- Add ban infos on mouse over for red players in all sections
- Add ban infos on mouse over on last column of results + legend text
- Add images maps for Thera, Mills, Memento, Office and Assembly
- Add Scrimmage matches
- Rename menu "Access to Matchmaking history" to "Access to Competitive history"

# v2.1.4

- Fix minimum width of map info when no image for the map.

# v2.1.3

- See match info just below the cheater

# v2.1.2

- Fix display of a warning message which has no CSS rules

# v2.1.1

- Add warnings for better understanding.

# v2.1.0

- Add the possibility to see the last match with a cheater without loading history.

# v2.0.15

- Add ratio players on people pages `X / Y players have been banned in this section.`

# v2.0.14

- Refresh avatar and name from the list of players banned if they change.

# v2.0.13

- Add disclaimer about Steam Web API Key.
- Add confirmation dialog when reseting database.
- Better UX for popin options.

# v2.0.12

- improve results on friends list.
- add red background on a friend banned.

# v2.0.11

- small UI update.
- add button to hide/show list of players banned.

# v2.0.10

- Fix a case where we don't update the ban status column for clean players.

# v2.0.9

- Add wording when ticking off the checkbox.
- Fix order of banned players being random when banned on the same day.
- Fix potentiel future issue in map name.

# v2.0.8

- Remove scrimmage supports.
- Minor fixes.

# v2.0.7

- Remove wording when not on GCPD page

# v2.0.6

- Add feature to scan players on friends page.
- Fix some bugs.

# v2.0.5

- Add feature to hide clean games in the list for performance and lisibility.

# v2.0.4

- huge performance improvements on big history

# v2.0.3

- handle deleted steam profiles

# v2.0.2

# There is now a database to keep results

> Release on Chrome and Firefox, this version is the real working 2.0.0

I recoded everything in Angular. I removed the friends/groups features and per map statistics for now. Code is way easier to maintain.

# v2.0.1

- Fix release for firefox, not release yet on Chrome.

# v2.0.0

- broken version.

# v1.2.7

- New competitive tab for CS2

# v1.2.6

- Fix link to github.
- Fix ban checkon comments/reports.

# v1.2.5

- Remove game type filter.
- Add sort feature on maps stats table.
- Add link to premier history in menu.

# v1.2.4

- Fix maps stats in Premier mode

# v1.2.3

- Add compatibility for CS2 Premium matchmaking.
- No need to reload the page after changing game filter.

# v1.2.2

- UI overhaul (better wording and spacing).

# v1.2.1

- Add group members profiles scanning.

# v1.2.0

- Add scan for friends / following profiles.

# v1.1.4

- Add button to stop scan of players.
- Improve history loading feature.
- UI overhaul for list of players banned.

# v1.1.3

- Improve history loading feature.

# v1.1.2

- Fix menu disappearing in firefox.

# v1.1.1

- Fix crashes on various pages.
