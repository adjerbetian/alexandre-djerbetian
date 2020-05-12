import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { javascript } from "../utils";

export const chapters = [
    "Preface",
    "Good Parts",
    "Grammar",
    "Objects",
    "Functions",
    "Inheritance",
    "Arrays",
    "Regular Expressions",
    "Methods",
    "Style",
    "Beautiful Features",
    "Appendix A. Awful Parts 101",
    "Appendix B. Bad Parts 109",
    "Appendix C. JSLint 115",
    "Appendix D. Syntax Diagrams 125",
    "Appendix E. JSON 136"
];

export const quotes: QuoteDBModel[] = [
    {
        id: "javascript-s-popularity",
        chapter: 1,
        page: "1",
        content: `
            <p>
                JavaScript is a language with more than its share of bad parts.
                It went from non-existence to global adoption in an alarmingly
                short period of time. It never had an interval in the lab when
                it could be tried out and polished. It went straight into
                Netscape Navigator 2 just as it was, and it was very rough. When
                Java<sup>TM</sup> applets failed, JavaScript became the
                "Language of the Web" by default. <strong>JavaScript's 
                popularity is almost completely independent of its qualities 
                as a programming language.</strong>
            </p>
        `,
        tags: [quoteTags.History],
        rating: 3
    },
    {
        id: "javascript-simple-prototype-creation",
        chapter: 3,
        page: "22",
        content: `
            <p>
                When you make a new object, you can select the object that
                should be its prototype. The mechanism that JavaScript
                provides to do this is messy and complex, but it can be
                significantly simplified. We will add a create method to the
                Object function. The create method creates a new object that
                uses an old object as its prototype. [...]
            </p>
            ${javascript(`
                if (typeof Object.create !== 'function') {
                    Object.create = function(o) {
                        var F = function() {};
                        F.prototype = o;
                        return new F();
                    };
                }
            `)}
        `,
        tags: [quoteTags.Code, quoteTags.TechnologySpecific],
        rating: 1
    },
    {
        id: "javascript-closure-definition",
        chapter: 4,
        page: "27",
        content: `
            <p>
                Functions can be defined inside of other functions. An inner
                function of course has access to its parameters and variables.
                An inner function also enjoys access to the parameters and
                variables of the functions it is nested within. <strong>The 
                function object created by a function literal contains a link 
                to that outer context. This is called <i>closure</i>.</strong>
                This is the source of enormous expressive power.
            </p>
        `,
        tags: [quoteTags.Definition],
        rating: 2
    },
    {
        id: "the-invocation-pattern",
        chapter: 4,
        page: "27",
        content: `
            <h3>Invocation</h3>
            <p>
                In addition to the declared parameters, every function
                receives two additional parameters: <code>this</code> and
                <code>arguments</code>. The <code>this</code> parameter is
                very important in object oriented programming, and its value
                is determined by the <i>invocation pattern</i>. There are
                four patterns of invocation in JavaScript: the method
                invocation pattern, the function invocation pattern, the
                constructor invocation pattern, and the apply invocation
                pattern. <strong>The patterns differ in how the bonus 
                parameter <code>this</code> is initialized.</strong> [...]
            </p>

            <h3>The Method Invocation Pattern</h3>
            <p>
                When a function is stored as a property of an object, we
                call it a <i>method</i>. When a method is invoked,
                <code>this</code> is bound to that object. [...]
            </p>
            ${javascript(`
                var myObject = {
                    value: 0,
                    increment: function (inc) {
                        this.value += typeof inc === 'number' ? inc : 1;
                    }
                };
                myObject.increment();
            `)}
            <p>
                [...] The binding of <code>this</code> to the object happens
                at invocation time. This very late binding makes functions
                that use <code>this</code> highly reusable. Methods that get
                their object context from this are called <i>public methods.</i>
            </p>

            <h3>The Function Invocation Pattern</h3>
            <p>
                When a function is not the property of an object, then it is
                invoked as a function:
            </p>
            ${javascript(`
                var sum = add(3, 4); // sum is 7
            `)}
            <p>
                When a function is invoked with this pattern, <code>this</code> 
                is bound to the global object. <strong>This was a mistake in the 
                design of the language.</strong> Had the language been designed 
                correctly, when the inner function is invoked, <code>this</code>
                would still be bound to the <code>this</code> variable of
                the outer function. A consequence of this error is that a
                method cannot employ an inner function to help it do its
                work because the inner function does not share the method’s
                access to the object as its <code>this</code> is bound to
                the wrong value. Fortunately, there is an easy workaround.
                If the method defines a variable and assigns it the value of
                <code>this</code>, the inner function will have access to
                <code>this</code> through that variable. <strong>By convention, 
                the name of that variable is <code>that</code></strong>:
            </p>
            ${javascript(`
                myObject.double = function() {
                    var that = this; // Workaround.
                    var helper = function() {
                        that.value = add(that.value, that.value);
                    };
                    helper();
                };
            `)}

            <h3>The Constructor Invocation Pattern</h3>
            <p>
                [...] <strong>If a function is invoked with the <code>new</code>
                prefix, then a new object will be created with a hidden link to 
                the value of the function’s prototype member, and 
                <code>this</code> will be bound to that new object.</strong>[...]
            </p>
            ${javascript(`
                // Create a constructor function called Quo [with] a status property.
                var Quo = function (string) {
                    this.status = string;
                };

                // Give all instances of Quo a public method called get_status.
                Quo.prototype.get_status = function () {
                    return this.status;
                };

                // Make an instance of Quo.
                var myQuo = new Quo("confused");

                document.writeln(myQuo.get_status());  // confused"
            `)}
            <p>
                Functions that are intended to be used with the new prefix
                are called <i>constructors</i>. By convention, they are kept
                in variables with a capitalized name. If a constructor is
                called without the <code>new</code> prefix, very bad things
                can happen without a compile-time or runtime warning, so the
                capitalization convention is really important.
            </p>
            <p>
                Use of this style of constructor functions is not
                recommended. We will see better alternatives in the next
                chapter.
            </p>

            <h3>The Apply Invocation Pattern</h3>
            <p>
                [...] The <code>apply</code> method lets us [...] choose the
                value of <code>this</code>. The <code>apply</code> method
                takes two parameters. The first is the value that should be
                bound to <code>this</code>. The second is an array of
                parameters.
            </p>
            ${javascript(`
                var statusObject = {
                    status: 'A-OK'
                };

                // statusObject does not inherit from Quo.prototype,
                // but we can invoke the get_status method on
                // statusObject even though statusObject does not have
                // a get_status method.
                var status = Quo.prototype.get_status.apply(statusObject);
                // status is 'A-OK'
            `)}
        `,
        tags: [quoteTags.Code, quoteTags.TechnologySpecific],
        rating: 3
    },
    {
        id: "javascript-closure-advanced",
        chapter: 4,
        page: "37",
        content: `
            <h3>Closure</h3>
            <p>
                The good news about scope is that inner functions get access
                to the parameters and variables of the functions they are
                defined within (with the exception of this and arguments).
                This is a very good thing.
            </p>
            <p>
                [...] [An] interesting case is when the inner function has a
                longer lifetime than its outer function.
            </p>
            <p>
                Earlier, we made a <code>myObject</code> that had a value
                and an increment method. Suppose we wanted to protect the
                value from unauthorized changes. Instead of initializing
                <code>myObject</code> with an object literal, <strong>we 
                will initialize <code>myObject</code> by calling a function 
                that returns an object literal.</strong> That function 
                defines a <code>value</code> variable. That variable is 
                always available to the increment and <code>getValue</code> 
                methods, but the function’s scope keeps it hidden from the 
                rest of the program:
            </p>
            ${javascript(`
                var myObject = (function () {
                    var value = 0;
                    return {
                        increment: function (inc) {
                            value += typeof inc === "number" ? inc : 1;
                        },
                        getValue: function ( ) {
                            return value;
                        }
                    };
                }());
            `)}
            <p>
                We are not assigning a function to myObject. We are
                assigning the result of invoking that function. Notice the
                <code>()</code> on the last line. The function returns an
                object containing two methods, and those methods continue to
                enjoy the privilege of access to the value variable.
            </p>
            <p>
                The <code>Quo</code> constructor from earlier in this
                chapter produced an object with a <code>status</code>
                property and a <code>get_status</code> method. But that
                doesn’t seem very interesting. Why would you call a getter
                method on a property you could access directly? It would be
                more useful if the status property were
                <strong>private</strong>. So, let’s define a different kind
                of quo function to do that:
            </p>
            ${javascript(`
                var quo = function (status) {
                    return {
                        get_status: function () {
                            return status;
                        }
                    };
                };
                var myQuo = quo("amazed");
                document.writeln(myQuo.get_status( ));
            `)}
            <p>
                This <code>quo</code> function is designed to be used
                without the <code>new</code> prefix, so the name is not
                capitalized. When we call <code>quo</code>, it returns a new
                object containing a <code>get_status</code> method. A
                reference to that object is stored in <code>myQuo</code>.
                The <code>get_status</code> method still has privileged
                access to <code>quo</code>’s <code>status</code> property
                even though <code>quo</code> has already returned.
                <code>get_status</code> does not have access to a copy of
                the parameter; it has access to the parameter itself. This
                is possible because the function has access to the context
                in which it was created. <strong>This is called closure.</strong>
            </p>
        `,
        tags: [
            quoteTags.Code,
            quoteTags.Definition,
            quoteTags.Structure,
            quoteTags.TechnologySpecific
        ],
        rating: 3
    },
    {
        id: "javascript-has-better-options-than-classes",
        chapter: 5,
        page: "49",
        content: `
            <p>
                The pseudoclassical form can provide comfort to programmers who
                are unfamiliar with JavaScript, but it also hides the true
                nature of the language. The classically inspired notation can
                induce programmers to compose hierarchies that are unnecessarily
                deep and complicated. <strong>Much of the complexity of class 
                hierarchies is motivated by the constraints of static type 
                checking.</strong> JavaScript is completely free of those 
                constraints. In classical languages, class inheritance is the 
                only form of code reuse. JavaScript has more and better options.
            </p>
        `,
        tags: [quoteTags.Structure, quoteTags.TechnologySpecific],
        rating: 1
    }
    // todo: inheritance
];
