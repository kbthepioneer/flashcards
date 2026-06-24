# Web Development Project 3 - CS Fields Flashcards Part 2

Submitted by: **Kevin Bayona**

This web app: **An extended Jeopardy-style flashcard app covering 15 computer science fields. Users can type guesses, navigate cards in order, shuffle the deck, track streaks, and mark cards as mastered.**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can submit a guess into an input box before seeing the flipside of a card**
  - [x] Application features a clearly labeled input box with a submit button
  - [x] Clicking submit with an incorrect answer shows visual feedback that it is wrong
  - [x] Clicking submit with a correct answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button navigates to the next card in sequence
  - [x] A previous/back button returns to the previous card
  - [x] Back button is disabled on the first card
  - [x] Next button is disabled on the last card

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
- [x] A user's answer may be counted as correct even when slightly different (fuzzy matching)
- [x] A counter displays the user's current and longest streak of correct responses
  - [x] Current streak increments on correct guess
  - [x] Current streak resets to 0 on incorrect guess
  - [x] Longest streak updates when current streak exceeds it
- [x] A user can mark a card as mastered and have it removed from the pool
  - [x] Mastered cards are removed from the active deck
  - [x] Mastered card count is displayed

The following **additional** features are implemented:

* [x] Cards are color coded by difficulty (Easy/Medium/Hard)
* [x] 3D flip animation when clicking a card
* [x] Card counter shows current position in deck

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/user-attachments/assets/c082d5de-41fb-4779-9c59-f68a5bea5267' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

The main challenge was implementing the master card feature — removing a card from the active deck while keeping the index valid required careful state management with cardOrder array filtering.

## License

    Copyright 2026 Kevin Bayona-Galindo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.