# Web Development Project 2 - CS Fields Flashcards

Submitted by: **Kevin Bayona**

This web app: **A Jeopardy-style flashcard app covering 15 computer science fields. Cards show a description clue on the front and reveal the CS field name on the back. Cards are color coded by difficulty (Easy/Medium/Hard) and displayed in a random order.**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] The total number of cards in the set is displayed
- [x] **A single card at a time is displayed**
  - [x] A single card is displayed at a time
  - [x] Only one half of the information pair is displayed at a time
  - [x] Clicking on the card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards have different visual styles based on their category
  - [x] Cards are color coded by difficulty: Easy (green), Medium (orange), Hard (red)
  - [x] Difficulty badge is displayed on each card

The following **additional** features are implemented:

* [x] Smooth 3D flip animation when clicking a card
* [x] Cards reset to front side when navigating to next card

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/user-attachments/assets/1408ecfe-d69f-410a-a0ac-048a052e7943' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

Learning how to use useState to track both the current card index and the flipped state simultaneously was the main challenge. Also implemented a do-while loop to ensure the next random card is always different from the current one.

## License

    Copyright 2026 Kevin Bayona

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.