= Murdock =

An XMPP client written in nodejs. Provides message routing for
plugins/acts as an interface to many "mini" applications.

It is the "dock" for "Murdules", which is a fucking shameworthy pun.

== Setup ==

1) install node-xmpp https://github.com/astro/node-xmpp
2) run play.js

Marvel at the super trivial state.

== Status ==

Notional!

== The Name ==
see: http://en.wikipedia.org/wiki/William\_Murdoch

William Murdock was a scottish inventor who live from 1854 to 1839. One
of his many inventions was the pnuematic tube system.

== Things to Do ==

Many! First off, figure out what needs to be done.

So here's what I would like to have happen. Murdock exists as a contact
in my jabber thing. Every now and then it sends me a message to initiate
a session, or I send one to do so. 

Murdock needs to identify which Murdule I am interacting with and needs
to provide a means by which I as user can force a change.

All messages for the active "session" get routed to the correct Murdule.

I want to do session-based routing so that I don't need to prefix every
message with some kind of Murdule identifier.

To achieve this, the first thing that happens is Murdule needs an
account on a jabber server somewhere. I've got a few test gtalk accounts
floating around somewhere I will use to start. It will register with the
server and respond to events.

The first event it needs to respond to is being added to another user's
contact list which. I guess there should probably be some kind of
administration Murdule that deals with XMPP behaviour, there's no reason
for those sorts of messages to live outside a plugin. Probably?

Then it just needs to echo messages back. That is like, version 0.1:

* authenticates against server
* router established
* routes XMPP messages to XMPP Murdule
* XMPP Murdule deals with roster stuff
** automatically approves being added to roster
** automatically adds same user to own roster
* Echo Murdule echos any message sent.
