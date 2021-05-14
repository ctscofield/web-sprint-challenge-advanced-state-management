# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    It's nice because then its possible to work with the state diectly in the component thats being worked on.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is great! Thats where I can store the entire state tree. And the way I access the state inside of store is to dispatch an action on it. Also reducers are how new state is created by using the current state and action and passing them in as arguments.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    Because redux is synchronous by nature it makes it difficult to to return functions, so thunk basically makes it so I can call functions asynchonously and work on them.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

To be completely honest this sprint was tough! And so its trying to pick btween the lesser of the evils. I think useReducer introduced some great things, redux was a nightmare but it got better with being able to use async features, and the context way was the easiest but still not without challenges. That being said I found the context way to be my favorite because I was able to make sense of it the easiest. Granted these projects are small scale and so I think redux as hard as it can be is best used for large projects but I'll cross that bridge when I get there and stick to context for now.