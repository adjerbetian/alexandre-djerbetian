import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { cpp } from "../utils";

export const chapters = [
    "Foreword",
    "Introduction",
    "A Case Study: Designing a Document Editor",
    "Creational Patterns",
    "Structural Patterns",
    "Behavioral Patterns",
    "Conclusion"
];

export const quotes: QuoteDBModel[] = [
    {
        id: "design-patterns-p11",
        chapter: 1,
        page: "11",
        content: `
            <p>
                <strong>[O]bject-oriented designs often end up with classes that
                have no counterparts in the real world.</strong> Some of these 
                are low-level classes like arrays. Others are much higher-level. 
                For example, the Composite pattern introduces an abstraction for 
                treating objects uniformly that doesn't have a physical 
                counterpart. <strong>Strict modeling of the real world leads to 
                a system that reflects today's realities but not necessarily 
                tomorrow's.</strong>
            </p>
        `,
        tags: [
            quoteTags.Pattern,
            quoteTags.Comparison,
            quoteTags.OO,
            quoteTags.Abstraction
        ],
        rating: 3
    },
    {
        id: "design-patterns-p16",
        chapter: 1,
        page: "16",
        content: `
            <h3>Class versus Interface Inheritance</h3>
            <p>
                It's important to understand the difference between an
                object's <i>class</i> and its <i>type</i>.
            </p>
            <p>
                <strong>An object's class defines how the object is 
                implemented.</strong> The class defines the object's internal 
                state and the implementation of its operations. In contrast,
                <strong>an object's type only refers to its interface—the set of
                requests to which it can respond.</strong> An object can have 
                many types, and objects of different classes can have the same type.
            </p>
            <p>
                [...] <strong>It's also important to understand the difference 
                between class inheritance and interface inheritance (or 
                subtyping).</strong> Class inheritance defines an object's 
                implementation in terms of another object's implementation. In 
                short, it's a mechanism for code and representation sharing. In 
                contrast, interface inheritance (orsubtyping) describes when an 
                object can be used in place of another.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Definition],
        rating: 3
    },
    {
        id: "design-patterns-p17",
        chapter: 1,
        page: "17",
        content: `
            <h3>Programming to an Interface, not an Implementation</h3>
            <p>
                [...] There are two benefits to manipulating objects solely in
                terms of the interface defined by abstract classes:
            </p>
            <ul>
                <li>
                    Clients remain unaware of the specific types of objects
                    they use, as long as the objects adhere to the interface
                    that clients expect.
                </li>
                <li>
                    Clients remain unaware of the classes that implement
                    these objects. Clients only know about the abstract
                    class(es) defining the interface.
                </li>
            </ul>
            <p>
                This so greatly reduces implementation dependencies between
                subsystems that it leads to the following principle of
                reusable object-oriented design:
            </p>
            ${tip(`
                <strong>Program to an interface, not an implementation.</strong>
            `)}
            <p>
                Don't declare variables to be instances of particular
                concrete classes. Instead, commit only to an interface
                defined by an abstract class. You will find this to be a
                common theme of the design patterns in this book.
            </p>
            <p>
                You have to instantiate concrete classes (that is, specify a
                particular implementation) somewhere in your system, of
                course, and the creational patterns (AbstractFactory,
                Builder, FactoryMethod, Prototype, and Singleton) let you do
                just that. By abstracting the process of object creation,
                these patterns give you different ways to associate an
                interface with its implementation transparently at
                instantiation. <strong>Creational patterns ensure that your 
                system is written in terms of interfaces, not 
                implementations.</strong>
            </p>
        `,
        tags: [
            quoteTags.OO,
            quoteTags.Structure,
            quoteTags.Pattern,
            quoteTags.Abstraction
        ],
        rating: 4
    },
    {
        id: "design-patterns-p18",
        chapter: 1,
        page: "18",
        content: `
            <h3>Inheritance versus Composition</h3>
            <p>
                The two most common techniques for reusing functionality in
                object-oriented systems are class inheritance and
                <b>object composition</b>. [...] Reuse by subclassing is
                often referred to as <b>white-box reuse</b> [...]: With
                inheritance, the internals of parent classes are often
                visible to subclasses.
            </p>
            <p>
                Object composition is an alternative to class inheritance.
                [...] This style of reuse is called <b>black-box reuse</b>,
                because no internal details of objects are visible. [...]
            </p>
            <p>
                Inheritance and composition each have their advantages and
                disadvantages. Class inheritance is defined statically at
                compile-time and is straightforward to use[...]. Class
                inheritance also makes it easier to modify the
                implementation being reused. [...]
            </p>
            <p>
                But class inheritance has some disadvantages, too. First,
                <strong>you can't change the implementations inherited from
                parent classes at run-time, because inheritance is defined 
                at compile-time</strong>. Second, and generally worse,
                <strong>parent classes often define at least part of their
                subclasses' physical representation</strong>. Because 
                inheritance exposes a subclass to details of its parent's 
                implementation, it's often said that <strong>"inheritance 
                breaks encapsulation"</strong>. The implementation of a 
                subclass becomes so bound up with the implementation of its 
                parent class that any change in the parent's implementation 
                will force the subclass to change.
            </p>
            <p>
                Implementation dependencies can cause problems when you're
                trying to reuse a subclass. Should any aspect of the
                inherited implementation not be appropriate for new problem
                domains, the parent class must be rewritten or replaced by
                something more appropriate. This dependency limits flexibility 
                and ultimately reusability. <strong>One cure for this is to 
                inherit only from abstract classes, since they usually provide 
                little or no implementation.</strong>
            </p>
            <p>
                Object composition is defined dynamically at run-time
                through objects acquiring references to other objects.
                Composition requires objects to respect each others'
                interfaces, which in turn requires carefully designed
                interfaces that don't stop you from using one object with
                many others. But there is a payoff. <strong>Because objects 
                are accessed solely through their interfaces, we don't break 
                encapsulation.</strong> Any object can be replaced at run-time 
                by another as long as it has the same type. Moreover, because 
                an object's implementation will be written in terms of object
                interfaces, there are substantially fewer implementation
                dependencies.
            </p>
            <p>
                Object composition has another effect on system design.
                <strong>Favoring object composition over class inheritance 
                helps you keep each class encapsulated and focused on one
                task.</strong> Your classes and class hierarchies will remain 
                small and will be less likely to grow into unmanageable 
                monsters. On the other hand, a design based on object 
                composition will have more objects (if fewer classes), and the 
                system's behavior will depend on their interrelationships 
                instead of being defined in one class.
            </p>
            <p>
                That leads us to our second principle of object-oriented
                design:
            </p>
            ${tip(`
                <strong>Favor object composition over class inheritance.</strong>
            `)}
            <p>
                <strong>Ideally, you shouldn't have to create new components to
                achieve reuse. You should be able to get all the functionality 
                you need just by assembling existing components through object 
                composition.</strong> But this is rarely the case, because the 
                set of available components is never quite rich enough in 
                practice. Reuse by inheritance makes it easier to make new 
                components that can be composed with old ones. Inheritance and 
                object composition thus work together.
            </p>
            <p>
                Nevertheless, <strong>our experience is that designers overuse 
                inheritance as a reuse technique, and designs are often made 
                more reusable (and simpler) by depending more on object 
                composition</strong>. You'll see object composition applied 
                again and again in the design patterns.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Definition, quoteTags.Structure],
        rating: 2
    },
    {
        id: "design-patterns-p20",
        chapter: 1,
        page: "20",
        content: `
            ${tip(`
                <strong>Favor object composition over class inheritance.</strong>
            `)}
            <p>
                [...] <strong>our experience is that designers overuse 
                inheritance as a reuse technique, and designs are often made 
                more reusable (and simpler) by depending more on object
                composition.</strong>
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Structure, quoteTags.CodingHabits],
        rating: 4
    },
    {
        id: "design-patterns-p20-bis",
        chapter: 1,
        page: "20",
        content: `
            <p>
                Delegation is a way of making composition as powerful for
                reuse as inheritance. In delegation, <i>two</i> objects are 
                involved in handling a request: a receiving object delegates 
                operations to its <b>delegate</b>. This is analogous to 
                subclasses deferring requests to parent classes. [...]
            </p>
            <p>
                For example, instead of making class Window a subclass of
                Rectangle (because windows happen to be rectangular), the
                Window class might reuse the behavior of Rectangle by
                keeping a Rectangle instance variable and <i>delegating</i>
                Rectangle-specific behavior to it. In other words, instead
                of a Window <i>being</i> a Rectangle, it would <i>have</i> a
                Rectangle. Window must now forward requests to its Rectangle
                instance explicitly, whereas before it would have inherited 
                those operations.
            </p>
            <p>
                Delegation has a disadvantage it shares with other
                techniques that make software more flexible through object
                composition: <strong>Dynamic, highly parameterized software 
                is harder to understand than more static software</strong>. 
                There are also run-time inefficiencies, but the human
                inefficiencies are more important in the long run.
                <strong>Delegation is a good design choice only when it
                simplifies more than it complicates.</strong> It isn't easy 
                to give rules that tell you exactly when to use delegation, 
                because how effective it will be depends on the context and 
                on how much experience you have with it. Delegation works best 
                when it's used in highly stylized ways—that is, in standard 
                patterns.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Definition],
        rating: 4
    },
    {
        id: "design-patterns-p44",
        chapter: 2,
        page: "44",
        content: `
            <p>
                We could add a border to Composition by subclassing it to
                yield a BorderedComposition class. Or we could add a
                scrolling interface in the same way to yield a
                ScrollableComposition. If we want both scroll bars and a
                border, we might produce a BorderedScrollableComposition,
                and so forth. In the extreme, we end up with a class for
                every possible combination of embellishments, a solution
                that quickly becomes unworkable as the variety of
                embellishments grows.
            </p>
            <p>
                Object composition offers a potentially more workable and
                flexible extension mechanism. But what objects do we
                compose? Since we know we're embellishing an existing glyph,
                we could make the embellishment itself an object (say, an
                instance of class <b>Border</b>). That gives us two
                candidates for composition, the glyph and the border. The
                next step is to decide who composes whom. We could have the
                border contain the glyph, which makes sense given that the
                border will surround the glyph on the screen. Or we could do
                the opposite—put the border into the glyph—but then we must
                make modifications to the corresponding Glyph subclass to
                make it aware of the border. Our first choice, composing the
                glyph in the border, keeps the border-drawing code entirely
                in the Border class, leaving other classes alone.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Pattern, quoteTags.Structure],
        rating: 3
    },
    {
        id: "design-patterns-p44-bis",
        chapter: 2,
        page: "44",
        content: `
            <p>
                The Singleton pattern is an improvement over global variables.
                It avoids polluting the name space with global variables that
                store sole instances.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Pattern, quoteTags.Definition],
        rating: 3
    },
    {
        id: "design-patterns-p44-ter",
        chapter: 2,
        page: "44",
        content: `
            <p>
                Designs that use Abstract Factory, Prototype, or Builder are
                even more flexible than those that use Factory Method, but
                they're also more complex. Often, designs start out using
                Factory Method and evolve toward the other creational patterns
                as the designer discovers where more flexibility is needed.
                <strong>Knowing many design patterns gives you more choices 
                when trading off one design criterion against another.</strong>
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Pattern, quoteTags.Structure],
        rating: 2
    },
    {
        id: "design-patterns-p328",
        chapter: 5,
        page: "328",
        content: `
            <p>
                <strong>Template methods lead to an inverted control structure
                that's sometimes referred to as "the Hollywood principle," that 
                is, "Don't call us, we'll call you".</strong> This refers to 
                how a parent class calls the operations of a subclass and not 
                the other way around.
            </p>
            <p>
                Template methods call the following kinds of operations:
            </p>
            <ul>
                <li>
                    concrete operations (either on the ConcreteClass or on
                    client classes);
                </li>
                <li>[...]</li>
                <li>
                    <b>hook operations</b>, which provide default behavior
                    that subclasses can extend if necessary. A hook
                    operation often does nothing by default.
                </li>
            </ul>
            <p>
                It's important for template methods to specify which
                operations are hooks (<i>may</i> be overridden) and which
                are abstract operations (<i>must</i> be overridden).
            </p>
            <p>
                [...] You can identify the operations that should be overridden 
                by adding a prefix to their names. For example, the MacApp
                framework for Macintosh applications prefixes template
                method names with "Do-": "DoCreateDocument", "DoRead", and
                so forth.
            </p>
        `,
        tags: [quoteTags.OO, quoteTags.Pattern, quoteTags.Definition],
        rating: 3
    },
    {
        chapter: 6,
        page: "338",
        id: "design-patterns-p338",
        content: `
            <h3>Visitor</h3>
            ${cpp(`
                class Visitor {
                public:
                        virtual void VisitElementA(ElementA*);
                        virtual void VisitElementB(ElementB*);

                        // and so on for other concrete elements
                protected:
                    Visitor();
                };

                class Element {
                public:
                    virtual ~Element();
                    virtual void Accept(Visitors) = 0;
                protected:
                    Element();
                };

                class ElementA : public Element {
                public:
                    ElementA();
                    virtual void Accept(Visitor& v) { v.VisitElementA(this); }
                };

                class ElementB : public Element {
                public:
                    ElementB();
                    virtual void Accept(Visitors v) { v.VisitElementB(this); }
                };
            `)}
            <p>
                Effectively, the Visitor pattern lets you add operations to
                classes without changing them. <strong>Visitor achieves this 
                by using a technique called <b>double-dispatch</b>.</strong>
                It's a well-known technique. [...]
            </p>
            <p>
                In single-dispatch languages, two criteria determine which
                operation will fulfill a request: the name of the request
                and the type of receiver. For example, the operation that a
                GenerateCode request will call depends on the type of node
                object you ask. In C++, calling <code>GenerateCode</code> on
                an instance of <code>VariableRefNodev</code> will call
                <code>VariableRefNode::GenerateCode</code> (which generates
                code for a variable reference). Calling
                <code>GenerateCode</code> on an <code>AssignmentNode</code>
                will call <code>AssignmentNode::GenerateCode</code> (which
                will generate code for an assignment). <strong>The operation 
                that gets executed depend s both on the kind of request and 
                the type of the receiver.</strong>
            </p>
            <p>
                <strong>"Double-dispatch" simply means the operation that gets
                executed depends on the kind of request and the types of
                <i>two</i> receivers.</strong> <code>Accept</code> is a 
                double-dispatch operation. Its meaning depends on two types: 
                the Visitor's and the Element's. Double-dispatching lets 
                visitors request different operations on each class of element.
            </p>
            <p>
                <strong>This is the key to the Visitor pattern: The operation
                that gets executed depends on both the type of Visitor and the 
                type of Element it visits.</strong> Instead of binding 
                operations statically into the Element interface, you can 
                consolidate the operations in a Visitor and use 
                <code>Accept</code> to do the binding at run-time. Extending 
                the Element interface amounts to defining one new Visitor 
                subclass rather than many new Element subclasses.
            </p>
        `,
        tags: [
            quoteTags.OO,
            quoteTags.Pattern,
            quoteTags.Definition,
            quoteTags.Code
        ],
        rating: 3
    },
    {
        id: "design-patterns-p351",
        chapter: 6,
        page: "351",
        content: `
            <p>
                <strong>Cataloging design patterns is important.</strong> It
                gives us standard names and definitions for the techniques we
                use. If we don't study design patterns in software, we won't be
                able to improve them, and it'll be harder to come up with new
                ones.
            </p>
        `,
        tags: [quoteTags.Pattern, quoteTags.Motivation],
        rating: 4
    },
    {
        id: "design-patterns-p351-bis",
        chapter: 6,
        page: "351",
        content: `
            <h3>What to Expect from Design Patterns</h3>
            <h4>A Common Design Vocabulary</h4>
            <h4>A Documentation and Learning Aid</h4>
            <h4>An Adjunct to Existing Methods</h4>
            <h4>A Targe t for Refactoring</h4>
        `,
        tags: [quoteTags.Pattern, quoteTags.Motivation, quoteTags.Inspiring],
        rating: 4
    }
];

function tip(content: string) {
    return `
        <p style="margin-left: 40px; margin-right: 40px; font-style: italic;">
            ${content}
        </p>
    `;
}
