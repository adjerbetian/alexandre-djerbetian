See https://github.com/360Learning/platform/pull/1528#issuecomment-666553470

## Test and stubs

> - Lots of unit tests are testing the functioning of stub: are these tests really usefulls, as we have functioning tests.
> - Some functioning tests use stubs: why ? It's should be better to use stubs/nocks in the very very last moment when you can't help it


I have to say, those are very good and interesting questions, but also hard to answer in 2 words. And I'm not good at being concise :sweat_smile:.

## In short

Our code does not have well-defined units. Things are more like spaghetti: a function calls a function which calls a function which calls a function etc. A function itself does not have a real business meaning without its dependencies.
So, testing a function in isolation does not bring much value. And in general, using stubs in spaghetti is not safe enough.

However, if we separate responsibilities into well-defined group of functions sharing a common business topic, those "objects" can be tested in isolation.

---

## Tests at 360

In our code in general, we do not use stubs. You might find some here and there, but they are usually exceptions. The reason I said it above: in spaghetti code, stubs are fragile and meaningless to read, so they are a pain to write, and do not bring confidence that the code is working.

## The problem with those tests

The problem comes from the fact that we test everything which is exported from any file (and that's a good thing). Since we don't stub, we therefore test a functions alone in its file, but we also test it through its calling parent function, and then through its grandparent function, and so on and on.

All our tests, wherever they are, are integrations tests by philosophy. They test the whole data flow every time.

This leads to a lot of duplication in tests, and therefore to be less clear on which test to modify to change one functionality.

## Example

Here is some code

```js
async function createHerosController(req) {
    return createHeros(req.body.heros);
}
async function createHeros(names) {
    return µ.map(names,
        name => createHero(name)
    );
}
async function createHero(name) {
    const hero = buildHero({ name });
    await heroRepository.insert(hero);
    return hero;
}
```

The tests would be

<table>
<tr>
<th>createHerosController</th>
<th>createHeros</th>
<th>createHero</th>
</tr>

<tr>

<td>

```js
it("should insert heros in db", async () => {
    await createHerosController(buildReq({
        body: [
            "Batman",
            "Iron Man",
            "Wonderwoman"
        ]
    }));

    const herosInDB = await fetchAllHeros();
    expect(namesOf(herosInDB)).to.deep.equal([
        "Batman",
        "Iron Man",
        "Wonderwoman"
    ]);
});
```

</td>
<td>

```js
it("should insert heros in db", async () => {
    await createHeros([
        "Batman",
        "Iron Man",
        "Wonderwoman"
    ]);

    const herosInDB = await fetchAllHeros();
    expect(namesOf(herosInDB)).to.deep.equal([
        "Batman",
        "Iron Man",
        "Wonderwoman"
    ]);
});
```

</td>
<td>

```js
it("should insert the hero in db", async () => {
    await createHero("Batman");

    const herosInDB = await fetchAllHeros();
    expect(namesOf(herosInDB)).to.deep.equal([
        "Batman"
    ]);
});
```

</td>
</tr>
</table>

- first, we see that `createHero` is tested 3 times in those tests.
- and also, if we want to change how heros are created to capitalize their names, we have to change all the tests. But in practice, it's impossible to find them all. So, what we do is change the code first, and then change all the failing tests. Goodbye TDD.

## The NotificationCenter

In this module, we try to separate concerns into lego pieces. It's more like a ratatouille than spaghetti....

### The integration tests

We have one defined big block, the `NotificationCenter`, which is tested in integration of its parts. No access to private methods in tests, and of course, no direct access to the `db` either (at least for the collections we are owner of). All of those are implementation details and should be hidden.

When those tests are passing, we're confident the features work.

However, those tests are far from the tested code.

### The unit tests

Those tests test the implementation details. And since we already have integration tests guaranteeing the whole flow, we can test every unit independently. Unit testing the `subscriptionManager` does not rely on the repositories' implementation, nor on a working db, those are other units.

Unit tests are here mainly here for 2 reasons:
- when doing TDD they help you move on small step by small step. For instance, you can code the logic of the `subscriptionManager` and not have coded the repositories yet.
- when changing the code, you get feedback close to where your change is, and you see the impact on features. Ideally, when you change the code, only one unit test breaks, and then, all the integration tests relying on that code break. Your impact is clear.
