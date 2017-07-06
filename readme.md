# Chromonodes

## Totally Custom Code
I might need to write everything myself. This sucks because FabricJS does a lot
of what I want, but it isn't catching touch events well. That's a major issue.
The following is a list of possible classes that I'll need to write:

- Circle                the "nodes" of Chromonodes
- Line                  lines drawn between nearby nodes
- Renderer              just looks at state and draws things
- Selector              takes coords from mouse/touch event and determines if a circle was clicked
- Color Picker          changes user's color (do after basic stuff is up and running?)
- Mode                  add, move, remove "modes" for manipulating nodes
- State                 kind of?
- SocketManager         sends/receives info from socketIO and updates state of non-current-user nodes
