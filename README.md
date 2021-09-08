11 Design Patterns in small arcade game base on SOLID style.

PATTERNS IMPLEMENTATION:

ABSTRACT FACTORY:

In simple words, abstract factory is abstraction for factories management

/////////////////////////////////////////////////////////////////////////////////

SOLID IMPLEMENTATION:

S - Single Responsibility Principle

The object should be responsible for only one case, because if it is responsible for two or more cases, it will have to be changed more often than we would like.

example of classes - (base class, absctract fabrics, bridge - all the realisation of SPR)

O - Open-Closed Principle

open for extension, but closed for modification.

Example:
if we want to write more bots(actions/forms/types)/levels/bosses, or we want adding the bots interact with items,
we don't need to change base classes, we need just to expand it adding both items and decorators, and we don't need to modify checking the collision between bots and items.

L = Liskov Substituion Principle

-   the behavior in the following classes must not conflict with the behavior of the base classes
    In simple words, children should never override methods passed to them by their parent.

Example:
our

I = Interface Segregation Principle

-   Entities should not depend on interfaces they do not use.

The main goal of the principle is to free clients from implementing methods that they don't need. This often requires splitting up interfaces, but this is not an end in itself, but only a tool.

D = Dependency Inversion Principle

-   The Dependency Inversion Principle (DIP) states that high level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.

In simple words, the interaction of classes should implements through abstraction...

Example: the hero interaction with bots/items through the mediator:
src\classes\collisionChecker.js
